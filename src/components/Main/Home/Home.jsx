import AboutUs from './AboutUs'

const mainPageData = [
  {
    id: 1,
    title: "Donate to us"
  },
  {
    id: 2,
    title: "Become a Volunteer"
  },
]

const programPageData = [
  {
    id: 1,
    title: "View ZAKKI's Program"
  },
]

const storiesPageData = [
  {
    id: 1,
    title: "View Member Stories"
  },
]

function HomeCarouselPage({page, title, boldTitle, data}){
  return(
    <div className="home-carousel-bg" data-page={page}>
      <div className="home-carousel-container">
        {page === "program" ? <p>Hottest</p> : ""}
        <h3 className="home-title">{title}<b>{boldTitle}</b></h3>
        <div className="home-carousel-btn-group">
          {data.map((btn) => {
            return <a herf="" className="light-green-btn home-btn" key={btn.id}>{btn.title}</a>
          })}
        </div>
      </div>
    </div>
  )
}

function HomeCarousel(){
  return(
    <>
      <HomeCarouselPage page="main" title="Helping others through the " boldTitle='"REAL ACTION"' data={mainPageData}/>
      {/* <HomeCarouselPage page="program" title="Celebrating! Over 1K people attended " boldTitle="ZAKKI’s 2022 event party" data={programPageData}/> */}
      {/* <HomeCarouselPage page="story" title="" boldTitle="Listening to Those Who Matter Most" data={storiesPageData}/> */}
    </>
  )
}


export default function Home(){
  return(
    <>
      <section className="home-carousel">
        <HomeCarousel/>
      </section>
      <section className="home">
        <div className="home-container">
          <AboutUs/>
        </div>
      </section>
    </>
  )
}