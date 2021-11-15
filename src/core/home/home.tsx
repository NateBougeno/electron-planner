import './home.scss';
import { GroupSelect } from '../groupSelect/groupSelect';

export function Home() {
    return(
    <div className="root">
        <header className="App-header">
            Story Planner Assistant
        </header>
        <GroupSelect/>
    </div>
  )
}
