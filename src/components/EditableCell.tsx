import React, { useState, useEffect } from 'react';

interface EditableCellProps {
  value: string;
  onSave: (value: string) => void;
}

export const EditableCell: React.FC<EditableCellProps> = ({
  value,
  onSave,
}) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [hovered, setHovered] = useState(false);

  const handleSave = () => {
    console.log('Save clicked. Value:', inputValue);
    onSave(inputValue);
    setEditing(false);
    setInputValue(value);
  };

  const handleCancel = () => {
    setEditing(false);
    setInputValue(value);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const isValueValid = () => {
    const numericValue = parseFloat(inputValue);
    const numericOriginalValue = parseFloat(value);

    return (
      !isNaN(numericValue) &&
      numericValue >= numericOriginalValue - 0.1 * numericOriginalValue &&
      numericValue <= numericOriginalValue + 0.1 * numericOriginalValue
    );
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {editing ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleSave}
            style={{
              position: 'absolute',
              top: 0,
              right: '4em',
              cursor: 'pointer',
            }}
            title="Save"
            disabled={!isValueValid()}
          >
            📥
          </button>
          <button
            onClick={handleCancel}
            style={{
              position: 'absolute',
              top: 0,
              right: '1em',
              cursor: 'pointer',
            }}
            title="Cancel"
          >
            ❌
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => setEditing(true)}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            {value}
          </span>
          {hovered && (
            <span
              onClick={() => setEditing(true)}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                cursor: 'pointer',
              }}
            >
              🖊️
            </span>
          )}
        </>
      )}
    </div>
  );
};
