import { useState } from 'react'

export default function Subscribe(){
  const [ email, setEmail ] = useState('')

  // const validEmail = (emailData){
  //   const emailRegex =  /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
  //   const valid = emailData.match(emailRegex);
  //   return valid;
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.length === 0) return
    // if(email.match(validRegex)) return
    // if (email.match(emailRegex)){
    //   return alert('Please enter a valid email!');
    // }
    return alert(`The news will sent to ${email}`)
  }
  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  return(
    <section className="subscribe">
      <div className="subscribe-container">
        <label for="subscribe-input" className="subscribe-label">
          Stay tuned for our latest projects!
        </label>
        <div className="subscribe-input-area">
          <input type="email" id="subscribe-input" className="subscribe-input" placeholder="Write your email here..." value={email} onChange={handleChange}></input>
          <button id="subscribe-submit" className="subscribe-submit" onClick={handleSubmit}>Confirm &#10148;</button>
        </div>
      </div>
    </section>
  )
}