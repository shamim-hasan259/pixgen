import Link from "next/link";
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-7xl font-bold mb-4 animate-bounce">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you are looking for might have been removed or the URL is
        incorrect.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
