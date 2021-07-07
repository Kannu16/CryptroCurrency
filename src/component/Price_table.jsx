import React from 'react'

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
    <tr className="table-row">
      <th scope="row">1</th>
      <td>WazirX</td>
      <td>₹ 26,41,497</td>
      <td>₹ 26,39,812 / ₹ 26,41,497</td>
      <td style={{color:"#00c2cb"}}>0.21 %</td>
      <td style={{color:"#00c2cb"}}> ▲ ₹ 5,615 </td>
    </tr>
    <tr className="table-row">
      <th scope="row">2</th>
      <td>Bitbns</td>
      <td>₹ 26,52,709</td>
      <td>₹ 26,48,943 / ₹ 26,52,709</td>
      <td style={{color:"#00c2cb"}}>0.64 %</td>
      <td style={{color:"#00c2cb"}}>▲ ₹ 16,828</td>
    </tr>
    <tr className="table-row">
      <th scope="row">3</th>
      <td>Giotus</td>
      <td>₹ 26,46,000</td>
      <td>₹ 26,44,500 / ₹ 26,93,000</td>
      <td style={{color:"#00c2cb"}}>0.38 %</td>
      <td style={{color:"#00c2cb"}}>▲ ₹ 10,118</td>
    </tr>

    <tr className="table-row">
      <th scope="row">4</th>
      <td>Colodax</td>
      <td>₹ 25,83,138</td>
      <td>₹ 25,75,167 / ₹ 26,08,984</td>
      <td className="text-danger">-2.00 %</td>
      <td className="text-danger">▼ ₹ 52,743</td>
    </tr>

    <tr className="table-row">
      <th scope="row">5</th>
      <td>Zebpay</td>
      <td>₹ 26,53,990</td>
      <td>₹ 26,53,990 / ₹ 26,52,000</td>
      <td style={{color:"#00c2cb"}}>0.69 %</td>
      <td style={{color:"#00c2cb"}}>▲ ₹ 18,108</td>
    </tr>

    <tr className="table-row">
      <th scope="row">6</th>
      <td>CoinDcx</td>
      <td>₹ 26,37,954</td>
      <td>₹ 26,37,959 / ₹ 26,50,126</td>
      <td style={{color:"#00c2cb"}}>0.08 %</td>
      <td style={{color:"#00c2cb"}}>▲ ₹ 2,073</td>
    </tr>
  </tbody>
</table>
    )
}

export default Price_table
