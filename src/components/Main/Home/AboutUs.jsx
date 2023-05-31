import { DefaultTitle } from "../../RepeatComponent/Repeat"
import { ReactComponent as Elderly } from "../../Assets/Img/Home/elderly.svg"
import { ReactComponent as Community } from "../../Assets/Img/Home/community.svg"
import { ReactComponent as Disabled } from "../../Assets/Img/Home/disabled.svg"

const diagramData = [
  {
    id: 1,
    diagram: <Elderly/>,
    title: "Elderly"
  },
  {
    id: 2,
    diagram: <Community/>,
    title: "Community of elderly"
  },
  {
    id: 3,
    diagram: <Disabled/>,
    title: "Disabled elderly"
  },
]

function AboutUsDiagram(){
  return(
    <div className="about-us-diagram">
      {
        diagramData.map((item) => {
          return(
            <div className="diagram-item" key={item.id}>
              <div className="diagram-item-img">{item.diagram}</div>
              <p className="diagram-item-title">{item.title}</p>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default function AboutUs(){
  return(
    <section className="about-us">
      <div className="about-us-container">
        <div data-mode="mobile">
          <DefaultTitle title="About Us" subtitle="ZAKKI aims to help the elderly people financially through zakat and donation. ZAKKI’s foundation is based on the understanding that all people have the equal rights to have a decent life."/>
          <AboutUsDiagram/>
          <iframe src="https://www.youtube.com/embed/tYmvsrkN8po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div data-mode="desktop">
          <h3 className="main-title_with-border">About Us</h3>
          <div className="about-us-body">
            <div>
              <p className="sub-title">
                ZAKKI aims to help the elderly people financially through zakat and donation. ZAKKI’s foundation is based on the understanding that all people have the equal rights to have a decent life.
              </p>
              <AboutUsDiagram/>
            </div>
            <iframe src="https://www.youtube.com/embed/tYmvsrkN8po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
