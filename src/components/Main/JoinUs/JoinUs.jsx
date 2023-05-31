import ApplyProgress from "./Form/ApplyProgress"
import ApplyProgressControl from "./Form/ApplyProgressControl"
import Steps from "./Form/Steps/Steps"
import JobOptions from "./Form/JobOptions"

export default function JoinUs(){
  return(
    <section className="join-us">
      <div className="join-us-container">
        <JobOptions/>
        <div className="form-container">
          <ApplyProgress/>
          <Steps/>
          <ApplyProgressControl/>
        </div>
      </div>
    </section>
  )
}