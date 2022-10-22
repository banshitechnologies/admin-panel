import React from 'react'
import MyServicesPriceCard from '../Components/MyServicesPriceCard'

function MyServices() {
  return (
    <div>
     <div className="container">
        <div className="myservices">
        <div className="row">
            <div className="col-md-12">
                <h1>My Services</h1>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <MyServicesPriceCard/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default MyServices
