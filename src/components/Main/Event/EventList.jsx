import {ReactComponent as EventTime} from '../../Assets/Img/event/event_time.svg'
import {ReactComponent as EventLocation} from '../../Assets/Img/event/event_location.svg'
// import {ReactComponent as EventProgram} from '../../Assets/Img/event/event_program.svg'
import {ReactComponent as EventBell} from '../../Assets/Img/event/event_bell.svg'

import { dummyEventData } from '../../Data/EventData'



export default function EventList(){
  return(
    <ul className="event-list">
      {dummyEventData.map((event) => {
        return(
          <li class="event-item">
            <div class="event-item-top">
              <div class="event-item-title">{event.title}</div>
              <a href="" class="event-item-remind"><EventBell/></a>
            </div>
            <div class="event-item-time"><EventTime/>  Event Time: {event.time}</div>
            <div class="event-item-location"><EventLocation/>  Location: (Online / Offline) {event.location}</div>
          </li>
        )
      })}
    </ul>
  )
}