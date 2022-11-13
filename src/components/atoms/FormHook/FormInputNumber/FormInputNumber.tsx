import {Control, Controller, useForm} from "react-hook-form";
import React from "react";
import {TextField} from "@mui/material";

type Props = {
    name: string;
    label: string;
    control: Control;
    disabled?: boolean;
    variant?: "standard" | "filled" | "outlined" | undefined;
    fullWidth?: boolean;
    required?: boolean;
}
export const FormInputNumber = ({name, label, control , variant = "outlined",disabled=false, fullWidth = true, required = true}: Props) => {

    const regex = /^[0-9\b]+$/;

    return (<Controller name={name} control={control} defaultValue = {''}
                        render={({field: {onChange, value}}) => (
                            <TextField id={name} label={label} name={name} value={value} disabled={disabled}
                                       onChange={(event) => {
                                           if (regex.test(event.target.value)){
                                               onChange(event.target.value);
                                           }
                                       }}
                                       variant={variant}
                                       fullWidth={fullWidth}
                                       required={required}
                            />)}
    />);
};