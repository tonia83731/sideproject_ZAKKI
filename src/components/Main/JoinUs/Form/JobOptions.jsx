import {ReactComponent as Location} from '../../../Assets/svg/location.svg'
import {ReactComponent as Duration} from '../../../Assets/svg/duration.svg'

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const dummyJobData = [
  {
    id: 1,
    title: 'UX Designer',
    location: "Virtual",
    duration: "6-months",
    url:"https://picsum.photos/300?text=1",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 2,
    title: 'Project Manager',
    location: "Vurtual",
    duration: "6-months",
    url:"https://picsum.photos/300?text=2",
    requirements: [
      "Vestibulum laoreet dolor at odio commodo pharetra.",
      "Vestibulum iaculis metus vel ipsum laoreet auctor.",
      "Sed non ipsum nec lorem accumsan lacinia in non ipsum.",
      "Maecenas vel felis tempus, fermentum purus id, venenatis urna.",
      "Etiam feugiat nisl vel nunc euismod, sit amet blandit ex rhoncus.",
      "Nullam porta ex a vehicula ultricies."
    ]
  },
  {
    id: 3,
    title: 'Graphic Designer',
    location: "Vurtual",
    duration: "6-months",
    url:"https://picsum.photos/300?text=3",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 4,
    title: 'Content Creater',
    location: "Vurtual",
    duration: "6-months",
    url:"https://picsum.photos/300?text=4",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 5,
    title: 'Photographer',
    location: "Vurtual / In Person",
    duration: "3-months",
    url:"https://picsum.photos/300?text=10",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 6,
    title: 'Videographer',
    location: "Vurtual / In Person",
    duration: "3-months",
    url:"https://picsum.photos/300?text=5",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 7,
    title: 'Language Interpreter',
    location: "Vurtual / In Person",
    duration: "3-months",
    url:"https://picsum.photos/300?text=6",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 8,
    title: 'Volunteer for Elderly',
    location: "In Person",
    duration: "1-months",
    url:"https://picsum.photos/300?text=7",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 9,
    title: 'Volunteer for Disabilities Training',
    location: "In Person",
    duration: "3-months",
    url:"https://picsum.photos/300?text=8",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },
  {
    id: 10,
    title: 'UX Researcher',
    location: "Vurtual / In Person",
    duration: "3-months",
    url:"https://picsum.photos/300?text=9",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ]
  },

]

export function JobCard(){
  return(
      dummyJobData.map((job) => {
        return(
          <div className="job-apply-card" style={{backgroundImage: `url(${job.url})`}}>
            <div className="card-body">
              <div className="card-body-title">
                <h5 className="card-title">{job.title}</h5>
                <a href="" className="card-info">More Info.</a>
              </div>
              <div className="card-body-content">
                <span className="card-item">
                  <i className="card-item-icon">
                    <Location/>
                  </i>
                  <span className="card-item-body">{job.location}</span>
                </span>
                <span className="card-item">
                  <i className="card-item-icon">
                    <Duration/>
                  </i>
                  <span className="card-item-body">{job.duration}</span>
                </span>
              </div>
            </div>
          </div>
          )
        })
  )
}

export default function JobOptions(){
  return(
    <div className="job-option-container">

      <JobCard/>
    </div>
  )
}