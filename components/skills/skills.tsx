import { skills } from "@/utils/skillsLists";

export default function Skills() {
  const skillsLists = skills;

  return (
    <div id="skills" className="mb-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-28 mb-12 flex flex-col lg:flex-row gap-16 w-full mt-40">
        <div className="flex flex-col w-full items-start gap-6">
          <div className="mb-4">
            <p className="text-3xl mb-2 text-cyan-400 font-semibold">Skills</p>
            <hr className="border-[1px] mt-1 border-cyan-400" />
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {skillsLists.map((skill, index) => (
              <div
                key={index}
                className={`skill-card border-2 border-cyan-400 shadow-md shadow-cyan-400 w-[300px] px-4 py-6 rounded-lg flex flex-col justify-between items-center gap-5 hover:scale-105 hover:shadow-xl hover:border-cyan-500 ${
                  index % 2 === 0 ? "even-card" : "odd-card"
                }`}
              >
                {/* Title Section */}
                <div className="skill-title text-2xl text-center font-bold text-cyan-500">
                  {skill.title}
                </div>

                {/* Details Section */}
                <div className="skill-details text-center text-gray-300">
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
