import { DefaultTitle, Pagination } from "../../RepeatComponent/Repeat";
import {Search} from "../Program/Program";

import RecommendEvent from "./RecommendEvent";
import EventList from "./EventList";
import Subscribe from "../Subscribe";

const pageData=[
  {
    id: 1,
    isActive: true
  },
  {
    id: 2,
    isActive: false
  },
  {
    id: 3,
    isActive: false
  },
  {
    id: 4,
    isActive: false
  },
  {
    id: 5,
    isActive: false
  },
]

export default function Event(){
  return(
    <main className="site-main">
      <div className="main-container">
        <section className="event">
          <div className="event-container">
            <DefaultTitle title="Our Event" subtitle="Other ways to support those who need.
    Attend our event to know how our program process"/>
            <Search/>
            <div className="recommend-event">
              <h3 className="main-title">Recommended Event</h3>
              <RecommendEvent/>
            </div>
            <div className="event-list">
              <h3 className="main-title">Event List</h3>
              <EventList/>
            </div>
            <Pagination data={pageData}/>
          </div>
        </section>
        <Subscribe/>
      </div>
    </main>
  )
}