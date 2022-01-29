import React from 'react';
import pricingData from '../../pricing-data';
import PricingTableRow from './PricingTableRow';

export default function PricingTable() {
  const prices = pricingData.map(pricePackage => <PricingTableRow key={pricePackage.id} data={pricePackage} />);
  return (
    <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Description</th>
            <th>Price</th>
            <th>Timeframe</th>
          </tr>
        </thead>
        <tbody>
          {prices}
        </tbody>
      </table>
  )
}