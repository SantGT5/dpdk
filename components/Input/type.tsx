import React from "react";

type InputType = {
  className?: string;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type { InputType };
