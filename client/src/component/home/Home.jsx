import React from 'react'
import './home.css'
import Main from './Main'
import Commoncard from '../common/Commoncard'
import Commoncard2 from '../common/Commoncard2'
import Timelinecard from './Timelinecard'



const Home = () => {

  return (
    <>

      <Main />
      <div className="container-fluid common-1 pt-4 ">
        <div className="card mb-3 card-bg1">
          <div className="row g-0">
            <Commoncard />
            <Commoncard2 />
          </div>
        </div>
      </div>
      <Timelinecard />
      <div className="container-fluid common-1 pt-4 cardbg-1">
        <div className="card mb-3 bg-dark">
          <div className="row g-0">
            <Commoncard2 />
            <Commoncard />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;