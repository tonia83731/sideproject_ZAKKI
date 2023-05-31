import { DefaultTitle } from "../../RepeatComponent/Repeat";

import { ReactComponent as MemberEmail } from "../../Assets/logo/team/member_email.svg";
import { ReactComponent as MemberLinkedIn } from "../../Assets/logo/team/member_linkedin.svg";
import { ReactComponent as MemberWebsite } from "../../Assets/logo/team/member_website.svg";
import { ReactComponent as MemberTwitter } from "../../Assets/logo/team/member_twitter.svg";
import { ReactComponent as MemberInstagram } from "../../Assets/logo/team/member_instagram.svg";

const teamData = [
  {
    id: 1,
    name: "Ada Wright",
    url: "https://picsum.photos/300?text=1",
    jobTitle: "Project Manager",
    email: "a.wright@randatmail.com",
    instagram: "https://msng.link/o?Ada Wright=ig",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Ada%20Wright",
    twitter: "https://twitter.com/intent/tweet?url=&text=Ada%20Wright",
    website: "https://adawright.com",
  },
  {
    id: 2,
    name: "Julian Elliott",
    url: "https://picsum.photos/300?text=2",
    jobTitle: "UX Leader",
    email: "j.elliott@randatmail.com",
    instagram: "https://msng.link/o?Julian Elliott=ig",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Julian%20Elliott",
    twitter: "",
    website: "https://julianelliott.com",
  },
  {
    id: 3,
    name: "Cherry Turner",
    url: "https://picsum.photos/300?text=3",
    jobTitle: "English Interpreter",
    email: "c.turner@randatmail.com",
    instagram: "https://msng.link/o?Cherry Turner=ig",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Cherry%20Turner",
    twitter: "",
    website: "",
  },
  {
    id: 4,
    name: "Isabella	Watson",
    url: "https://picsum.photos/300?text=4",
    jobTitle: "UX Desinger",
    email: "i.watson@randatmail.com",
    instagram: "https://msng.link/o?Isabella	Watson=ig",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Isabella%09Watson",
    twitter: "",
    website: "https://isabellawatson.com",
  },
  {
    id: 5,
    name: "Camila	Ellis",
    url: "https://picsum.photos/300?text=5",
    jobTitle: "UX Designer",
    email: "c.ellis@randatmail.com",
    instagram: "https://msng.link/o?Camila	Ellis=ig",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Camila%09Ellis",
    twitter: "",
    website: "",
  },
  {
    id: 6,
    name: "Leonardo	Richardson",
    url: "https://picsum.photos/300?text=6",
    jobTitle: "UX Designer",
    email: "l.richardson@randatmail.com",
    instagram: "",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Leonardo%09Richardson",
    twitter: "",
    website: "https://leonardorichardson.com",
  },
  {
    id: 7,
    name: "Charlotte Brown",
    url: "https://picsum.photos/300?text=7",
    jobTitle: "Videographer",
    email: "c.ellis@randatmail.com",
    instagram: "https://msng.link/o?Charlotte Brown=ig",
    linkedIn: "",
    twitter: "https://twitter.com/intent/tweet?url=&text=Charlotte%20Brown",
    website: "https://charlottebrown.com",
  },
  {
    id: 8,
    name: "Oliver	Warren",
    url: "https://picsum.photos/300?text=8",
    jobTitle: "UX Designer",
    email: "o.warren@randatmail.com",
    instagram: "https://msng.link/o?OliverWarren=ig",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Oliver%09Warren",
    twitter: "",
    website: "",
  },
  {
    id: 9,
    name: "Ellia Kelley",
    url: "https://picsum.photos/300?text=9",
    jobTitle: "Engineer",
    email: "c.ellis@randatmail.com",
    instagram: "",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Ellia%20Kelley",
    twitter: "",
    website: "https://elliakelley.com",
  },
  {
    id: 10,
    name: "Preston Rogers",
    url: "https://picsum.photos/300?text=10",
    jobTitle: "Engineer",
    email: "p.rogers@randatmail.com",
    instagram: "",
    linkedIn: "http://www.linkedin.com/shareArticle?mini=true&url=&title=Preston%20Rogers",
    twitter: "https://twitter.com/intent/tweet?url=&text=Preston%20Rogers",
    website: "",
  },

]


function TeamMember(){
  return(
    <div className="member-card-group">
      {teamData.map((people) => {
        return(
          <div class="team-member-card" style={{backgroundImage: `url(${people.url})`}} key={people.id}>
            <div class="card-body">
              <h5 class="card-body-title">{people.name}</h5>
              <div class="card-body-content">{people.jobTitle}</div>
              <div class="card-body-social-link">
                {people.email.length !== 0 ? <a href={`mailto:${people.email}`} className="social-link"><MemberEmail/></a> : ""}
                {people.website.length !== 0 ? <a href={people.website} className="social-link"><MemberWebsite/></a> : ""}
                {people.linkedIn.length !== 0 ? <a href={people.linkedIn} className="social-link"><MemberLinkedIn/></a> : ""}
                {people.twitter.length !== 0 ? <a href={people.twitter} className="social-link"><MemberTwitter/></a> : ""}
                {people.instagram.length !== 0 ? <a href={people.instagram} className="social-link"><MemberInstagram/></a> : ""}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Team() {
  return(
    <section className="team">
      <div className="team-container">
        <div className="team-bg">
          <DefaultTitle title="Team" subtitle="Thanks to all the amazing team members who commit their time for ZAKKI's project"/>
        </div>
        <div className="team-body">
          <TeamMember/>
        </div>
      </div>
    </section>
  )
}