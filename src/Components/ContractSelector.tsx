// ContractSelector.tsx
import React from 'react';

interface ContractSelectorProps {
  selectedContract: string;
  setSelectedContract: React.Dispatch<React.SetStateAction<string>>;
}

const ContractSelector: React.FC<ContractSelectorProps> = ({ selectedContract, setSelectedContract }) => {
  return (
    <div className="contract-selector">
      <h2 className="selector-title">Selecciona tu tipo de contratista</h2>
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
            Un contratista general es responsable de supervisar todo el proyecto de construcción,
            coordinando con subcontratistas y asegurando que el trabajo se complete según las
            especificaciones y los plazos.
          </p>
        ) : (
          <p>
            Un subcontratista es un profesional especializado contratado para realizar tareas
            específicas dentro de un proyecto de construcción más grande, como electricidad, plomería o carpintería.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContractSelector;
