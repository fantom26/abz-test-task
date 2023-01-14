import { ReactNode } from "react";

import { FormProvider, UseFormReturn } from "react-hook-form";

import { ControlledFileUpload } from "./file-upload";
import { ControlledInput } from "./input";
import { Radio } from "./radio";

interface FormProps {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
}

const Form = (props: FormProps) => {
  // **Props
  const { methods, children, onSubmit } = props;

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

Form.Input = ControlledInput;
Form.Radio = Radio;
Form.FileUpload = ControlledFileUpload;
export { Form };
