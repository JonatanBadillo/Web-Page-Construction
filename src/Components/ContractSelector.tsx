import React from 'react';
import { FaHammer, FaWrench, FaCheckCircle } from 'react-icons/fa';
import './ContractSelector.css';

interface ContractSelectorProps {
  selectedContract: string;
  setSelectedContract: React.Dispatch<React.SetStateAction<string>>;
}

const ContractSelector: React.FC<ContractSelectorProps> = ({ selectedContract, setSelectedContract }) => {
  return (
    <div className="contract-selector">
      <h2 className="selector-title">
        <span className="title-text">Select your type of contractor</span>
      </h2>
      
      <div className="button-container">
        <button
          className={`contract-button ${selectedContract === 'General' ? 'active' : ''}`}
          onClick={() => setSelectedContract('General')}
        >
          <FaHammer className="button-icon" />
          <span className="button-text">General Contractor</span>
        </button>
        
        <button
          className={`contract-button ${selectedContract === 'Sub' ? 'active' : ''}`}
          onClick={() => setSelectedContract('Sub')}
        >
          <FaWrench className="button-icon" />
          <span className="button-text">SubContractor</span>
        </button>
      </div>

      <div className="contract-description">
        {selectedContract === 'General' ? (
          <div className="description-content">
            <h3>
              <FaCheckCircle className="description-icon" />
              Complete Solutions for Residential and Commercial Properties
            </h3>
            <p className="description-text">
            At Sam Alexander Construction Inc., we specialize in delivering full-service general contracting solutions tailored to meet the unique demands of property managers and owners. Whether overseeing a multifamily residence or a commercial facility, our team ensures that every property is expertly, renovated, and enhanced to the highest standards. From large-scale improvements, we partner with property managers and owners to provide reliable, high-quality services that maximize property value and tenant/resident satisfaction.
            </p>
          </div>
        ) : (
          <div className="description-content">
            <h3>
              <FaCheckCircle className="description-icon" />
              Subcontractor Services: Drywall and Insulation
            </h3>
            <p className="description-text">
              At Sam Alexander Construction Inc., we are proud to offer specialized subcontractor services
              in drywall and insulation, catering to home builders and developers. Our team brings
              precision, reliability, and a commitment to excellence to every project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractSelector;
