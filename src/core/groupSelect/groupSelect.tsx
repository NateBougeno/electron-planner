import './groupSelect.scss';
import { SprintSelect } from './fields/sprintSelect/sprintSelect';
import { TeamSelect } from './fields/teamSelect/teamSelect';

export function GroupSelect () {
    return(
        <div className="groupSelectRoot" >
            <h2 className="title" >Select Sprint and Team</h2>
            <SprintSelect options={[]}/>
            <TeamSelect options={[]}/>
        </div>
    );
}

interface IProps {
    data: any;
}
