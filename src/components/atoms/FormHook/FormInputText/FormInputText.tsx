import {Control, Controller, useForm} from "react-hook-form";
import React from "react";
import {TextField} from "@mui/material";

type Props = {
    name: string;
    label: string;
    control: Control;
    variant?: "standard" | "filled" | "outlined" | undefined;
    fullWidth?: boolean;
    required?: boolean;
    defaultValue?: string;
}
export const FormInputText = ({name, label, control , variant = "outlined",defaultValue="", fullWidth = true, required = true}: Props) => {


    return (<Controller name={name} control={control} defaultValue={defaultValue}
                        render={({field: {onChange, value}}) => (
                            <TextField id={name} label={label} name={name}
                                       onChange={onChange}
                                       value={value}
                                       variant={variant}
                                       fullWidth={fullWidth}
                                       required={required}
                            />)}
    />);
};