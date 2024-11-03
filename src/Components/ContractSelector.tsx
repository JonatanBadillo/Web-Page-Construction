// ContractSelector.tsx
import React from 'react';

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
          General Contractor
        </button>
        <button
          className={`contract-button ${selectedContract === 'Sub' ? 'active' : ''}`}
          onClick={() => setSelectedContract('Sub')}
        >
          Sub Contractor
        </button>
      </div>

      <div className="contract-description">
        {selectedContract === 'General' ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam obcaecati reiciendis mollitia numquam non, sapiente accusamus, itaque minima iure, corporis nihil nesciunt! Quas modi sit quod suscipit, laborum reprehenderit?
          </p>
        ) : (
          <p>
            2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione quasi dignissimos illum animi, cumque pariatur veniam repellat porro officiis dolor quibusdam ullam, vero tempora consequuntur facere quidem iure hic.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContractSelector;
