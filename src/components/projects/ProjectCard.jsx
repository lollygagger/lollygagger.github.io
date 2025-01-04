import '../../Styles/components/projects/ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = (project) => {
    project = project.project
    console.log(project.skills)
    return(
        <div className="project-card">
            <div className="project-card-header">
                <h3>{project.name}</h3>
                <span className="project-dates">{project.startDate} - {project.endDate}</span>
            </div>

            <p>{project.description}</p>


            {(project.repoLink ? (
                <a href={project.repoLink} className="repo-container">
                    <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                </a>
            ): null)}


            {(project.liveLink ? (
                <a href={project.liveLink}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link"/>
                </a>
            ) : null)}

            {/*<h4>Skills: </h4>*/}
            <div className="skill-container">
            <h4>Skills</h4>
            {project.skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div>{skill}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectCard;
