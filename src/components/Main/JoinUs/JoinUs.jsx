import ApplyProgress from "./Form/ApplyProgress"
import ApplyProgressControl from "./Form/ApplyProgressControl"
import Steps from "./Form/Steps/Steps"
import JobOptions from "./Form/JobOptions"

import {useState} from 'react'

export default function JoinUs(){
  const stepsPage = ['basic-info', 'document', 'preview', 'submit']
  const [currentPage, setCurrentPage] = useState(0)


  const handleClick = (e) => {
    if(e.target.matches('.next')){
      if(currentPage === stepsPage.length) return
      const next = currentPage + 1
      return setCurrentPage(next)
    }
    if(e.target.matches('.prev')){
      if(currentPage === 0) return
      const prev = currentPage-1
      return setCurrentPage(prev)
    }
  }

  const currentStep = stepsPage[currentPage]

  return(
    <main className="site-main">
      <div className="main-container">
        <section className="join-us">
          <div className="join-us-container">
            <JobOptions/>
            <div className="form-container">
              <ApplyProgress step={currentStep}/>
              <Steps phase={currentStep}/>
              <ApplyProgressControl phase={currentStep} onClick={handleClick}/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}