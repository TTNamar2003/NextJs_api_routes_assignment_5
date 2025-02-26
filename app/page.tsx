import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-16">
      <h1 className="text-4xl font-bold mb-6">Welcome to Home Page</h1>
      <div className="space-y-4">
        <Link href="/teachers">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
            View Teachers
          </button>
        </Link>
        <br />
        <Link href="/students">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 mt-4">
            View Students
          </button>
        </Link>
      </div>
    </div>
  );
}
