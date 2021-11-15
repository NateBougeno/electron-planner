import * as React from 'react';
import { Autocomplete, TextField } from "@mui/material";
import './sprintSelect.scss';

export function SprintSelect({options}: IProps) {
    const [value, setValue] = React.useState('');
    const [openDialog, setOpenDialog] = React.useState(false);
    
    return(
        <div className="sprintSelectContainer">
            <Autocomplete
                value={value}
                options={options}
                renderInput={(params) => <TextField {...params} label="Sprint Increment"/>}
                renderOption={(props, option) => <li {...props}>{option}</li>}
                freeSolo
                className="sprintSelect"
            />
        </div>
    )
}

interface IProps {
    options: any[];
}
