
import AboutPage from "../about/About"
import ContactPage from "../contact/Contact"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ServicesPage from "../services/Services";
import ProjectsPage from "../projects/Projects";
import SkillPage from "../skill/Skill"
import HeroPage from "../hero/Hero";


const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
    <div id="hero">
        <HeroPage />
      </div>
    <div id="about">
        <AboutPage />
      </div>
      <div id="services">
        <ServicesPage />
      </div>
      <div id="skill">
        <SkillPage />
      </div>
      <div id="project">
        <ProjectsPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  )
}
export default HomePage