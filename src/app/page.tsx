import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-12 sm:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Troy Ascher
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
          Data Engineer
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          I design and build reliable data infrastructure with a focus on scalability and maintainability.
          With a background in HRIS systems and five years of international experience in China, I transitioned
          to data engineering to architect solutions using modern cloud platforms. I specialize in Snowflake, dbt,
          and SQL to deliver data systems that drive business value.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 max-w-2xl mx-auto">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl text-center"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-900 transition font-semibold shadow-lg hover:shadow-xl text-center"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="bg-white text-gray-800 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold border-2 border-gray-300 shadow-lg hover:shadow-xl text-center"
          >
            Contact
          </Link>
          <Link
            href="/TroyAscherDataEngineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold border-2 border-gray-300 shadow-lg hover:shadow-xl text-center"
          >
            Resume
          </Link>
        </div>
        <div className="text-gray-600 text-sm">
          <a href="https://linkedin.com/in/troy-ascher" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800">LinkedIn</a>
          <span className="mx-2">•</span>
          <a href="https://github.com/leetroyjenkins" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800">GitHub</a>
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-purple-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">Key Achievements</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Measurable impact from production data engineering projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">38%</div>
              <p className="text-gray-700 font-medium">Snowflake Cost Reduction</p>
              <p className="text-sm text-gray-600 mt-2">Developed a Python/Snowpark framework for automated query optimization</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">21%</div>
              <p className="text-gray-700 font-medium">Faster Pipelines</p>
              <p className="text-sm text-gray-600 mt-2">Achieved through refactoring legacy SQL and modernizing data architecture</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">5 Years</div>
              <p className="text-gray-700 font-medium">In China</p>
              <p className="text-sm text-gray-600 mt-2">Earned two degrees while studying Mandarin and international business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Core technologies and platforms for building scalable, reliable data infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['SQL', 'Snowflake', 'dbt', 'Python', 'Terraform', 'Azure', 'Fivetran', 'Git', 'Monte Carlo', 'R'].map((tech) => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 text-center bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-base sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I&apos;m interested in opportunities where data engineering drives meaningful impact: improving healthcare outcomes,
          optimizing business operations, or building infrastructure that enables data-driven decision making.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
