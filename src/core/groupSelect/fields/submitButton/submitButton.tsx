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
    
    //HTML return for button
    return (
        <div className="submitButtonContainer">
            <Button
                variant="contained"
                color="success"
                className="submitButton"
                onClick={onClick}
            >
                {buttonLabel}
            </Button>
        </div>
    )
    
    //button is clicked
    function onClick() {
        //create variables to handle errors with group select stuff
        let newErrorArray: any = [...error];
        let newError = {};
        
        //they click the button but there's no data and mongo server URL is valid
        if(!props.dataLoaded && isValidServerUrl()) {
            if(newErrorArray.length > 0) {
                newErrorArray = [];
            }
            //TODO add functionality to connect to mongo server at the input URL
        } else if (props.dataLoaded) {//mongo data loaded, move on to sprint/team select
            //assign errors from validation functions
            let sprintError = isValidSprint();
            let teamError = isValidTeam();
            
            //no errors with sprint or team strings, move on
            if(sprintError.length === 0 && teamError.length === 0 ) {
                if(newErrorArray.length > 0) {
                    newErrorArray = [];
                }
                 //TODO add functionality to switch to the next page for story planning
            } else {
                if(sprintError.length > 0 ) {//error with sprint string
                    //assign to error object and add to array
                    Object.assign(newError, {
                        field: 'sprint',
                        errorMessage: sprintError,
                    });
                    newErrorArray.push(newError);
                }
                if(teamError.length > 0) {//error with team string
                    //assign to error object, move on
                    Object.assign(newError, {
                        field: 'team',
                        errorMessage: teamError,
                    });
                    newErrorArray.push(newError);
                }
            }
        } else { //Mongo server URL is invalid, create error and add to array
            //assign to error object, move on
            Object.assign(newError, {
                field: 'serverUrl',
                errorMessage: 'Please enter a server url'
            });
            newErrorArray.push(newError);
        }
        //set the new collection of errors to the error atom
        setError(newErrorArray);
    }
    
    function isValidServerUrl() {
        //they have to enter something for server url
        if(serverUrl.length === 0) {
            return false;
        }
        return true;
    }
    
    function isValidSprint() {
        //regexp to collect all characters that don't go in a sprint string
        let regexpChosenSprint = chosenSprint.match(/[^\d.\-]/g);
        
        if (chosenSprint.length === 0) {//they have to enter a sprint
            return 'Please enter a sprint';
        } else if (regexpChosenSprint && regexpChosenSprint.length > 0) {//sprint must roughly be in format of 00.0-0
            return 'Invalid sprint';
        }
        return ''; //no errors
    }
    
    function isValidTeam() {
        //regexp to collect all characters that don't go in a team name
        let regexpChosenTeam = chosenSprint.match(/[^A-z\s]/g);
        
        if (chosenTeam.length === 0) { //they have to enter a team name
            return 'Please enter a team name';
        } else if (regexpChosenTeam && regexpChosenTeam.length > 0) { //team name must be only alphabetical characters and spaces
            return 'Invalid team name';
        }
        return ''; //no errors
    }
}

interface IProps {
    dataLoaded: boolean;
}
