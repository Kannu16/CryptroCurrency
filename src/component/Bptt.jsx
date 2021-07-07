import React from 'react'

const Bptt = () => {
    return (
      <div className="bestPriceContainer mb-5">
          <h3 className="text-center bpttht">Best Price to trade</h3>
          <div className="row">
              <div className="col-2 text-center">
                 <h1>0.42%</h1>
                  <p>5 Mins</p>
              </div>

              <div className="col-2 text-center">
                   <h1>0.66%</h1>
                   <p>1 Hour</p>
              </div>

              <div className="col-4 text-center">
                   <h3>₹ 26,35,881</h3>
                   <p>Average BTC/INR net price including commission</p>
              </div>

              <div className="col-2 text-center">
                   <h1>6.51 %</h1>
                   <p>1 Day</p>
              </div>

              <div className="col-2 text-center">
                   <h1>8.8%</h1>
                   <p>7 Days</p>
              </div>
          </div>
      </div>
    )
}

export default Bptt
