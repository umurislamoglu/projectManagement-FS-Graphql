import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQueries'
import Spinner from './Spinner'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS )

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row'>
          {data.projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />
          })}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  )
}

export default Projects
