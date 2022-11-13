import React, {useState} from "react";
import {Control, Controller} from "react-hook-form";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import TextField, {TextFieldProps} from "@mui/material/TextField";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, {Dayjs} from "dayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

const DATE_FORMAT = "dd-MMM-yy";


type Props = {
    name: string;
    control: Control;
    label: string;
    variant?: "standard" | "filled" | "outlined" | undefined;
    fullWidth?: boolean;
    required?: boolean;


}

export const FormInputDate = ({name, control, label}:Props) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} locale="French">
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => (
                    <DesktopDatePicker
                        label={label}
                        inputFormat="DD/MM/YYYY"
                        value={value}
                        onChange={onChange}
                        showToolbar={true}
                        renderInput={(params: TextFieldProps) => <TextField {...params} fullWidth required/>}/>
                )}
            />
        </LocalizationProvider>
    );
};