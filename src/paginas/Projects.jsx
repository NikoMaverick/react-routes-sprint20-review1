import { useState, useEffect } from 'react';
import projectsWork from "../data/projects";


function Projects () {
    const [projects, setProjects] = useState ([])

    useEffect(() => {
        setProjects(projectsWork)
    }, []);

    return (
        <>
        <h1>Projects</h1>
        <p>Estos son mis proyectos</p>
        <ul>
            {projectsWork.map(project => <li key={project.id}>
                <h2>{project.name}</h2>
                <img src={project.image}></img>
                <p>{project.description}</p>
            </li>)}
        </ul>
        </>
    )
}

export default Projects