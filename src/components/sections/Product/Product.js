import React from 'react';
import '../../../scss/partials/_product.scss';
import NOV from '../../../assets/img/NOV.jpg'; 
import SSTPump from '../../../assets/img/SSTPump.jpg';
import Arrow from '../../../assets/img/Arrow.jpg';
import Others from '../../../assets/img/Others.jpg';
import Section from '../../../HOC/Section';

const Product = () => {
  return (
   
    <Section id="products">
      <div className='section-header'>
        <h3 className='section-title margin-left'>Our Products</h3>
      </div>
      
      <div className='container pt-2 pb-5'>
        <div className="two-column-container">
          <div className='text-column'>
            <ul className='product-list'>
              <li>National-Oilwell Varco (NOV) Reciprocating Pump, Pump Packages and Parts</li>
              <li>National-Oilwell Varco (NOV) Reciprocating Plunger Pumps, Pump Packages and Parts</li>
              <li>Wheatley-Gaso Reciprocating Pumps, Pump Packages and Parts</li>
              <li>MSW Reciprocating Pumps, Pump Packages and Parts</li>
              <li>Omega Reciprocating Pumps, Pump Packages and Parts</li>
            </ul>
          </div>
          <div className="image-column">
            <img src={NOV} alt="NOV" className="image" />
            <p className="image-description">
            PT SUHADA PETROLEUM is proud to be NOV’s authorized sole distributor in Indonesia</p> 
          </div>
        </div>
      </div>

      <div className='container pt-2 pb-5'>
        <div className="two-column-container">
          <div className="image-column">
            <img src={Arrow} alt="Arrow" className="image" />
            <p className="image-description">
              PT. SUHADA PETROLEUM is proud to be ARROW’s exclusive distributor for Pertamina in the country of Indonesia</p> 
          </div>
          <div className='text-column'>
            <ul className='product-list'>
              <li>Slow Speed Gas Engines</li>
              <li>Reciprocating Gas Compressor</li>
              <li>Arrow Natural Gas Compressors</li>
              <li>Arrow & Texsteam Chemical Pumps & Parts</li>
              <li>VR Engines</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container pt-2 pb-5'>
        <div className="two-column-container">
          <div className='text-column'>
            <ul className='product-list'>
              <li>Stainless Steel Submersible Shallow Well Oil Pumps</li>
            </ul>
          </div>
          <div className="image-column">
            <img src={SSTPump} alt="SSTPump" className="image" />
           
          </div>
        </div>
      </div>

      <div className="container pt-2 pb-5">
        <div className="three-column-container">
          <div className="image-column">
            <img src={Others} alt="Others" className="image" />
           
          </div>
          <div className='text-column'>
            <ul className='product-list'>
              <li>Pressure Vessel</li>
              <li>Boiler</li>
              <li>Cooler</li>
              <li>Steel Structure</li>
              <li>Storage Tank</li>
              <li>Separator</li>
              <li>Scrubber</li>
              <li>KO Drum</li>
            </ul>
          </div>
          <div className='text-column'>
            <ul className='product-list'>
              <li>Air Receiver</li>
              <li>Indirect Heater</li>
              <li>Fuel Gas Filter</li>
              <li>Pig Launcher</li>
              <li>Pig Receiver</li>
              <li>Media Filter</li>
              <li>Heat Exchanger</li>
              <li>Solid Feeding Package</li>
            </ul>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Product;