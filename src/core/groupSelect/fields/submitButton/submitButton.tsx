import './submitButton.scss';
import { Button } from '@mui/material';
import { serverUrlState, errorState } from '../../../../util';
import { useRecoilValue, useRecoilState } from 'recoil';

export function SubmitButton({...props}: IProps) {
    const buttonLabel = props.dataLoaded ? 'Submit' : 'Load';
    const serverUrl = useRecoilValue(serverUrlState);
    const [error, setError] = useRecoilState(errorState);
    
    return (
        <div className="submitButtonContainer">
            <Button variant="contained" color="success" className="submitButton" onClick={onClick}>{buttonLabel}</Button>
        </div>
    )
    
    function onClick() {
        let newErrorArray: any = [...error];
        if(!props.dataLoaded && isValidServerUrl()) {
            if(newErrorArray.length > 0) {
                newErrorArray = [];
            }
            //TODO add functionality to connect to mongo server at the input URL
        } else if (props.dataLoaded) {
            //TODO add functionality to switch to the next page for story planning, and validation for the sprint/team fields
        } else {
            let newError = Object.assign({}, {
                field: 'serverUrl',
                errorMessage: 'Please enter a server url'
            });
            newErrorArray.push(newError);
        }
        setError(newErrorArray);
    }
    
    function isValidServerUrl() {
        if(serverUrl.length > 0) {
            return true;
        }
        return false;
    }
}

interface IProps {
    dataLoaded: boolean;
}
