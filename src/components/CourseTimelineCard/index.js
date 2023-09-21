// Write your code here
import './index.css'

const Course = props => {
  const {colist} = props
  const {courseTitle, description, duration} = colist

  const Boxes = () => {
    const {tagsList} = props

    return tagsList.map(each => {
      const {name} = tagsList
      return (
        <li key={each.id}>
          <p>{each.name}bkjkjb.jv</p>
        </li>
      )
    })
  }

  return (
    <div>
      <div className="row">
        <h1>{courseTitle}</h1>
        <p>{duration}</p>
      </div>

      <p>{description}</p>
      {Boxes()}
    </div>
  )
}

export default Course
