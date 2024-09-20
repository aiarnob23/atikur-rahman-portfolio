import About from "@/components/about-me/about";
import ContactMe from "@/components/contact-me/contact";
import Experience from "@/components/experience/experience";
import Intro from "@/components/introduction/intro";
import Skills from "@/components/skills/skills";



export default function Home() {
  return (
    <div className="w-full">
      <Intro />
      <About />
      <Skills />
      <Experience />
      <ContactMe/>
    </div>
  );
}
