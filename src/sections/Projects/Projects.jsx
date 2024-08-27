import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import gofit from "../../assets/gofit.png";
import golf from "../../assets/golf.png";
import ohmu from "../../assets/ohmu-collection.png";
import tableau from "../../assets/tableau.png";

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
        <ProjectCard
          src={tableau}
          link="https://public.tableau.com/app/profile/hadha.kautsar/vizzes"
          h3="Tableau Project"
          p="Kondisi Permukaan Jalan Kota Indonesia Tahun 2020 - 2023 "
        />
      </div>
    </section>
  );
}

export default Projects;
