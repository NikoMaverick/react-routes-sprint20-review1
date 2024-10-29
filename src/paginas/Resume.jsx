import { studies, experiences } from "../data/resume"
import Header from "../Template/Header"

function Resume () {
    return (
        <>
        <Header />
        <h2>Estudios Realizados</h2>
        <ul>
            {studies.map(study => <li key={study.id}>
                <h3>{study.title}</h3>
                <p>{study.institution}</p>
                <p>{study.date}</p>
            </li>)}
        </ul>

        <h2>Experiencia Laboral</h2>
        <ul>
            {experiences.map(experience => <li key={experience.id}>
                <h3>{experience.title}</h3>
                <p>{experience.institution}</p>
                <p>{experience.date}</p>
            </li>)};
        </ul>
        </>
    )
};

export default Resume