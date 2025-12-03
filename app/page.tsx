export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Osano Next.js 15 Test Suite</h1>
      <p className="text-gray-600 mb-6">
        This is a test application for verifying Osano cookie consent integration with Next.js 15.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Test Pages</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Client Component</strong> - Tests Osano behavior with client-side React components</li>
          <li><strong>Server Component</strong> - Tests Osano behavior with server-rendered components</li>
        </ul>
      </div>
      <div className="mt-6 bg-blue-50 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Navigation Types</h2>
        <p className="text-gray-700 text-sm">
          Use the sidebar to test different navigation methods:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
          <li><strong>Link (default)</strong> - Next.js Link with default prefetch</li>
          <li><strong>Link prefetch=true</strong> - Eagerly prefetches the page</li>
          <li><strong>Link prefetch=false</strong> - No prefetching, client-side navigation only</li>
          <li><strong>&lt;a&gt; tag</strong> - Full page reload (traditional navigation)</li>
        </ul>
      </div>
    </div>
  );
}
