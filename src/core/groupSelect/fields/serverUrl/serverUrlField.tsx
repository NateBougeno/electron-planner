import * as React from 'react';
import './serverUrlField.scss';
import { TextField } from '@mui/material';
import { serverUrlState, desiredError } from '../../../../util';
import { useRecoilState, useRecoilValue } from 'recoil';

export function ServerUrlField() {
    const [serverUrl, setServerUrl] = useRecoilState(serverUrlState);
    let serverUrlError = useRecoilValue(desiredError('serverUrl'));
    
    return(
        <div>
            <TextField
                error={serverUrlError.length > 0}
                value={serverUrl}
                label={"Server URL"}
                variant="outlined"
                required
                helperText={serverUrlError}
                onChange={handleChange}
                className={"serverUrlField"}
            />
        </div>
    );
    
    function handleChange(event: any) {
        setServerUrl(event.target.value);
    }
}
