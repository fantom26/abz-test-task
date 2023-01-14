import { FC, InputHTMLAttributes } from "react";

import { Controller, useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  placeholder?: string;
  helperText?: string;
}

export interface ControlledInputProps extends InputProps {
  name: string;
}

export const Input: FC<InputProps> = (props) => {
  // **Props
  const { placeholder, error, helperText, ...rest } = props;

  const getClasses = () => {
    let classNames = "form-input ";

    if (error) classNames += "error";

    return classNames;
  };

  return (
    <div className={getClasses()}>
      <div className="form-input__wrapper">
        <input className="form-input__wrapper-input" type="text" id={rest.name} placeholder=" " {...rest} />
        <label htmlFor={rest.name} className="form-input__label">
          {placeholder}
        </label>
        <fieldset className="form-input__fieldset">
          <legend className="form-input__legend">
            <span>{placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {helperText && <span className={`${error ? "form-error" : "form-text-helper"}`}>{helperText}</span>}
    </div>
  );
};

export const ControlledInput: FC<ControlledInputProps> = (props) => {
  // **Props
  const { name, defaultValue = "", helperText = "", placeholder = "", ...rest } = props;

  // **Form
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <Input
          value={field.value || ""}
          onChange={field.onChange}
          error={!!error}
          helperText={error?.message || helperText}
          placeholder={placeholder}
          {...rest}
        />
      )}
    />
  );
};
