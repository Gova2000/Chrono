// Write your code here

import './index.css'

const Project = props => {
  const {prolist} = props
  const {
    duration,
    description,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
  } = prolist

  return (
    <div>
      <img src={imageUrl} alt={projectTitle} />
      <div className="row">
        <h1>{projectTitle}</h1>
        <p>{duration}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Project
