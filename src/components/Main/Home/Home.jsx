import AboutUs from './AboutUs'
import Subscribe from '../Subscribe'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"



const mainPageData = [
  {
    id: 1,
    title: "Donate to us",
    link: ""
  },
  {
    id: 2,
    title: "Become a Volunteer",
    link: "/joinus"
  },
]

const programPageData = [
  {
    id: 1,
    title: "View ZAKKI's Program",
    link:"/programs"
  },
]

const storiesPageData = [
  {
    id: 1,
    title: "View Member Stories",
    link: "/stories"
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
            return <Link to={btn.link} className="light-green-btn home-btn" key={btn.id}>{btn.title}</Link>
            // return <a herf={btn.link} className="light-green-btn home-btn" key={btn.id}>{btn.title}</a>
          })}
        </div>
      </div>
    </div>
  )
}


function HomeCarouselPageSwitch({page}){
  if(page === 'main'){
    return <HomeCarouselPage page="main" title="Helping others through the " boldTitle='"REAL ACTION"' data={mainPageData}/>
  }
  if(page === 'program'){
    return <HomeCarouselPage page="program" title="Celebrating! Over 1K people attended " boldTitle="ZAKKI’s 2022 event party" data={programPageData}/>
  }
  return <HomeCarouselPage page="story" title="" boldTitle="Listening to Those Who Matter Most" data={storiesPageData}/>
}

function HomeCarousel(){
  const homePage = ['main', 'program', 'story']
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const next = (current+1) % homePage.length
    const id = setTimeout(() => setCurrent(next), 5000)
    return () => clearTimeout(id)
  }, [current])
  
  const currentPage = homePage[current]

  return(
    <>
      <HomeCarouselPageSwitch page={currentPage}/>
    </>
  )
}

// function HomeCarousel(){
  // const [current, setCurrent] = useState(0)

  // useEffect(() => {
  //   const next = (current+1) % showPage.length
  //   const id = setTimeout(() => setCurrent(next), 10000)
  //   return () => clearTimeout(id)
  // }, [current])
  // return(
  //   <>
  //     <HomeCarouselPage page="main" title="Helping others through the " boldTitle='"REAL ACTION"' data={mainPageData}/>
  //     <HomeCarouselPage page="program" title="Celebrating! Over 1K people attended " boldTitle="ZAKKI’s 2022 event party" data={programPageData}/>
  //     <HomeCarouselPage page="story" title="" boldTitle="Listening to Those Who Matter Most" data={storiesPageData}/>
  //   </>
  // )
// }


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
      <Subscribe/>
    </>
  )
}