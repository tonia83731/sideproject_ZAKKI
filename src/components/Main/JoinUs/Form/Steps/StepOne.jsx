
const locationData = [
  {
    id: 1,
    name: "Offline",
    isRequired: true,
  },
  {
    id: 2,
    name: "Online",
    isRequired: false,
  }
]

const timeData = [
  {
    id: 1,
    name: "Anytime",
  },
  {
    id: 2,
    name: "5-8 pm"
  },
  {
    id: 3,
    name: "9-12 am"
  },
  {
    id: 4,
    name: "1-4 pm"
  }
]

const policyData = [
  {
    id: 1,
    name: "Get update news from ZAKKI every 2 months",
  },
  {
    id: 2,
    name: "I agree to follow ZAKKI’s",
    link: "privacy policy"
  },
]



export function ShortResponse({ name, type, placeholder, isRequired}){
  return(
    <div className="input-group">
      <div className="input-label">{name} {isRequired === "true" ? (<span>*</span>) : ""}</div>
      <input class="input-normal" type={type} placeholder={placeholder} required={isRequired}/>
    </div>
  )
}

export function RadioResponse({className, name, data, isRequired}){
  const inputRadioItem = data.map((item, index) => {
    return(
      <div className="input-radio-item" key={item.id}>
        <input type="radio" className="input-radio-item" name={name} defaultChecked={index === 0}/>
        <label className="label-radio-item">{item.name}</label>
      </div>
    )
  })
  return(
    <div class="input-group">
      <div className="input-label">{name} {isRequired === "true" ? (<span>*</span>) : ""}</div>
      <div className={`input-radio-group ${className}`}>
        {inputRadioItem}
      </div>
    </div>
  )
}

export function CheckboxResponse({className, data}){
  const inputCheckboxItem = data.map((item) => {
    return(
      <div className="input-checkbox-group" key={item.id}>
        <input type="checkbox" className="input-checkbox-item"/>
        <label className="label-checkbox-item">{item.name} <a herf="">{item.link}</a></label>
      </div>
    )
  })
  return(
    <div className={`input-group ${className}`}>
      {inputCheckboxItem}
    </div>
  )
}



export default function StepOne(){
  return (
    <form data-phase="basic-info">
      <div className="form-title">Interested to be Part of Us? <br/>Please fill in the following form.</div>
      <section className="form-body">
        <ShortResponse name="Full Name" type="text" placeholder="Beatrix C." isRequired="true"/>
        <ShortResponse name="Age" type="number" placeholder="20"/>
        <ShortResponse name="Phone Number" type="text" placeholder="+62 08525678889" isRequired="true"/>
        <ShortResponse name="Email" type="email" placeholder="ecendana@gmail.com" isRequired="true"/>
        <RadioResponse className="location-radio" name="Online / Offline" data={locationData} isRequired="true"/>
        <RadioResponse className="time-radio" name="Available Time Hour" data={timeData} isRequired="true"/>
        <ShortResponse name="Job Title" type="text" placeholder="UX Designer" isRequired="true"/>
        <ShortResponse name="Time Zone" type="text" placeholder="PST" isRequired="true"/>
        <CheckboxResponse className="checkbox-group" data={policyData}/>
      </section>
    </form>
  )
}