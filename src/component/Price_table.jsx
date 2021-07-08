import React from 'react'
import pData from '../component/Data';

const Price_table = () => {
    return (
<table className="table mb-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Platform</th>
      <th scope="col">Last Traded Price</th>
      <th scope="col">Buy / Sell Price</th>
      <th scope="col">Difference</th>
      <th scope="col">Savings</th>
    </tr>
  </thead>
  <tbody>
      {
    pData.map((currElem,index)=>{
      return(
      <tr className="table-row" key={index}>
        <td style={{color:"grey"}}>{currElem.id}</td>
        <td>{currElem.Platform}</td>
        <td>{currElem.LastTradedPrice}</td>
        <td>{currElem.BuySellPrice}</td>
        <td style={{color:"#00c2cb"}}>{currElem.difference}</td>
        <td style={{color:"#00c2cb"}}>{currElem.savings}</td>
      </tr>
      )
    })
  }
  </tbody>
</table>
    )
}

export default Price_table
