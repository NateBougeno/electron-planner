import './submitButton.scss';
import { Button } from '@mui/material';
import { serverUrlState, errorState, sprintState, teamState } from '../../../../util';
import { useRecoilValue, useRecoilState } from 'recoil';

export function SubmitButton({...props}: IProps) {
    const buttonLabel = props.dataLoaded ? 'Submit' : 'Load';
    const serverUrl = useRecoilValue(serverUrlState);
    const chosenSprint = useRecoilValue(sprintState);
    const chosenTeam = useRecoilValue(teamState);
    const [error, setError] = useRecoilState(errorState);
    
    return (
        <div className="submitButtonContainer">
            <Button variant="contained" color="success" className="submitButton" onClick={onClick}>{buttonLabel}</Button>
        </div>
    )
    
    function onClick() {
        let newErrorArray: any = [...error];
        let newError = {};
        
        if(!props.dataLoaded && isValidServerUrl()) {
            if(newErrorArray.length > 0) {
                newErrorArray = [];
            }
            //TODO add functionality to connect to mongo server at the input URL
        } else if (props.dataLoaded) {
            let sprintError = isValidSprint();
            let teamError = isValidTeam();
            
            if(sprintError.length === 0 && teamError.length === 0 ) {
                if(newErrorArray.length > 0) {
                    newErrorArray = [];
                }
                 //TODO add functionality to switch to the next page for story planning
            } else {
                
                if(sprintError.length > 0 ) {
                    Object.assign(newError, {
                        field: 'sprint',
                        errorMessage: sprintError,
                    });
                    newErrorArray.push(newError);
                }
                if(teamError.length > 0) {
                    Object.assign(newError, {
                        field: 'team',
                        errorMessage: teamError,
                    });
                    newErrorArray.push(newError);
                }
            }
        } else {
            Object.assign(newError, {
                field: 'serverUrl',
                errorMessage: 'Please enter a server url'
            });
            newErrorArray.push(newError);
        }
        setError(newErrorArray);
    }
    
    function isValidServerUrl() {
        if(serverUrl.length === 0) {
            return false;
        }
        return true;
    }
    
    function isValidSprint() {
        let regexpChosenSprint = chosenSprint.match(/[^\d.\-]/g);
        if (chosenSprint.length === 0) {
            return 'Please enter a sprint';
        } else if (regexpChosenSprint && regexpChosenSprint.length > 0) {
            return 'Invalid sprint';
        }
        return '';
    }
    
    function isValidTeam() {
        let regexpChosenTeam = chosenSprint.match(/[^A-z\s]/g);
        if (chosenTeam.length === 0) {
            return 'Please enter a team name';
        } else if (regexpChosenTeam && regexpChosenTeam.length > 0) {
            return 'Invalid team name';
        }
        return '';
    }
}

interface IProps {
    dataLoaded: boolean;
}
