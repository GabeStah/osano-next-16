"use client";

import { useState } from "react";
import Link from "next/link";

export default function ClientComponentPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">Client Component Example</h1>
      <p className="mb-4">
        This is a client component using the &quot;use client&quot; directive.
        It can use React hooks like useState.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
}

