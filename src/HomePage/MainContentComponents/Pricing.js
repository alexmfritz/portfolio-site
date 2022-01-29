import React from 'react';
import PricingTable from './PricingTable';
import './styles/Pricing.scss';


export default function Pricing() {
  return (
    <section className="pricing-page">
      <h2 className="pricing-header">Need a Dev?</h2>
      <p className="pricing-description">
        Looking to build or re-design your business site? Want to create a site for your side-hobby, photography portfolio, or wedding? 
        Checkout my packages below or feel free to inquiry with your specifics via the email found in the Contact tab!
      </p>
      <PricingTable />
    </section>
  )
}