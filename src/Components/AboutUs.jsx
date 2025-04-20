const AboutMe = () => {
  const skills = [
    { language: 'JavaScript', percentage: 70 },
    { language: 'Python', percentage: 75 },
    { language: 'NodeJs', percentage: 50 },
    { language: 'HTML', percentage: 95 },
    { language: 'CSS', percentage: 90 },
    { language: 'React', percentage: 80 },
  ];

  return (
    <>
      <div className="text-white py-12 px-4 sm:px-6 md:px-16">
        <div className="max-w-5xl mx-auto md:ml-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <p className="text-gray-400 mb-8 text-base sm:text-lg leading-relaxed">
          A creative and detail-oriented developer with a passion for crafting seamless user experiences and impactful visual designs.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-2 text-sm sm:text-base">
                  <span className="font-semibold">{skill.language}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="flex-grow h-2 bg-gray-300 rounded-full">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{
                          width: `${skill.percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="w-11/12 mx-auto border-t border-gray-600 opacity-20" />
    </>
  );
};

export default AboutMe;
