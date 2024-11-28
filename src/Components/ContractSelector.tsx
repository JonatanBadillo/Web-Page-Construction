import React from 'react';
import { FaHammer, FaWrench, FaCheckCircle } from 'react-icons/fa'; // Importamos iconos adicionales

interface ContractSelectorProps {
  selectedContract: string;
  setSelectedContract: React.Dispatch<React.SetStateAction<string>>;
}

const ContractSelector: React.FC<ContractSelectorProps> = ({ selectedContract, setSelectedContract }) => {
  return (
    <div className="contract-selector">
      <h2 className="selector-title">Select your type of contractor</h2>
      <div className="button-container">
        <button
          className={`contract-button ${selectedContract === 'General' ? 'active' : ''}`}
          onClick={() => setSelectedContract('General')}
        >
          <FaHammer style={{ marginRight: '8px' }} />
          General Contractor Services
        </button>
        <button
          className={`contract-button ${selectedContract === 'Sub' ? 'active' : ''}`}
          onClick={() => setSelectedContract('Sub')}
        >
          <FaWrench style={{ marginRight: '8px' }} />
          SubContractor Services
        </button>
      </div>

      <div className="contract-description">
        {selectedContract === 'General' ? (
          <div className="description-content">
            <h3><FaCheckCircle style={{ marginRight: '10px', color: 'yellow' }} />Complete Solutions for Residential and Commercial Properties</h3>
            <p className="description-text">
              Sam Alexander Construction Inc. specializes in providing full-service general contracting tailored
              to the unique needs of property managers. Whether you're managing a multifamily property or
              a commercial space, we ensure your properties are maintained and improved to the highest
              standards.
            </p>
            
          </div>
        ) : (
          <div className="description-content">
            <h3><FaCheckCircle style={{ marginRight: '10px', color: 'yellow' }} />Subcontractor Services: Drywall and Insulation</h3>
            <p className="description-text">
              At Sam Alexander Construction Inc., we are proud to offer specialized subcontractor services
              in drywall and insulation, catering to home builders and developers. Our team brings
              precision, reliability, and a commitment to excellence to every project, ensuring your
              construction needs are met efficiently and to the highest standards.
            </p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractSelector;
