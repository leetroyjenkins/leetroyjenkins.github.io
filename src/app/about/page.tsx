import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">About Me</h1>
      
      <div className="prose prose-base sm:prose-lg max-w-none">
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
          <div className="flex-1">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800">
              I&apos;m a data engineer focused on building efficient, maintainable, and scalable systems. I&apos;m drawn to data engineering
              because it combines technical problem-solving with creative architectural design. Currently, I&apos;m at Sub-Zero Group in Madison, WI
              where I&apos;m one of two data engineers managing data pipelines with Snowflake, dbt, Terraform, and SQL. We are migrating legacy
              systems to modern cloud architecture and ensuring data reliability across the organization.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image 
              src="/images/hotpot.jpg" 
              alt="Troy in China" 
              width={300} 
              height={400}
              sizes="(min-width: 768px) 300px, 100vw"
              className="rounded-lg shadow-lg object-cover w-full md:w-[300px]"
            />
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">My Story</h2>
        <p className="text-base sm:text-lg mb-4 leading-relaxed text-gray-900">
          My path to data engineering is unconventional. I spent nearly a decade in HR, advancing from benefits representative
          at Target to HRIS analyst at Ameriprise Financial, where I managed PeopleSoft modules, utilized TOAD for Oracle, and served
          as a subject matter expert during a PeopleSoft to Workday implementation. I developed strong skills in project coordination,
          bridging technical teams and business stakeholders, gathering requirements, and maintaining alignment across complex initiatives.
          I worked with enterprise systems and solved complex problems, even receiving an individual award from our CEO for maintaining business
          continuity during organizational changes. However, I wanted to do more than maintain existing systems.
        </p>

        <p className="text-base sm:text-lg mb-4 leading-relaxed text-gray-900">
          I realized I wanted to design and build systems from the ground up, not just maintain existing ones. I wanted to architect
          solutions, make strategic design decisions, and create systems that were both elegant and functional. In 2017, I made a
          significant career pivot: I left my stable position and moved to China to pursue a bachelor&apos;s degree and transition into
          technology. This was a goal I had considered for years, and I committed fully to making it happen.
        </p>
        
        <p className="text-base sm:text-lg mb-4 leading-relaxed text-gray-900">
          I spent five years in China, based in Suzhou and Beijing. Initially accepted into the information systems program at
          Xi&apos;an Jiaotong-Liverpool University, I switched to International Business and Chinese language,
          recognizing that I had a unique opportunity to fully immerse myself in the culture through language study. In three years of school I
          completed four years of language courses, achieved HSK3 certification, and earned my bachelor&apos;s degree. I then pursued a master&apos;s
          degree in Computer Information Systems from Boston University remotely from Beijing during the pandemic. My experience in China
          and as an unconventional student taught me that when I set goals and push myself I&apos;m capable of adapting to any situation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Image 
            src="/images/xjtlu.jpg" 
            alt="Xi'an Jiaotong-Liverpool University campus" 
            width={400} 
            height={300}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-lg shadow-md object-contain w-full h-64 bg-gray-100"
          />
          <Image 
            src="/images/suzhou-park.jpg" 
            alt="Park in Suzhou, China" 
            width={400} 
            height={300}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>

        <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-gray-700">
          Since graduating in 2022, I have worked as a data engineer with increasing responsibilities. I began at UnitedHealth
          Group in their competitive Technology Development Rotation Program, where I migrated legacy DataStage/Teradata pipelines
          to Snowflake, developed performance optimization frameworks, and gained expertise in HIPAA-compliant data handling at
          enterprise scale. Currently at Sub-Zero Group, I build the data infrastructure supporting their SAP migration and
          analytics platform and have a voice in the ongoing data architecture decisions being made to support our business.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">What I Actually Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="font-bold text-base sm:text-lg mb-3 text-blue-900">Data Platforms</h3>
            <ul className="space-y-1 text-sm sm:text-base text-gray-700">
              <li>• Snowflake</li>
              <li>• dbt for transformations</li>
              <li>• Fivetran for ingestion</li>
              <li>• Terraform for IaC</li>
              <li>• Monte Carlo for monitoring</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-white p-5 sm:p-6 rounded-lg shadow-md border border-green-100">
            <h3 className="font-bold text-base sm:text-lg mb-3 text-green-900">Languages & Tools</h3>
            <ul className="space-y-1 text-sm sm:text-base text-gray-700">
              <li>• SQL</li>
              <li>• Python (Snowpark, Pandas, Streamlit)</li>
              <li>• Git & Azure DevOps</li>
              <li>• Bash scripting</li>
              <li>• Power BI</li>
              <li>• R</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-5 sm:p-6 rounded-lg shadow-md border border-purple-100">
            <h3 className="font-bold text-base sm:text-lg mb-3 text-purple-900">What I Focus On</h3>
            <ul className="space-y-1 text-sm sm:text-base text-gray-700">
              <li>• Building reliable pipelines</li>
              <li>• Data modeling</li>
              <li>• Performance optimization</li>
              <li>• Data quality & governance</li>
              <li>• Cost & performance optimization</li>
              <li>• Documentation & knowledge transfer</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Work History</h2>
        <div className="space-y-6 mb-6 sm:mb-8">
          <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 py-2">
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Sub-Zero Group</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2">Data Engineer • Madison, WI • July 2024 - Present</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Building data pipelines for the enterprise ERP migration from Infor XA to SAP. Utilizing dbt, Fivetran, Snowflake,
              and Terraform to create scalable analytics infrastructure designed for long-term organizational needs.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 sm:pl-6 py-2">
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">UnitedHealth Group (Optum)</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2">Data Engineer • Austin, TX • July 2022 - July 2024</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Selected for the competitive engineering rotation program. Migrated legacy pipelines to Snowflake over two years,
              developed automation frameworks that reduced compute costs by 38%, and implemented security patterns for HIPAA
              compliance. Gained expertise in managing healthcare data at enterprise scale.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 sm:pl-6 py-2">
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Ameriprise Financial</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2">Senior HRIS Analyst • Minneapolis, MN • 2015 - 2017</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Developed expertise in enterprise system operations. Managed PeopleSoft integrations, security administration,
              UAT coordination, and requirements gathering. This role crystallized my interest in working directly with data
              systems and architecture.
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Education</h2>
        <div className="space-y-6 mb-6 sm:mb-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <Image
              src="/images/bostonuniversity.jpg"
              alt="Boston University"
              width={80}
              height={80}
              className="rounded object-contain flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20"
            />
            <div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">Master of Science, Computer Information Systems</h3>
              <p className="text-sm sm:text-base text-gray-600">Boston University • 2022</p>
              <p className="text-xs sm:text-sm text-gray-600">Specialized in Business Intelligence & Database Management</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <Image 
              src="/images/xjtlu-shield.jpg" 
              alt="XJTLU Shield with Liver Birds" 
              width={80} 
              height={80}
              className="rounded object-contain flex-shrink-0 bg-white"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900">Bachelor of Arts, International Business & Chinese Language</h3>
              <p className="text-gray-600">Xi&apos;an Jiaotong-Liverpool University • Suzhou, China • 2020</p>
              <p className="text-gray-600 text-sm">University of Liverpool degree program delivered in English at a joint venture campus in China</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Outside of Work</h2>
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          Outside of work, I play guitar, roast coffee, bike around Madison, and work on personal technical projects like this website.
          Lately, I&apos;ve been enjoying learning while building things with Claude code.
          I continue to maintain my Mandarin language skills, though my proficiency has declined somewhat since returning from China.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="rounded-lg shadow-md overflow-hidden h-64 w-full relative">
              <Image 
                src="/images/troyguitar.jpg" 
                alt="Playing guitar" 
                width={300} 
                height={300}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover w-full h-full scale-125"
                style={{ objectPosition: '50% 40%' }}
              />
            </div>
            <p className="mt-2 text-gray-600 font-medium">Guitar</p>
          </div>
          <div className="text-center">
            <Image 
              src="/images/coffee.jpg" 
              alt="Coffee roasting" 
              width={300} 
              height={300}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <p className="mt-2 text-gray-600 font-medium">Coffee Roasting</p>
          </div>
          <div className="text-center">
            <Image 
              src="/images/troybike.jpg" 
              alt="Biking around Madison" 
              width={300} 
              height={300}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <p className="mt-2 text-gray-600 font-medium">Biking</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <p className="text-lg text-gray-800">
            <strong>What I&apos;m looking for:</strong> I&apos;m seeking opportunities to work on data infrastructure that drives meaningful impact,
            whether improving healthcare systems, enhancing financial services accessibility, or enabling better business decision-making.
            I prioritize writing maintainable code, building reliable systems, and collaborating with teams committed to technical excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
