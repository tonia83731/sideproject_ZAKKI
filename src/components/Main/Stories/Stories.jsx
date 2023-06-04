import { DefaultTitle } from "../../RepeatComponent/Repeat"

import { ReactComponent as Beneficiary } from "../../Assets/Img/Story/beneficiary.svg"
import { ReactComponent as Volunteer } from "../../Assets/Img/Story/volunteer.svg"
import { ReactComponent as CommaUp } from "../../Assets/Img/Story/CommaUp.svg"
import { ReactComponent as CommaDown } from "../../Assets/Img/Story/CommaDown.svg"

import Subscribe from "../Subscribe"

function BeneficiaryStory(){
  return(
    <section className="beneficiary-story">
      <div className="beneficiary-story-container">
        <h3 className="main-title">Beneficiary's Stories</h3>
        <div className="story-body">
          <img src={require('../../Assets/Img/Story/beneficiary.png')} alt="" />
          <div className="story-content">
            <div className="comma-up"><CommaUp/></div>
            <h5 className="sub-title">
              ZAKKI helped us to find a donor to provide a diet program in our village.
            </h5>
            <p className="stories">
              Before getting help from ZAKKI, we had a hard time funding the diet program for the elderly. Luckily, we met the ZAKKI community that can help us to overcome our financial problem. We are very grateful for the material assistance and suggestions provided during the workshop.
            </p>
            <div className="comma-down"><CommaDown/></div>
            <div className="caption-group">
              <p className="caption-name caption-bold">Prawoko</p>
              <p className="caption-info caption">Principle of Poksila RW 03, Randusari-Semarang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VolunteerStory(){
  return(
    <section className="volunteer-story">
      <div className="volunteer-story-container">
        <h3 className="main-title">Volunteer's Stories</h3>
        <div className="story-body">
          <div className="story-content">
            <div className="comma-up"><CommaUp/></div>
            <h5 className="sub-title">
              I appreciate how ZAKKI fight for the elderly to survive.
            </h5>
            <p className="stories">
              ZAKKI is a startup that started from zero. Despite of that, after I joined them for few months, I got so much benefit, from earning experiences working with elderly to being able volunteer my time and skills to help people in need. So exciting!
            </p>
            <div className="comma-down"><CommaDown/></div>
            <div className="caption-group">
              <p className="caption-name caption-bold">Lu’llyatul Mutmainah</p>
              <p className="caption-info caption">Mahasiswi, Tegal</p>
            </div>
          </div>
          <img src={require('../../Assets/Img/Story/volunteer.png')} alt="" />
        </div>
      </div>
    </section>
  )
}

export default function Stories(){
  return( 
    <main className="site-main">
      <div className="main-container">
        <section className="stories">
        <div className="stories-container">
          <DefaultTitle title="Our Stories" subtitle="Listen to the beneficiary partner and our volunteers about their ZAKKI participate experience"/>
          <div>
            <BeneficiaryStory/>
            <VolunteerStory/>
          </div>
        </div>
        </section>
        <Subscribe/>
      </div>
    </main>
  )
}