/* eslint-disable no-unused-vars */
import Select, { SingleValue } from 'react-select';
import { SelectOption } from './MoviesPage';

type Props = {
    options: SelectOption[];
    onSelectedValue : (option : SelectOption) => void;
    defaultValue: SelectOption;
    label : string;
}

const MySelect = ({options, onSelectedValue, defaultValue, label} : Props) => {
  const onHandleChange = (e: SingleValue<{value: string, label: string}>) => {
    if(e && e.value != defaultValue.value){
      const option: SelectOption = {label : e.value, value: e.value};
      onSelectedValue(option);
    }
  };
  return (
    <div className="w-48">
      <label className="font-semibold">
        {label}
        <Select options={options} className="mt-3 font-normal" onChange={onHandleChange} defaultValue={defaultValue}/>
      </label>
    </div>
  );
};

export default MySelect;