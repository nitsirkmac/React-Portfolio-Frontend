import { useState, useEffect } from "react"
import { Card, Image, Git, Live } from "../components/appStyles"

function Projects( props ) {
    // create state to hold projects
    const [ projects, setProjects ] = useState(null)

    // create function to make api call
    const getProjectsData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "projects")
        // turn response into javascript object
        const data = await response.json()
        // set the projects state to the data
        setProjects(data)
    };
    
    // make an initial call for the data inside a useEffect, so it only happens once on component loading
    useEffect(() => { 
        getProjectsData()
    });

    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <Card>
                <h2>{project.name}</h2>
                <Image src={project.image} />
                <a href={project.git}>
                    <Git>Github</Git>
                </a>
                <a href={project.live}>
                    <Live>live site</Live>
                </a>
            </Card>
        ))
    }
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects