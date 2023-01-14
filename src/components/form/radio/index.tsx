import { FC, InputHTMLAttributes } from "react";

import { useFormContext } from "react-hook-form";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string | number;
}

export const Radio: FC<RadioProps> = (props) => {
  // **Props
  const { label, value, name } = props;

  const { register } = useFormContext();

  return (
    <label className="form-radio">
      <input {...register(name)} type="radio" name={name} value={value} />
      <span className="form-radio__field"></span>
      <span className="form-radio__label">{label}</span>
    </label>
  );
};
