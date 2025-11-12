export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Welcome! I'm Troy Ascher, and this is my portfolio website.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Background</h2>
        <p className="text-gray-700 mb-4">
          Add your background information here - your education, experience, and what you do.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Data Science</h3>
            <p className="text-sm text-gray-600">Python, R, Analytics</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Web Development</h3>
            <p className="text-sm text-gray-600">Next.js, React, TypeScript</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Other Skills</h3>
            <p className="text-sm text-gray-600">Add your skills</p>
          </div>
        </div>
      </div>
    </div>
  );
}
