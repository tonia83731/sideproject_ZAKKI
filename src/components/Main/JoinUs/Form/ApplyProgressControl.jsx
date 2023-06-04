import { Link } from "react-router-dom"

function NextStep({onClick}){
  return (
    <>
      <button className="next light-green-btn" onClick={onClick}>Next &#8250;</button>
    </>
  )
}

function PreviousStep({onClick}){
  return (
    <>
      <button className="prev non-border-btn-green" onClick={onClick}>&lsaquo; Previous</button>
    </>
  )
}

function ApplyProgressControlChange({phase, onClick}){
  if(phase === 'basic-info') {
    return (
      <section className="button-group" data-phase="basic-info">
        <NextStep onClick={onClick}/>
      </section>
    )
  }
  if(phase === 'document') {
    return (
      <section className="button-group" data-phase="document">
        <PreviousStep onClick={onClick}/>
        <NextStep onClick={onClick}/>
      </section>
    )
  }
  if(phase === 'preview') {
    return (
      <section className="button-group" data-phase="preview">
        <PreviousStep onClick={onClick}/>
        <button className="next submit light-green-btn" onClick={onClick}>Submit</button>
      </section>
    )
  }
  if(phase === 'submit') {
   return(
    <section className="button-group-done" data-phase="submit">
      <Link to="/" className="light-green-btn back-home">Back to Home</Link>
    </section>
   )  
  }
}


export default function ApplyProgressControl({phase, onClick}){
  return(
    <section className="apply-progress-control">
      <div className="progress-control-container">
        <ApplyProgressControlChange phase={phase} onClick={onClick}/>
      </div>
    </section>
  )
}