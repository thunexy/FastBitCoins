import React, {FC, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {pickerStyles} from './style';

type Data = {
  label: string;
  value: string;
};
interface Props {
  data: Data[];
}

export const Picker: FC<Props> = ({data}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('english');
  const [items, setItems] = useState<Data[]>(data);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      theme="DARK"
      style={pickerStyles.container}
      textStyle={pickerStyles.text}
    />
  );
};
