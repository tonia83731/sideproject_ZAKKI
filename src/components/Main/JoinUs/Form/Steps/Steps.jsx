import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepDone from './StepDone'

function StepsPageChange({phase}){
  if(phase === 'basic-info') {return <StepOne/>}
  if(phase === 'document') {return <StepTwo/>}
  if(phase === 'preview') {return <StepThree/>}
  if(phase === 'submit') {return <StepDone/>}
}


export default function Steps({phase}){
  return(
    <section className="form-section">
      <StepsPageChange phase={phase}/>
    </section>
  )
}