import React, { Component } from 'react'
import EditableTimer from "./EditableTimer";

class EditableTimerList extends Component {
    render() {
        return(
            <div id='timers'>
                <EditableTimer
                    title='React'
                    project='Education'
                    elapsed='8986300'
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title='Redux'
                    project='Education'
                    elapsed='3986300'
                    runningSince={null}
                    editFormOpen={true}
                />
            </div>
        )
    }
}

export default EditableTimerList