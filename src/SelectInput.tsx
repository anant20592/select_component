import * as React from 'react';
interface SelectedItemI {
  value: string | number;
  label: string;
}

export interface SelectProps {
  value: SelectedItemI;
  onSelect?: (newValue: SelectedItemI) => void;
}

const Select: React.FC = ({ value, onSelect, ...restProps }: SelectProps) => {
  const [opened, setOpened] = React.useState<boolean>(false);
  const handleClick = () => {
    setOpened(!opened);
  };

  const handleMenuClick = (selectedValue: any) => {
    if (onSelect) {
      onSelect({ label: selectedValue.children, value: selectedValue.value });
      setOpened(!opened);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="select-button" onClick={handleClick}>
        <p style={{ padding: 0, margin: 0 }}>{value?.label}</p>
        <span>{opened ? '^' : 'v'}</span>
      </div>
      {opened && (
        <ul className="select-list-group">
          <>
            {restProps.children.map((child) => {
              return (
                <li
                  className="select-list-item"
                  data-value={child.props?.value}
                  onClick={(e) => handleMenuClick(child.props)}
                  role="option"
                >
                  {child}
                </li>
              );
            })}
          </>
        </ul>
      )}
    </div>
  );
};

export default Select;
