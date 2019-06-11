import React, { Component } from 'react'
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

class TimersDashboard extends Component {
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: 123,
                elapsed: 5456099,
                runningSince: Date.now()
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: 1235,
                elapsed: 1273998,
                runningSince: null
            }
        ]
    }

    render() {
        return(
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={this.state.timers}
                    />
                    <ToggleableTimerForm isOpen={false} />
                </div>
            </div>
        )
    }
}

export default TimersDashboard