import React, {Component, Fragment} from 'react'
import RoomType from '../components/RoomType'
import RoomVoteInfo from '../components/RoomVoteInfo'

class RoomCreate extends Component {
    render(){
        return (
            <Fragment>
                <RoomType />
                <RoomVoteInfo />
            </Fragment>
        )
    }
}

export default RoomCreate;