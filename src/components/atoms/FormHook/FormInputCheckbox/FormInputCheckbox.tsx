import React from "react";
import {Control, Controller} from "react-hook-form";
import {Checkbox, FormControl, FormControlLabel} from "@mui/material";


type Props = {
    name: string;
    control: Control;
    options: { label: string, value: string|boolean }[];
    onChangeFunctions?: any;
    variant?: "standard" | "filled" | "outlined" | undefined;
    fullWidth?: boolean;
    required?: boolean;


}

export const FormInputCheckbox = ({name, control, options, onChangeFunctions = null}: Props) => {

    return (
        <FormControl variant={'outlined'}>
            <div>
                {
                    options.map((item) => {
                        return (
                            <FormControlLabel
                                control={
                                    <Controller control={control}
                                                name={name}
                                                render={({field: {onChange, value}}) => (

                                                    <Checkbox
                                                        onChange={(event) => {
                                                            onChange(event.target.checked);
                                                            if (onChangeFunctions !== null) {
                                                                onChangeFunctions(event.target.checked);
                                                            }
                                                        }}

                                                        checked={value}
                                                        value={item.value}/>

                                                )}
                                    />
                                } label={item.label}/>
                        );
                    })
                }
            </div>
        </FormControl>
    );


};