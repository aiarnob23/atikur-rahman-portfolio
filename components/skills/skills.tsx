import { skills } from "@/utils/skillsLists";

export default function Skills() {
  const skillsLists = skills;

  return (
    <div id="skills" className="mb-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-28 mb-12 flex flex-col lg:flex-row gap-16 w-full mt-40">
        <div className="flex flex-col w-full items-start gap-6">
          <div className="mb-4">
            <p className="text-2xl  md:text-3xl mb-2 text-cyan-400 font-semibold">Skills</p>
            <hr className="border-[1px] mt-1 border-cyan-400" />
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {skillsLists.map((skill, index) => (
              <div
                key={index}
                className={`skill-card h-[100px] overflow-hidden border-2 border-cyan-400 shadow-md shadow-cyan-400 w-[300px] px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-5 transition-all duration-500 ease-in-out transform hover:h-[300px] hover:shadow-2xl hover:shadow-cyan-500 hover:scale-105 relative ${
                  index % 2 === 0 ? "even-card" : "odd-card"
                }`}
              >
                {/* Title Section */}
                <div className="skill-title text-2xl text-center font-bold text-cyan-500">
                  {skill.title}
                </div>

                {/* Details Section */}
                <div className="skill-details opacity-0 h-0 text-center text-gray-300 transition-all duration-500 ease-in-out hover:opacity-100 hover:h-auto">
                  {skill.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
