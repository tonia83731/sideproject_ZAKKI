import { ReactComponent as ProgramDonate } from "../../Assets/svg/noun-donate-1230954.svg"
import { ReactComponent as ProgramVolunteer } from "../../Assets/svg/noun-volunteer-3842725.svg"
import { ReactComponent as ProgramBeneficiary } from "../../Assets/svg/noun-people-5730407.svg"

import {ReactComponent as EventTime} from '../../Assets/Img/event/event_location.svg'
import {ReactComponent as EventLocation} from '../../Assets/Img/event/event_location.svg'

const donateData=[
  {
    id:1,
    name: "Donors",
    num: "123",
    icon: <ProgramDonate/>
  },
  {
    id:1,
    name: "Volunteers",
    num: "145",
    icon: <ProgramVolunteer/>
  },
  {
    id:1,
    name: "Beneficieries",
    num: "023",
    icon: <ProgramBeneficiary/>
  },
]

const programEventData = [
  {
    id: 3,
    title: "Glam Gals",
    time: "03/18/2023 05:24:41 AM",
    location: "Jawa Tengah, Indonesia",
    url: "https://picsum.photos/300?text=3",
  },
  {
    id: 8,
    title: "Golder Generation",
    time: "01/05/2023 09:46:19 AM",
    location: "Jawa Tengah, Indonesia",
    url: "https://picsum.photos/300?text=8",
  },
]

export function Guide({first, second}){
  return(
    <div className="guide">
      <a href="" className="guide-link">{first}</a>
      <span className="guide-arrow">&#8250;</span>
      <a href="" className="guide-link">{second}</a>
    </div>
  )
}

function DonateCard({mode}){
  const donateItem = donateData.map((item) => {
    return(
      <div class="card-footer-item" key={item.id}>
        <div class="card-footer-count">
          <i class="card-footer-icon">{item.icon}</i>
          <span class="card-footer-number">{item.num}</span>
        </div>
        <div class="card-footer-name">Total<br/>{item.name}</div>
      </div>
    )
  })
  return(
  <div className="donate-card" data-mode={mode}>
    <div class="card-title">Rp. <span class="rp-num">000000</span></div>
    <div class="card-body">
      <div class="card-body-top">
        <label for="card-body-progress" class="card-body-label">Current donate status</label>
        <div class="card-body-percent"><span class="percent-num">10</span>%</div>
      </div>
      <progress id="card-body-progress" value="10" max="100" class="card-body-progress"></progress>
      <button class="dark-green-btn card-body-btn" id="card-body-btn">Donate &rsaquo;</button> 
    </div>
    <div class="card-footer">
      {donateItem}
    </div>
  </div>
  )
}

function ProgramEventCard(){
    return(
      <div className="upcomming-event-group">
        {programEventData.map((item) => {
      return(
          <div class="event-card upcomming-event-card" style={{backgroundImage: `url(${item.url})`}} key={item.id}>
            <div class="card-body">
              <h5 class="card-body-title">{item.title}</h5>
              <div class="card-body-content">
                <div class="card-item">
                  <i class="card-item-icon">
                    <EventLocation/>
                  </i>
                  <span class="card-item-body">Location: {item.location}</span>
                </div>
                <div class="card-item">
                  <i class="card-item-icon">
                    <EventTime/>
                  </i>
                  <span class="card-item-body">Date: {item.time}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    )
}


export default function OneProgram(){
  return(
    <section className="one-program">
      <div className="one-program-container">
        <div className="guide">
          <Guide first="Project" second="Program Title"/>
        </div>
        <div className="one-program-info">
          <h3 className="main-title">Program Title</h3>
          <img src="https://picsum.photos/300" alt="" className="one-program-img" />
          <p className="one-program-content">
             &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat molestie neque. Proin non ante felis. Integer dignissim ex vel enim varius suscipit. Pellentesque dignissim laoreet sem, ac maximus est consectetur quis. Donec at mollis risus. Aenean venenatis mi rhoncus, elementum turpis nec, semper mi. Fusce consectetur ultrices faucibus. Nulla congue tempor magna, et molestie mi commodo a. Vivamus suscipit enim non mauris maximus, vel laoreet lorem iaculis.
             <hr/>
             &nbsp;&nbsp;Integer pulvinar sit amet turpis ut elementum. Sed pretium a erat eu pharetra. Donec eu nulla luctus ex pulvinar commodo. Vivamus sit amet eleifend purus. Vivamus tempus mi risus, non malesuada massa tincidunt sit amet. Nulla consequat lobortis quam ac maximus. Curabitur maximus risus tristique justo finibus, vel convallis neque rutrum. Cras tincidunt laoreet erat, ac condimentum nibh condimentum ac. Sed vel risus nisl. Aliquam dignissim blandit ligula. Etiam quam neque, pellentesque a placerat sed, sagittis vel neque. Cras orci nibh, rhoncus sed posuere nec, ornare non urna.
          </p>

        </div>
        <DonateCard mode="mobile"/>
        <div className="upcomming-event">
          <ProgramEventCard/>
          <a href="" className="upcomming-event-link">Show more upcomming event</a>
        </div>
        <div className="one-program-btn-group">
          <a href="" className="border-btn">Project Team Member &#8250;</a>
          <a href="" className="border-btn">Become Volunteer &#8250;</a>
          <a href="" className="border-btn">View Past Event &#8250;</a>
        </div>
        
      </div>
      <DonateCard mode="desktop"/>
    </section>
  )
}

