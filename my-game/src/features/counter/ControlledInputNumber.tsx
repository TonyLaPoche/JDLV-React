import React, { useState } from 'react';

interface ControlledInputNumberProps {
  value: number;
  onChange: (value: number) => void;
}

const ControlledInputNumber: React.FC<ControlledInputNumberProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return <input type="number" value={value} onChange={handleChange} />;
};

export default ControlledInputNumber;
