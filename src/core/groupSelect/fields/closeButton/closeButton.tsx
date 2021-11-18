import './closeButton.scss';
import { Button } from '@mui/material';

export function CloseButton() {
    return (
        <div className="closeButtonContainer">
            <Button variant="contained" color="error" className="closeButton">Close</Button>
        </div>
    )
}


