import React, { Component } from 'react'
import EditableTimer from "./EditableTimer";

class EditableTimerList extends Component {
    render() {
        return(
            <div id='timers'>
                <EditableTimer />
            </div>
        )
    }
}

export default EditableTimerList