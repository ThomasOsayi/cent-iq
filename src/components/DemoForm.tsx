"use client";

import { useState } from "react";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-950">
        <p className="font-medium text-foreground">Thanks for your interest.</p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-zinc-300 bg-background px-3 py-2 text-foreground shadow-sm focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:border-zinc-700"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-md border border-zinc-300 bg-background px-3 py-2 text-foreground shadow-sm focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:border-zinc-700"
        />
      </div>
      <div>
        <label htmlFor="org" className="block text-sm font-medium text-foreground">
          Organization
        </label>
        <input
          id="org"
          name="organization"
          type="text"
          className="mt-1 block w-full rounded-md border border-zinc-300 bg-background px-3 py-2 text-foreground shadow-sm focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:border-zinc-700"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
      >
        Request demo
      </button>
    </form>
  );
}
