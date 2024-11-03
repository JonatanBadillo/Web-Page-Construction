// ContractSelector.tsx
import React from 'react';

interface ContractSelectorProps {
  selectedContract: string;
  setSelectedContract: React.Dispatch<React.SetStateAction<string>>;
}

const ContractSelector: React.FC<ContractSelectorProps> = ({ selectedContract, setSelectedContract }) => {
  return (
    <div className="contract-selector">
      <button
        className={`contract-button ${selectedContract === 'General' ? 'active' : ''}`}
        onClick={() => setSelectedContract('General')}
      >
        General Contractor
      </button>
      <button
        className={`contract-button ${selectedContract === 'Sub' ? 'active' : ''}`}
        onClick={() => setSelectedContract('Sub')}
      >
        Sub Contractor
      </button>

      <div className="contract-description">
        {selectedContract === 'General' ? (
          <p>
            General contractors oversee the entirety of construction projects, coordinating teams, managing resources, and
            ensuring that projects are completed on time and within budget.
          </p>
        ) : (
          <p>
            Sub contractors are specialized experts hired by general contractors to handle specific aspects of a project,
            such as electrical, plumbing, or carpentry work.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContractSelector;
