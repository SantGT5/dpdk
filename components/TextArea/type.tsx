import React from "react";

type TextAreaType = {
    className?: string;
    name: string
    label?: string
    placeholder?: string
    required?: boolean;
    labelClassName?: string
    cols?: number
    rows?: number
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  };

  export type { TextAreaType }