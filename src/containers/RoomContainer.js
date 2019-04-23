import React, {Component, Fragment} from 'react'
import RoomAnswer from '../components/RoomAnswer'
import Random from '../components/Random'
import Vote from '../components/Vote'
import Result from '../components/Result'

class RoomContainer extends Component {
    render(){
        return (
            <Fragment>
                <RoomAnswer />
                <Random />
                <Vote />
                <Result />
            </Fragment>
        )
    }
}

export default RoomContainer;