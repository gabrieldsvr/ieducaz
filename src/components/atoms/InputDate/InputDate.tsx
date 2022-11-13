import * as React from 'react';
import {useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

type Props = {
    title?: string;

}

export const InputDate = ({title, ...props}: Props) => {

    const [value, setValue] = useState<Dayjs | null>(
        dayjs(),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} locale="French">
            <DesktopDatePicker
                label={title}
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params: TextFieldProps) => <TextField {...params} fullWidth required/>}
            />
        </LocalizationProvider>
    );
}