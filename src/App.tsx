import * as React from 'react';
import Select from './SelectInput';
import './style.css';

export interface OptionI {
  label: string;
  value: number | string;
}

export default function App() {
  const [value, setValue] = React.useState<OptionI>({
    value: '1',
    label: 'Item 1',
  });

  return (
    <div>
      <h1>Select Component</h1>
      <Select
        value={value}
        onSelect={(newValue: OptionI) =>
          setValue({ ...value, value: newValue.value, label: newValue.label })
        }
      >
        <option value={'1'}>Item 1</option>
        <option value={'2'}>Item 2</option>
        <option value={'3'}>Item 3</option>
      </Select>
    </div>
  );
}
