export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Let's Connect</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-700 mb-8 text-lg">
          I'm always interested in discussing data engineering opportunities, collaboration on interesting projects, 
          or just connecting with fellow data professionals. Feel free to reach out!
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">📧</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
              <a href="mailto:ascher.troy@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                ascher.troy@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">💼</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">LinkedIn</h3>
              <a href="https://linkedin.com/in/troyascher" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                linkedin.com/in/troyascher
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">🐙</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">GitHub</h3>
              <a href="https://github.com/leetroyjenkins" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                github.com/leetroyjenkins
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">🌐</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Location</h3>
              <p className="text-gray-700 font-medium">Madison, WI</p>
              <p className="text-sm text-gray-600">Open to remote opportunities</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            Currently working as an Associate Data Engineer at Sub-Zero Group, 
            building modern data infrastructure with Snowflake, dbt, and Azure.
          </p>
        </div>
      </div>
    </div>
  );
}
