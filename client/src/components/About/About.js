import { Redirect } from 'react-router-dom';

const About = ({
    match
}) => {
    if (Math.random() < 0.5) {
        return <Redirect to="/" />
    }
    console.log(Math.random());
    return <main className="main-container">
        <h1>About {match.params.name} Page</h1>
    </main>
}

export default About;