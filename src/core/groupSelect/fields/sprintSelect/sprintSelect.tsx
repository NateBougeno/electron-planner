import * as React from 'react';
import { Autocomplete, TextField } from "@mui/material";
import './sprintSelect.scss';
import { useRecoilState } from 'recoil';
import { sprintState } from '../../../../util';

export function SprintSelect({options}: IProps) {
    const [value, setValue] = React.useState('');
    const [sprintValue, setSprintValue] = useRecoilState(sprintState);
    
    return(
        <div className="sprintSelectContainer">
            <Autocomplete
                value={sprintValue}
                options={options}
                renderInput={(params) => <TextField {...params} label="Sprint Increment"/>}
                renderOption={(props, option) => <li {...props}>{option}</li>}
                freeSolo
                inputValue={sprintValue}
                onChange={handleChange}
                onBlur={onBlur}
                className="sprintSelect"
            />
        </div>
    )
    
    function handleChange(event: any) {
        setValue(event.target.value);
    }
    
    function onBlur() {
        setSprintValue(value);
    }
}



interface IProps {
    options: any[];
}
