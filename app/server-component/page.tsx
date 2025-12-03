import Link from "next/link";

async function getData() {
  // Simulating a server-side data fetch
  return {
    message: "This data was fetched on the server!",
    timestamp: new Date().toISOString(),
  };
}

export default async function ServerComponentPage() {
  const data = await getData();

  return (
    <div className="p-8">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">Server Component Example</h1>
      <p className="mb-4">
        This is a server component. It runs on the server and can directly
        fetch data without client-side JavaScript.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Server Timestamp:</strong> {data.timestamp}</p>
      </div>
    </div>
  );
}

