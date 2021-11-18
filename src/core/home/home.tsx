import * as React from 'react';
import './home.scss';
import { GroupSelect } from '../groupSelect/groupSelect';
import { Fade } from '@mui/material';

export function Home() {
    return(
    <Fade in={true}>
        <div className="root">
            <header className="App-header">
                Story Planner Assistant
            </header>
            <GroupSelect/>
        </div>
    </Fade>
  )
}
