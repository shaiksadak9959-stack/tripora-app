"use client";

import { useState } from "react";

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function register() {

    if (!name.trim()) {
      setMessage("Enter your name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("Enter a valid mobile number.");
      return;
    }

    setMessage(
      "Demo registration complete. Connect your authentication/OTP provider for production."
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-5">

      <div className="card w-full max-w-md p-8">

        <a
          href="/"
          className="text-3xl font-black text-blue-600"
        >
          tripora.
        </a>

        <h1 className="text-3xl font-black mt-8">
          Create your account
        </h1>

        <input
          className="input mt-7"
          placeholder="Full name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="input mt-3"
          placeholder="Mobile number"
          maxLength={10}
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value.replace(/\D/g, "")
            )
          }
        />

        <button
          className="btn btn-primary w-full mt-4"
          onClick={register}
        >
          Create account
        </button>

        {message && (
          <p className="text-sm text-blue-700 font-bold mt-4">
            {message}
          </p>
        )}

        <p className="text-center text-sm text-slate-500 mt-7">
          Already registered?{" "}
          <a
            href="/login"
            className="text-blue-600 font-bold"
          >
            Sign in
          </a>
        </p>

      </div>

    </main>
  );
}