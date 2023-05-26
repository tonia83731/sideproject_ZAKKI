const fileData = [
  {
    id:1,
    title1: "Resume / CV",
    for: "resume",
    accept: ".doc,.docx,.pdf",
    isRequired: true,
  },
  {
    id:2,
    title1: "Other Documents",
    title2: "(Portfolio, Recommendation letter, etc.)",
    for: "other-doc",
    accept: ".doc,.docx,.pdf",
    isRequired: false,
  },
]

export function FileResponse(){
  return(
    fileData.map((item) => {
      return(
        <div className="input-file-group" key={item.id}>
          <label className="label-file-item">{item.title1} {item.isRequired === true ? (<span>*</span>) : ""}<br/>{item.title2}</label>
          <input type="file" className="input-file-item" id={item.for} accept={item.accept}required={item.isRequired}/>
        </div>
      )
    })
  )
}


export default function StepTwo(){
  return(
    <form data-phase="document">
      <div className="form-title">Interested to be Part of Us? <br/>Please fill in the following form.</div>
      <section className="form-body">
        <FileResponse/>
        <div className="input-textarea-group">
          <label for="questions" className="input-label">Questions / Comments <span>*</span></label>
          <textarea id="questions" name="questions" rows="4" className="input-textarea">
            Write your questions or comments here...
          </textarea>
        </div>
      </section>
    </form>
  )
}