import * as React from 'react';
import { Autocomplete, TextField } from "@mui/material";
import './teamSelect.scss';

export function TeamSelect({options}: IProps) {
    const [value, setValue] = React.useState('');
    const [openDialog, setOpenDialog] = React.useState(false);
    
    return(
        <div className="teamSelectContainer">
            <Autocomplete
                value={value}
                options={options}
                renderInput={(params) => <TextField {...params} label="Team Name"/>}
                renderOption={(props, option) => <li {...props}>{option}</li>}
                freeSolo
                className="teamSelect"
            />
        </div>
    )
}

interface IProps {
    options: any[];
}