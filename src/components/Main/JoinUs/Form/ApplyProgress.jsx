import {ReactComponent as Checked} from '../../../Assets/svg/Checked.svg'

const progressData = [
  {
    id: 1,
    phase: "basic-info",
    name: "Info.",
  },
  {
    id: 2,
    phase: "document",
    name: "Document",
  },
  {
    id: 3,
    phase: "preview",
    name: "Preview",
  },
  {
    id: 4,
    phase: "submit",
    name: "Submit",
  },

]




function Progress(){
  return(
    <>
      {progressData.map((step) => {
        return(
          <>
            <div className={step.id === 1 ? "progress-group ongoing" : "progress-group"} data-phase={step.phase} key={step.id}>
              <span className="progress-icon-group">
                <div className="progress-icon"><Checked/></div>
              </span>
              <div className="progress-label">{step.name}</div>
            </div>
            {step.id === 4 ? "" : <hr className="progress-bar" data-order={step.id}/>}
          </>
        )
      })}
    </>
  )
}






export default function ApplyProgress() {
  return(
    <section className="apply-progress">
      <div className="apply-progress-container">
        <Progress/>
      </div>
    </section>
  )
}