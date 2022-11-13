import React from "react";
import {FormControl, MenuItem, TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";


type Props = {
    name: string;
    control: Control;
    label: string;
    options: { label: string, value: string }[];
    onChangeFunctions?: any;
    variant?: "standard" | "filled" | "outlined" | undefined;
    fullWidth?: boolean;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: string;


}

export const FormInputSelect = ({
                                    name,
                                    control,
                                    label,
                                    onChangeFunctions = null,
                                    options,
                                    defaultValue = "",
                                    fullWidth = true,
                                    disabled = false,
                                }: Props) => {

    const generateSelectOptions = () => {
        return options.map((option) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            );
        });
    };


    return <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({field: {onChange, value}}) => (
            <FormControl fullWidth={fullWidth}  >
                <TextField
                    disabled={disabled}
                    select
                    fullWidth
                    value={value || ""}
                    onChange={(event) => {
                        onChange(event.target.value);
                        if (onChangeFunctions !== null) {

                            onChangeFunctions();
                        }
                    }}
                    label={label}
                >
                    {generateSelectOptions()}
                </TextField>
            </FormControl>
        )}
    />
};