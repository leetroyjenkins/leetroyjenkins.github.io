export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Snowflake Performance Optimization Framework',
      description: 'Developed an automated testing framework in Python and Snowpark to analyze query performance and optimize warehouse sizing. This production implementation reduced Snowflake compute costs by 38% while improving query response times.',
      technologies: ['Python', 'Snowpark', 'Snowflake', 'Performance Tuning'],
      link: '#',
      impact: '38% cost reduction',
      company: 'UnitedHealth Group (Optum)',
    },
    {
      id: 2,
      title: 'ERP Migration Data Infrastructure',
      description: 'Served as key data engineering resource for Sub-Zero\'s enterprise migration from Infor XA to SAP. Designed and implemented dimensional models, ETL pipelines, and analytics infrastructure to support the new system. Utilized dbt for transformations, Fivetran for data ingestion, and Terraform for infrastructure as code.',
      technologies: ['dbt', 'Snowflake', 'Fivetran', 'SAP', 'Terraform'],
      link: '#',
      impact: 'Enterprise-wide migration',
      company: 'Sub-Zero Group',
    },
    {
      id: 3,
      title: 'HIPAA-Compliant Security Framework',
      description: 'Designed and implemented comprehensive row-level and column-level security patterns in Snowflake for PHI data handling in support of HITRUST certification. Created reusable security patterns enabling consistent implementation across teams.',
      technologies: ['Snowflake', 'Data Governance', 'HIPAA', 'Security'],
      link: '#',
      impact: 'HITRUST certification',
      company: 'UnitedHealth Group (Optum)',
    },
    {
      id: 4,
      title: 'Teradata to Snowflake Migration',
      description: 'Migrated legacy DataStage/Teradata/Unix pipelines to Snowflake cloud architecture. Rebuilt ETL processes using Python and Azure Data Factory, improving system reliability through reduced batch failures.',
      technologies: ['Snowflake', 'Teradata', 'Azure Data Factory', 'Python', 'SQL'],
      link: '#',
      impact: '21% faster pipelines, 81% less manual work (Snowflake optimization)',
      company: 'UnitedHealth Group (Optum)',
    },
    {
      id: 5,
      title: 'NBA Data Warehouse',
      description: 'Academic capstone project for Data Warehousing course. Designed and implemented a complete star schema warehouse for NBA game statistics analysis, including fact tables for scoring and dimension tables for players, teams, coaches, and custom date dimensions for seasonal analysis. Applied dimensional modeling principles later used in professional work.',
      technologies: ['SQL Server', 'Star Schema', 'Dimensional Modeling', 'Tableau'],
      link: '#',
      impact: 'Academic capstone project',
      company: 'Boston University',
    },
    {
      id: 6,
      title: 'Job Application Tracking Database',
      description: 'Personal project: designed and implemented a normalized relational database to track job applications, communications, assessments, and offers. Utilized stored procedures and proper database design principles to maintain data integrity while developing SQL proficiency.',
      technologies: ['SQL Server', 'Database Design', 'Stored Procedures', 'Normalization'],
      link: '#',
      impact: 'Personal productivity tool',
      company: 'Personal Project',
    },
    {
      id: 7,
      title: 'Beijing Air Quality Analysis',
      description: 'Master\'s capstone project analyzing Beijing air quality data and weather patterns to predict pollution levels. Applied machine learning models in R to identify environmental patterns. Firsthand experience living in Beijing provided unique context for this data analysis.',
      technologies: ['R', 'Machine Learning', 'Data Visualization', 'Statistical Analysis'],
      link: '#',
      impact: 'Academic research project',
      company: 'Boston University',
    },
    {
      id: 8,
      title: 'Data Quality Monitoring Platform',
      description: 'Implemented comprehensive data quality monitoring using dbt tests and Monte Carlo. Configured automated alerting, data lineage tracking, and validation rules to enable proactive issue detection and resolution before business impact.',
      technologies: ['dbt', 'Monte Carlo', 'Snowflake', 'Data Quality'],
      link: '#',
      impact: 'Proactive data reliability',
      company: 'Sub-Zero Group',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Project Portfolio</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
        A collection of professional projects and technical initiatives demonstrating experience across
        data engineering, cloud infrastructure, and analytics platform development.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg p-5 sm:p-6 hover:shadow-xl transition border-l-4 border-blue-500">
            <div className="mb-3">
              <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {project.company}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{project.description}</p>
            
            {project.impact && (
              <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-xs sm:text-sm font-semibold text-green-800">
                  📊 {project.impact}
                </p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full">
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
