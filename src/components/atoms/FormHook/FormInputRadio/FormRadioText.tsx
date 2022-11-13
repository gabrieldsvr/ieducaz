import React from "react";
import {FormControlLabel, Radio, RadioGroup,} from "@mui/material";
import {Control, Controller} from "react-hook-form";

type Props = {
    name: string;
    control: Control;
    options: {label: string, value: string}[];
    required?: boolean;
    row?: boolean;
    size?: "small" | "medium" | undefined;
}

export const FormInputRadio = ({name, control,options, row = false, size="medium" }: Props) => {
    const generateRadioOptions = () => {
        let cont = 0;
        return options.map((singleOption) => (
            <FormControlLabel
                value={singleOption.value}
                label={singleOption.label}
                key={cont++}
                control={<Radio size={size} key={cont++}/>}
            />
        ));
    };

    return <Controller
        defaultValue = {''}
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
            <RadioGroup value={value} onChange={onChange} row={row} >
                {generateRadioOptions()}
            </RadioGroup>
        )}
    />
};