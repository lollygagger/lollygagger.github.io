import '../../Styles/components/projects/ProjectsPage.css';
import projects from "./Projects.js";
import ProjectCard from "./ProjectCard.jsx";
import {Helmet} from "react-helmet";

const ProjectsPage = () => {
    return (
        <>
            <Helmet>
                <title>Projects - Max Burdett</title>
                <meta name="description" content="Some project that I've worked on over the years"/>
            </Helmet>
            <div className="projects-page">
                {Object.keys(projects).map(projectKey => {
                    const project = projects[projectKey];
                    return (
                        <ProjectCard key={projectKey} project={project}/>
                    );
                })}

            </div>
        </>
    );
}

export default ProjectsPage
