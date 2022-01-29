import React from 'react';

export default function PricingTableRow(props) {
  return (
    <tr>
      <td>{props.data.package}</td>
      <td>{props.data.description}</td>
      <td>{props.data.pricing}</td>
      <td>{props.data.timeframe}</td>
    </tr>
  )
}