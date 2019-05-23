import React, { Component } from 'react'

class Timer extends Component {

    parseTime(ms) {
        let milliseconds = ms % 1000
        let seconds = Math.floor((ms / 1000) % 60)
        let minutes = Math.floor((ms / (60 * 1000)) % 60)
        return minutes + ':' + seconds + ':' + milliseconds
    }

    render() {


        return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {this.parseTime(this.props.elapsed)}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <div className='ui bottom attached blue basic button'>
                    Start
                </div>
            </div>
        )
    }
}

export default Timer