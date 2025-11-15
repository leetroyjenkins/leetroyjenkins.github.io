import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        Sorry, we couldn’t find the page you’re looking for. It may have been moved or deleted.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl"
      >
        Go back home
      </Link>
    </div>
  );
}
