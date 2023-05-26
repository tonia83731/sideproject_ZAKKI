
function NextStep(){
  return (
    <>
      <button className="next light-green-btn">Next &#8250;</button>
    </>
  )
}

function PreviousStep(){
  return (
    <>
      <button className="prev non-border-btn-green">&lsaquo; Previous</button>
    </>
  )
}


export default function ApplyProgressControl(){
  return(
    <section className="apply-progress-control">
      <div className="progress-control-container">
        <section className="button-group" data-phase="basic-info">
          <NextStep/>
        </section>
        {/* <section className="button-group" data-phase="document">
          <PreviousStep/>
          <NextStep/>
        </section>
        <section className="button-group" data-phase="preview">
          <PreviousStep/>
          <button className="next submit light-green-btn">Submit</button>
        </section>
        <section className="button-group-done" data-phase="submit">
          <button className="light-green-btn">Back to Home</button>
        </section> */}
      </div>
    </section>
  )
}