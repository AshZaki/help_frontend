import React, {Component, Fragment} from 'react'
import { Button, Header } from 'semantic-ui-react'
import RoomVoteInfo from './RoomVoteInfo'
import RoomRandomInfo from './RoomRandomInfo'


class RoomType extends Component {
    
    state = {
        clicked: null,
        showPage: null,
        roomType: true
    }

    handleVoteButton = () => {
        console.log("click")
        this.setState ({
            clicked: true,
            showPage: "Vote",
            roomType: false
        })
    }

    handleRandomButton = () => {
        console.log("click!")
        this.setState ({
            clicked: true,
            showPage: "Random",
            roomType: false
        })
    }

    render(){
        return (
            <Fragment>
                <Header size='huge'>Select Room type</Header>
                <Button.Group size='massive'>
                    <Button onClick={this.handleVoteButton}>
                        VOTE  
                    </Button>
                    <Button.Or />
                    <Button onClick={this.handleRandomButton}>
                        RANDOM
                    </Button>
                </Button.Group>

                {this.state.clicked === true && this.state.showPage === "Vote" ?
                    <RoomVoteInfo/>
                : null
                }
                {this.state.clicked === true && this.state.showPage === "Random" ?
                    <RoomRandomInfo />
                :null
                }
            </Fragment>
        )
    }
}
//make sure to move all the whole page to the middle

export default RoomType;