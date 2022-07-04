import React, {FC} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useImmer} from 'use-immer';
import {pickerStyles} from './style';

type Data = {
  label: string;
  value: string;
};
interface Props {
  data: Data[];
  value: string;
  setValue: any;
}

export const Picker: FC<Props> = ({data, value, setValue}) => {
  const [open, setOpen] = useImmer(false);
  const [items, setItems] = useImmer(data);
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
