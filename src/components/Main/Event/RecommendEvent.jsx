import {ReactComponent as EventTime} from '../../Assets/Img/event/event_time.svg'
import {ReactComponent as EventLocation} from '../../Assets/Img/event/event_location.svg'
import {ReactComponent as EventProgram} from '../../Assets/Img/event/event_program.svg'
import {ReactComponent as EventBell} from '../../Assets/Img/event/event_bell.svg'


const eventData = [
  {
    id: 1,
    title: "Fresh Fashion",
    time: "05/06/2023 10:23:31 PM",
    location: "Dki Jakarta, Indonesia",
    url: "https://picsum.photos/300?text=1",
  },
  {
    id: 2,
    title: "Trendy Threads",
    time: "04/05/2024 03:36:55 AM",
    location: "Dki Jakarta, Indonesia",
    url: "https://picsum.photos/300?text=2",
  },
  {
    id: 3,
    title: "Glam Gals",
    time: "03/18/2023 05:24:41 AM",
    location: "Jawa Tengah, Indonesia",
    url: "https://picsum.photos/300?text=3",
  },
  {
    id: 4,
    title: "Active Aging",
    time: "12/09/2023 09:32:29 AM",
    location: "Jawa Barat, Indonesia",
    url: "https://picsum.photos/300?text=4",
  },
  {
    id: 5,
    title: "Elderly Empowerment",
    time: "11/06/2023 10:10:10 AM",
    location: "Jawa Barat, Indonesia",
    url: "https://picsum.photos/300?text=5",
  },
  {
    id: 6,
    title: "wise Wellness",
    time: "06/08/2023 01:44:01 PM",
    location: "Dki Jakarta, Indonesia",
    url: "https://picsum.photos/300?text=6",
  },
  {
    id: 7,
    title: "Sliver Strength",
    time: "08/30/2023 07:24:20 AM",
    location: "Dki Jakarta, Indonesia",
    url: "https://picsum.photos/300?text=7",
  },
  {
    id: 8,
    title: "Golder Generation",
    time: "01/05/2023 09:46:19 AM",
    location: "Jawa Tengah, Indonesia",
    url: "https://picsum.photos/300?text=8",
  },
]

export default function RecommendEvent(){
  return(
    <div className="recommend-event-body">
      {eventData.map((item) => {
        return(
          <div class="event-card" style={{backgroundImage: `url(${item.url})`}} key={item.id}>
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