const infoPreviewData = [
  {
    id: 1,
    title: "Full Name",
    value: "Beatrix C."
  },
  {
    id: 2,
    title: "Age",
    value: "20"
  },
  {
    id: 3,
    title: "Phone Number",
    value: "+62 08525678889"
  },
  {
    id: 4,
    title: "Email",
    value: "ecendana@gmail.com"
  },
  {
    id: 5,
    title: "Online / Offline",
    value: "Offine"
  },
  {
    id: 6,
    title: "Available Time Hour",
    value: "Anytime"
  },
  {
    id: 7,
    title: "Job Title",
    value: "UX Designer"
  },
  {
    id: 8,
    title: "Time Zone",
    value: "PST"
  }

]

const docPreviewData = [
  {
    id: 1,
    title: "Resume / CV",
    value: "resume.pdf"
  },
  {
    id: 2,
    title: "Other Documents",
    value: "portfolio.pdf"
  },
  {
    id: 3,
    title: "Questions / Comments",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ligula ac magna maximus imperdiet. Interdum et malesuada fames ac."
  },
]




function PreviewList({className, data}){
  const previewListItem = data.map((item) => {
    return(
      <li className={`${className}-item`}>
        <span className={`preview-title ${className}-item-title`}>{item.title}</span>
        <span className={`preview-value ${className}-item-value`}>{item.value}</span>
      </li>
    )
  })
  return(
    <ul className={`${className}-list`}>
      {previewListItem}
    </ul>
  )
}




export default function StepThree(){
  return(
    <form data-phase="preview">
      <div className="form-title">Review your info to make sure everything is right.</div>
      <section className="form-body">
        <div className="info-preview">
          <PreviewList className="info-preview" data={infoPreviewData}/>
        </div>
        <div className="doc-preview">
          <PreviewList className="doc-preview" data={docPreviewData}/>
        </div>
      </section>
    </form>
  )
}