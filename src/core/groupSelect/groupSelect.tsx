import * as React from 'react';
import './groupSelect.scss';
import { SubmitButton, CloseButton, TeamSelect, SprintSelect, ServerUrlField } from './fields';
import { serverUrlState } from '../../util';
import { useRecoilState } from 'recoil';

export function GroupSelect ({...props}: IProps) {
    // eslint-disable-next-line
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const [serverUrl] = useRecoilState(serverUrlState);
    
    console.log(serverUrl);
    
    return(
        <div className="groupSelectRoot" >
            {dataLoaded && 
                <>
                    <h2 className="title" >Select Sprint and Team</h2>
                    <SprintSelect options={[]}/>
                    <TeamSelect options={[]}/> 
                </>
            }
            {!dataLoaded && 
                <>
                    <h2 className="title" >Enter MongoDB Server URL</h2>
                    <ServerUrlField />
                </>
            }
            <div className="buttonContainer">
                <CloseButton/>
                <SubmitButton dataLoaded={dataLoaded}/>
            </div>
        </div>
    );
}

interface IProps {
    data?: any;
}
