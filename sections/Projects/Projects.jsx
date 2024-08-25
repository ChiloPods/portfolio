import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import gofit from "../../assets/gofit.png";
import golf from "../../assets/golf.png";
import ohmu from "../../assets/ohmu-collection.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={golf}
          link="https://github.com/ChiloPods/membership-lapangan-golf"
          h3="Golf Membership API"
          p="API for Golf Membership"
        />
        <ProjectCard
          src={gofit}
          link="https://gofitlanding.netlify.app/"
          h3="GoFit"
          p="Fitness App"
        />
        <ProjectCard
          src={ohmu}
          link="https://github.com/ChiloPods/specimen-database"
          h3="Ohmu Collection"
          p="Invertebrate Species Database "
        />
      </div>
    </section>
  );
}

export default Projects;
