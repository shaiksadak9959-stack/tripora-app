#!/usr/bin/env node

import express, { Request, Response } from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";

// Create a new MCP server for each request
function createServer() {
  const server = new McpServer(
    {
      name: "hello-world",
      version: "1.0.0",
    },
    {
      capabilities: {
        resources: {},
        tools: {},
      },
    }
  );

  // Hello World tool
  server.tool(
    "say_hello",
    "Returns a friendly greeting message",
    {
      name: z.string().describe("Name of the person to greet"),
    },
    async ({ name }) => {
      const message = `Hello, ${name}! 👋`;

      return {
        content: [
          {
            type: "text",
            text: message,
          },
        ],
        structuredContent: {
          message,
        },
      };
    }
  );

  return server;
}

async function main() {
  const app = express();

  // Parse JSON requests
  app.use(express.json());

  // --------------------------------------------------
  // POST /mcp
  // --------------------------------------------------

  app.post("/mcp", async (req: Request, res: Response) => {
    try {
      // Create a new server for every request
      const server = createServer();

      // Stateless Streamable HTTP transport
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
        enableJsonResponse: true,
      });

      // Clean up when request closes
      res.on("close", () => {
        console.log("Request closed");

        transport.close();
        server.close();
      });

      // Connect MCP server to transport
      await server.connect(transport);

      // Handle MCP request
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      console.error("Error handling MCP request:", error);

      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: {
            code: -32603,
            message: "Internal server error",
          },
          id: null,
        });
      }
    }
  });

  // --------------------------------------------------
  // GET /mcp
  // --------------------------------------------------

  app.get("/mcp", async (_req: Request, res: Response) => {
    console.log("Received GET MCP request");

    res.status(405).json({
      jsonrpc: "2.0",
      error: {
        code: -32000,
        message: "Method not allowed.",
      },
      id: null,
    });
  });

  // --------------------------------------------------
  // DELETE /mcp
  // --------------------------------------------------

  app.delete("/mcp", async (_req: Request, res: Response) => {
    console.log("Received DELETE MCP request");

    res.status(405).json({
      jsonrpc: "2.0",
      error: {
        code: -32000,
        message: "Method not allowed.",
      },
      id: null,
    });
  });

  // --------------------------------------------------
  // Start server
  // --------------------------------------------------

  const PORT = 3000;

  app.listen(PORT, (error?: Error) => {
    if (error) {
      console.error("Failed to start server:", error);
      process.exit(1);
    }

    console.log(
      `Weather MCP Stateless HTTP Server listening on http://localhost:${PORT}/mcp`
    );
  });
}

// Start application
main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

