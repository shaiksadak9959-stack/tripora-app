"use client";

import { useState } from "react";

export default function LoginPage() {

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function requestOtp() {
    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage(
        "Enter a valid 10-digit mobile number."
      );
      return;
    }

    setMessage(
      "Demo: OTP request accepted. Connect your OTP provider for real SMS."
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
          Welcome back
        </h1>

        <p className="text-slate-500 mt-2">
          Sign in to manage your trips and rewards.
        </p>

        <button
          className="w-full border rounded-xl p-3 mt-7 font-bold"
          onClick={() =>
            setMessage(
              "Connect Google OAuth credentials to enable Google login."
            )
          }
        >
          Continue with Google
        </button>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-slate-400 text-sm">
            OR
          </span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <label className="font-bold text-sm">
          Mobile number
        </label>

        <input
          className="input mt-2"
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value.replace(/\D/g, "")
            )
          }
          maxLength={10}
          placeholder="10-digit mobile number"
        />

        <button
          className="btn btn-primary w-full mt-4"
          onClick={requestOtp}
        >
          Send OTP
        </button>

        {message && (
          <p className="text-sm font-semibold text-blue-700 mt-4">
            {message}
          </p>
        )}

        <p className="text-center text-sm text-slate-500 mt-7">
          New to Tripora?{" "}
          <a
            href="/register"
            className="text-blue-600 font-bold"
          >
            Create account
          </a>
        </p>

      </div>

    </main>
  );
}