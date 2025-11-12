import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm Troy Ascher
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to my portfolio
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Learn More About Me
          </Link>
          <Link
            href="/projects"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
