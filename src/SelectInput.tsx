import * as React from 'react';
const Select: React.FC = () => {
  const [opened, setOpened] = React.useState<boolean>(false);
  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          border: '1px solid',
          width: '50%',
          padding: '4px 12px',
          borderRadius: '3px',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          cursor: 'pointer',
          marginBottom: '5px',
        }}
        onClick={handleClick}
      >
        <p style={{ padding: 0, margin: 0 }}>value</p>
        <span>{opened ? '^' : 'v'}</span>
      </div>
      {opened && (
        <ul
          style={{
            border: '1px solid',
            width: '50%',
            padding: '4px 12px',
            borderRadius: '3px',
            position: 'absolute',
            top: '12px',
          }}
        >
          <li style={{ listStyle: 'none' }}>Item 1</li>
          <li style={{ listStyle: 'none' }}>Item 2</li>
          <li style={{ listStyle: 'none' }}>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Select;
