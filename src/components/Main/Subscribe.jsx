

export default function Subscribe(){
  return(
    <section className="subscribe">
      <div className="subscribe-container">
        <label for="subscribe-input" className="subscribe-label">
          Stay tuned for our latest projects!
        </label>
        <div className="subscribe-input-area">
          <input type="text" id="subscribe-input" className="subscribe-input" placeholder="Write your email here..."></input>
          <button id="subscribe-submit" className="subscribe-submit">Confirm &#10148;</button>
        </div>
      </div>
    </section>
  )
}