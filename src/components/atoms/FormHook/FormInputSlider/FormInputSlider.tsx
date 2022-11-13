import React, { useEffect } from "react";
import { Slider } from "@mui/material";
import {Control, Controller} from "react-hook-form";


type Props = {
    name: string;
    control: Control;
    label: string;
    options: { label: string, value: string }[];
    variant?: "standard" | "filled" | "outlined" | undefined;
    fullWidth?: boolean;
    required?: boolean;
    setValue?: any


}
export const FormInputSlider = ({name,control,setValue,label}: Props) => {
    const [sliderValue, setSliderValue] = React.useState(0);

    useEffect(() => {
        if (sliderValue) setValue(name, sliderValue);
    }, [sliderValue]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setSliderValue(newValue as number);
    };

    return <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
            <Slider
                value={sliderValue}
                onChange={handleChange}
            />
        )}
    />
};