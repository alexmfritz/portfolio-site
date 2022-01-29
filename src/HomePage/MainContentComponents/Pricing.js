import React from 'react';
import PricingTableRow from './PricingTableRow';
import pricingData from '../../pricing-data';
import './styles/Pricing.scss';


export default function Pricing() {
  const prices = pricingData.map(pricePackage => <PricingTableRow key={pricePackage.id} data={pricePackage} />)
  return (
    <section className="pricing-page">
      <h2 className="pricing-header">Need a Dev?</h2>
      <p className="pricing-description">
        Looking to build or re-design your business site? Want to create a site for your side-hobby, photography portfolio, or wedding? 
        Checkout my packages below or feel free to inquiry with your specifics via the email found in the Contact tab!
      </p>
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
    </section>
    
  )
}