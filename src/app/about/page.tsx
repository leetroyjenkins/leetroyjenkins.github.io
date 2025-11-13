import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
          <div className="flex-1">
            <p className="text-xl leading-relaxed text-gray-800">
              I'm a data engineer who loves building things that actually work. Currently at Sub-Zero Group in Madison, WI, 
              I spend my days building data pipelines with Snowflake, dbt, and Python; migrating legacy systems to modern 
              cloud architecture and making sure the data teams can actually trust what they're seeing.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image 
              src="/images/hotpot.jpg" 
              alt="Troy in China" 
              width={300} 
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">My Story</h2>
        <p className="text-lg mb-4 leading-relaxed text-gray-900">
          My path to data engineering has been anything but conventional. I spent nearly a decade in HR, working my way 
          from benefits representative at Target to HRIS analyst at Ameriprise Financial, where I managed PeopleSoft databases, 
          handled TOAD for Oracle, and was a subject matter expert on implementation projects. I was good at it. I worked with enterprise systems, 
          solved complex problems, and even won a "Melonhead" award from the CEO for keeping things running during layoffs. 
          But something was missing.
        </p>

        <p className="text-lg mb-4 leading-relaxed text-gray-900">
          I realized what I really wanted was to create and design;to build things from scratch and perfect them, not just 
          administer what someone else had built. I wanted to be the one designing the solution, not just maintaining it. 
          So in 2017, I did something most people thought was crazy. I walked away from a stable career and moved to China.
        </p>
        
        <p className="text-lg mb-4 leading-relaxed text-gray-900">
          I spent five years split between Suzhou and Beijing. Three years getting my bachelor's 
          degree in international business and Chinese language at Xi'an Jiaotong-Liverpool University, 
          and then two more years studying at Boston University from my apartment in Beijing (thanks Covid). I studied 
          Mandarin intensively (passed HSK3), and while I'm definitely not fluent, I can navigate everyday conversations. 
          It wasn't just about learning a language or getting a degree; it was about proving to myself that I could change 
          direction to pursue my goals, that I could adapt to anything, and that I was capable of more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Image 
            src="/images/xjtlu.jpg" 
            alt="Xi'an Jiaotong-Liverpool University campus" 
            width={400} 
            height={300}
            className="rounded-lg shadow-md object-contain w-full h-64 bg-gray-100"
          />
          <Image 
            src="/images/suzhou-park.jpg" 
            alt="Park in Suzhou, China" 
            width={400} 
            height={300}
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>

        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          After that, I went to Boston University for my Master's in Computer Information Systems, specializing in 
          business intelligence and database management. That's where I fell in love with data engineering: the challenge 
          of turning messy, real-world data into something useful.
        </p>

        <p className="text-lg mb-8 leading-relaxed text-gray-700">
          Since graduating in 2022, I've been working as a data engineer. I started at UnitedHealth Group in their 
          Technology Development Rotation Program, where I migrated legacy DataStage/Teradata pipelines to Snowflake, 
          built performance optimization frameworks, and learned what it takes to handle HIPAA-compliant data at scale. 
          Now at Sub-Zero Group, I'm building the data infrastructure that supports their SAP migration and analytics needs.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What I Actually Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Data Platforms</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• Snowflake (my daily driver)</li>
              <li>• dbt for transformations</li>
              <li>• Azure Data Factory</li>
              <li>• Fivetran for ingestion</li>
              <li>• Terraform for IaC</li>
              <li>• Monte Carlo for monitoring</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md border border-green-100">
            <h3 className="font-bold text-lg mb-3 text-green-900">Languages & Tools</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• SQL (lots of SQL)</li>
              <li>• Python (Snowpark, Pandas)</li>
              <li>• Git & Azure DevOps</li>
              <li>• Bash scripting</li>
              <li>• Power BI</li>
              <li>• R (for fun)</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-md border border-purple-100">
            <h3 className="font-bold text-lg mb-3 text-purple-900">What I Focus On</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• Building reliable pipelines</li>
              <li>• Data modeling (star schema)</li>
              <li>• Performance optimization</li>
              <li>• Data quality & governance</li>
              <li>• Making things faster & cheaper</li>
              <li>• Actually documenting stuff</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work History</h2>
        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="font-bold text-xl mb-2 text-gray-900">Sub-Zero Group</h3>
            <p className="text-gray-600 mb-2">Associate Data Engineer • Madison, WI • July 2024 - Present</p>
            <p className="text-gray-700 leading-relaxed">
              Building data pipelines for their ERP migration from Infor XA to SAP. Working with dbt, Fivetran, Snowflake, 
              and Terraform to create the infrastructure that'll support their analytics for years to come.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-2">
            <h3 className="font-bold text-xl mb-2 text-gray-900">UnitedHealth Group (Optum)</h3>
            <p className="text-gray-600 mb-2">Data Engineer • Austin, TX • July 2022 - July 2024</p>
            <p className="text-gray-700 leading-relaxed">
              Got into their competitive engineering rotation program. Spent two years migrating legacy pipelines to 
              Snowflake, building automation frameworks that cut compute costs by 38%, and implementing security patterns 
              for HIPAA compliance. Also learned that healthcare data is complicated in ways you don't expect.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="font-bold text-xl mb-2 text-gray-900">Ameriprise Financial</h3>
            <p className="text-gray-600 mb-2">Senior HRIS Analyst • Minneapolis, MN • 2015 - 2017</p>
            <p className="text-gray-700 leading-relaxed">
              Where I learned how enterprise systems actually work. Managed PeopleSoft integrations, handled security, 
              ran UAT cycles, and gathered requirements. This is where I first realized I wanted to work more directly with data.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Education</h2>
        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <Image 
              src="/images/bostonuniversity.jpg" 
              alt="Boston University" 
              width={80} 
              height={80}
              className="rounded object-cover flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900">Master of Science, Computer Information Systems</h3>
              <p className="text-gray-600">Boston University • 2022</p>
              <p className="text-gray-600 text-sm">Specialized in Business Intelligence & Database Management</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image 
              src="/images/liverpool.png" 
              alt="University of Liverpool" 
              width={80} 
              height={80}
              className="rounded object-contain flex-shrink-0 bg-white"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900">Bachelor of Arts, International Business & Chinese Language</h3>
              <p className="text-gray-600">Xi'an Jiaotong-Liverpool University • Suzhou, China • 2020</p>
              <p className="text-gray-600 text-sm">University of Liverpool degree, taught in English, in China. It was an experience.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Outside of Work</h2>
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          When I'm not writing SQL, I play guitar, roast my own coffee, bike around Madison, and tinker with side projects. 
          I'm also trying to keep up my Mandarin (with mixed success), though it's definitely gotten rusty since leaving China.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="rounded-lg shadow-md overflow-hidden h-64 w-full relative">
              <Image 
                src="/images/troyguitar.jpg" 
                alt="Playing guitar" 
                width={300} 
                height={300}
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
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <p className="mt-2 text-gray-600 font-medium">Biking</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <p className="text-lg text-gray-800">
            <strong>What I'm looking for:</strong> I want to work on data infrastructure that actually matters, whether that's 
            improving healthcare systems, making financial services more accessible, or helping companies make better decisions. 
            I care about writing code that's maintainable, building systems that are reliable, and working with people who give 
            a damn about doing good work.
          </p>
        </div>
      </div>
    </div>
  );
}
