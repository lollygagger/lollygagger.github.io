import '../../Styles/components/projects/ProjectsPage.css';
import projects from "./Projects.js";
import ProjectCard from "./ProjectCard.jsx";

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            {Object.keys(projects).map(projectKey => {
                const project = projects[projectKey];
                return (
                    <ProjectCard key={projectKey} project={project} />
                );
            })}

        </div>
    );
}

export default ProjectsPage
