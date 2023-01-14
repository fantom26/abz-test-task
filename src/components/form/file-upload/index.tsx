import { FC, InputHTMLAttributes } from "react";

import { Controller, useFormContext } from "react-hook-form";

interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  value?: any;
  onChange: (e: any) => void;
}

export interface ControlledFileUploadProps {
  name: string;
}

export const FileUpload: FC<FileUploadProps> = (props) => {
  const { value, onChange, error, helperText, ...rest } = props;

  const getClasses = () => {
    let classNames = "form-file-upload ";

    if (error) classNames += " error";

    if (value.length) classNames += " load";

    return classNames;
  };

  return (
    <div className={getClasses()}>
      <label className="form-file-upload__wrapper">
        <input className="visually-hidden" onChange={(e) => onChange(e.target.files)} type="file" value={value.filename} accept=".jpg,.jpeg" {...rest} />
        <span className="form-file-upload__btn">Upload</span>
        <span className="form-file-upload__name">{value.length ? value[0].name : "Upload your photo"}</span>
      </label>
      {helperText && <span className="form-error">{helperText}</span>}
    </div>
  );
};

export const ControlledFileUpload: FC<ControlledFileUploadProps> = (props) => {
  // **Props
  const { name } = props;

  // **Form
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FileUpload value={value} onChange={onChange} error={!!error} helperText={error?.message} />
      )}
    />
  );
};
