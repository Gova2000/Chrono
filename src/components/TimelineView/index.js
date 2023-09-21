// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import Project from '../ProjectTimelineCard'
import Course from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  state = {pojectlist: [], courselist: []}

  componentDidMount() {
    this.Assign()
  }

  Assign = () => {
    const {timelineItemsList} = this.props

    const listpro = timelineItemsList.filter(
      each => each.categoryId === 'PROJECT',
    )

    const listcour = timelineItemsList.filter(
      each => each.categoryId === 'COURSE',
    )
    this.setState({projectlist: listpro, courselist: listcour})
  }

  render() {
    const {timelineItemsList} = this.props
    const {projectlist, courselist} = this.state
    console.log(projectlist, courselist)

    return (
      <div>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          <Course colist={courselist} />
          <Project prolist={projectlist} />
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
