
"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "./../../schemas/LoginSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();
  const [authError, setAuthError] = useState("");

  async function handleLogin(values: LoginType) {

    if (values.email && values.password) {

      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        setAuthError("Invalid email or password");
      } else {
        router.push("/");
        router.refresh();
      }

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">

        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome Back
        </h1>

        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="space-y-5"
        >

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                <Input
                  type="password"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {authError && (
            <div className="text-red-500 text-sm text-center">
              {authError}
            </div>
          )}

          <button
            type="submit"
            className="w-full h-11 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-xl cursor-pointer"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

