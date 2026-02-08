const Education = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      school: "M.V.S.R College of Engineering",
      period: "Jun 2019 – May 2023",
      grade: "",
      coursework: ["Operating Systems", "Computer Networks", "Database Management Systems", "Object-Oriented Programming"],
      logo: "MVS"
    }
  ];

  const certifications: { name: string; details: string; logo: string }[] = [];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            B.Tech in Information Technology with coursework in Operating Systems, 
            Computer Networks, Database Management Systems, and Object-Oriented Programming
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{edu.school}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-gray-300 font-medium">{edu.period}</p>
                  {edu.grade && <p className="text-green-400 font-semibold">{edu.grade}</p>}
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Certifications - only show if present */}
          {certifications.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {cert.logo}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                        <p className="text-gray-400 text-sm">{cert.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
