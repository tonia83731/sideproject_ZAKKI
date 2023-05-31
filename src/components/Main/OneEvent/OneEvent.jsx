import {Guide} from '../OneProgram/OneProgram'

import {ReactComponent as EventTime} from '../../Assets/Img/event/event_location.svg'
import {ReactComponent as EventLocation} from '../../Assets/Img/event/event_location.svg'
import {ReactComponent as EventProgram} from '../../Assets/Img/event/event_program.svg'
import {ReactComponent as EventBell} from '../../Assets/Img/event/event_bell.svg'

export default function OneEvent(){
  return(
    <section className="one-event">
      <div className="one-event-container" data-mode="mobile">
        <div className="one-event-img">
          <Guide first="Event" second="Event Name"/>
          <div className="corner-rounded"></div>
        </div>
        <div className="one-event-body">
          <div className="one-event-title-group">
            <h3 className="main-title">Event Name</h3>
            <div><EventBell/></div>
          </div>
          <div className="one-event-info">
            <div class="card-item">
              <i class="card-item-icon">
                <EventTime/>
              </i>
              <span class="card-item-body">04/27/2023, 1pm-5pm</span>
            </div>
            <div class="card-item">
              <i class="card-item-icon">
                <EventLocation/>
              </i>
              <span class="card-item-body">(Online / Offline) Indonesia, Jakarta</span>
            </div>
            <div class="card-item">
              <i class="card-item-icon">
                <EventProgram/>
              </i>
              <span class="card-item-body">From Program Name</span>
            </div>
            <div className="join-group">
              <div className="caption">10 joined</div>
              <div className="circle-group">
                <img src="https://picsum.photos/300?text=1" alt="" className="circle" />
                <img src="https://picsum.photos/300?text=2" alt="" className="circle" />
                <img src="https://picsum.photos/300?text=3" alt="" className="circle" />
                <div className="circle circle-num">+6</div>
              </div>
            </div>
          </div>
          <div className="one-event-content-info">
            <h5 className="sub-title">Description</h5>
            <p className="one-event-content">
              &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat molestie neque. Proin non ante felis. Integer dignissim ex vel enim varius suscipit. Pellentesque dignissim laoreet sem, ac maximus est consectetur quis. Donec at mollis risus. Aenean venenatis mi rhoncus, elementum turpis nec, semper mi. Fusce consectetur ultrices faucibus. Nulla congue tempor magna, et molestie mi commodo a. Vivamus suscipit enim non mauris maximus, vel laoreet lorem iaculis.
            </p>
            <h5 className="sub-title">Location (Offline)</h5>
            <div className="map">
              <img src="https://picsum.photos/300?text=15" alt="" />
            </div>
            <button className="dark-green-btn one-event-btn">Book the Event &#8250;</button>
          </div>
        </div>
      </div>
      <div className="one-event-container" data-mode="desktop">
        <div className="one-event-main">
          <div className="one-event-left">
            <Guide first="Event" second="Event Name"/>
            <div className="one-event-title-group">
              <h3 className="main-title">Event Name</h3>
              <div><EventBell/></div>
            </div>
            <div className="one-event-content-info">
              <h5 className="sub-title">Description</h5>
              <p className="one-event-content">
                &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat molestie neque. Proin non ante felis. Integer dignissim ex vel enim varius suscipit. Pellentesque dignissim laoreet sem, ac maximus est consectetur quis. Donec at mollis risus. Aenean venenatis mi rhoncus, elementum turpis nec, semper mi. Fusce consectetur ultrices faucibus. Nulla congue tempor magna, et molestie mi commodo a. Vivamus suscipit enim non mauris maximus, vel laoreet lorem iaculis.
              </p>
              <h5 className="sub-title">Location (Offline)</h5>
              <div className="map">
                <img src="https://picsum.photos/300?text=15" alt="" />
              </div>
            </div>
          </div>
          <div className="one-event-right">
            <img src="https://picsum.photos/300?text=10" alt="" className="one-event-img" />
            <div className="one-event-info">
              <div class="card-item">
                <i class="card-item-icon">
                  <EventTime/>
                </i>
                <span class="card-item-body">04/27/2023, 1pm-5pm</span>
              </div>
              <div class="card-item">
                <i class="card-item-icon">
                  <EventLocation/>
                </i>
                <span class="card-item-body">(Online / Offline) Indonesia, Jakarta</span>
              </div>
              <div class="card-item">
                <i class="card-item-icon">
                  <EventProgram/>
                </i>
                <span class="card-item-body">From Program Name</span>
              </div>
              <div className="join-group">
                <div className="caption">10 joined</div>
                <div className="circle-group">
                  <img src="https://picsum.photos/300?text=1" alt="" className="circle" />
                  <img src="https://picsum.photos/300?text=2" alt="" className="circle" />
                  <img src="https://picsum.photos/300?text=3" alt="" className="circle" />
                  <div className="circle circle-num">+6</div>
                </div>
              </div>
            </div>
            <button className="dark-green-btn one-event-btn">Book the Event &#8250;</button>
          </div>
        </div>
      </div>
    </section>
  )
}