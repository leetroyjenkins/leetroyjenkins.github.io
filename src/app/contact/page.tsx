export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 mb-6">
          I'd love to hear from you! Feel free to reach out through any of the following channels:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">📧</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">
                your.email@example.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">💼</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">🐙</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">GitHub</h3>
              <a href="https://github.com/leetroyjenkins" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                github.com/leetroyjenkins
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
