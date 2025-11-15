export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Snowflake Performance Optimization Framework',
      description: 'Built an automated testing framework in Python and Snowpark to analyze query performance and optimize warehouse sizing. This wasn\'t just theory; it actually reduced our Snowflake compute costs by 38% while improving query response times.',
      technologies: ['Python', 'Snowpark', 'Snowflake', 'Performance Tuning'],
      link: '#',
      impact: '38% cost reduction',
      company: 'UnitedHealth Group (Optum)',
    },
    {
      id: 2,
      title: 'ERP Migration Data Infrastructure',
      description: 'Key data engineering resource on Sub-Zero\'s migration from Infor XA to SAP. Building dimensional models, ETL pipelines, and the analytics infrastructure that\'ll support their new system. Using dbt for transformations, Fivetran for ingestion, and Terraform for infrastructure as code.',
      technologies: ['dbt', 'Snowflake', 'Fivetran', 'SAP', 'Terraform'],
      link: '#',
      impact: 'Enterprise-wide migration',
      company: 'Sub-Zero Group',
    },
    {
      id: 3,
      title: 'HIPAA-Compliant Security Framework',
      description: 'Designed and implemented row-level and column-level security patterns in Snowflake to handle PHI data. This was for HITRUST certification, so it had to be airtight. Created reusable patterns that other teams could implement without reinventing the wheel.',
      technologies: ['Snowflake', 'Data Governance', 'HIPAA', 'Security'],
      link: '#',
      impact: 'HITRUST certification',
      company: 'UnitedHealth Group (Optum)',
    },
    {
      id: 4,
      title: 'Teradata to Snowflake Migration',
      description: 'Migrated DataStage/Teradata/Unix pipelines to Snowflake; rebuilt ETL with Python and Azure Data Factory and improved reliability by reducing batch failures.',
      technologies: ['Snowflake', 'Teradata', 'Azure Data Factory', 'Python', 'SQL'],
      link: '#',
      impact: '21% faster pipelines, 81% less manual work (Snowflake optimization)',
      company: 'UnitedHealth Group (Optum)',
    },
    {
      id: 5,
      title: 'NBA Data Warehouse',
      description: 'Final project for my Data Warehousing class at BU. Built a full star schema warehouse to analyze NBA game statistics. Fact tables for scoring, dimension tables for players, teams, coaches, and a custom date dimension for seasons. This is where I learned dimensional modeling before doing it professionally.',
      technologies: ['SQL Server', 'Star Schema', 'Dimensional Modeling', 'Tableau'],
      link: '#',
      impact: 'Academic capstone project',
      company: 'Boston University',
    },
    {
      id: 6,
      title: 'Job Application Tracking Database',
      description: 'When I was applying to jobs, I built my own database to track applications, communications, assessments, and offers. Properly normalized tables, stored procedures, the whole deal. Seemed easier than using a spreadsheet, and it gave me practice with SQL during my job search.',
      technologies: ['SQL Server', 'Database Design', 'Stored Procedures', 'Normalization'],
      link: '#',
      impact: 'Personal productivity tool',
      company: 'Personal Project',
    },
    {
      id: 7,
      title: 'Beijing Air Quality Analysis',
      description: 'For my master\'s final project, I analyzed Beijing air quality data and weather patterns to predict pollution levels. Used R and machine learning models to identify patterns. Living in China gave me firsthand experience with Beijing\'s air quality issues; this project let me actually dig into the data.',
      technologies: ['R', 'Machine Learning', 'Data Visualization', 'Statistical Analysis'],
      link: '#',
      impact: 'Academic research project',
      company: 'Boston University',
    },
    {
      id: 8,
      title: 'Data Quality Monitoring Platform',
      description: 'Set up comprehensive data quality monitoring using dbt tests and Monte Carlo. Configured automated alerts, data lineage tracking, and validation rules. Now when something breaks, we actually know about it before the business does.',
      technologies: ['dbt', 'Monte Carlo', 'Snowflake', 'Data Quality'],
      link: '#',
      impact: 'Proactive data reliability',
      company: 'Sub-Zero Group',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Things I've Built</h1>
      <p className="text-xl text-gray-600 mb-12">
        A mix of professional work projects and personal learning experiments. Some saved money, 
        some were just for fun, all taught me something useful.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-l-4 border-blue-500">
            <div className="mb-3">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {project.company}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
            
            {project.impact && (
              <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-sm font-semibold text-green-800">
                  📊 {project.impact}
                </p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
