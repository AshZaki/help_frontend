import React, {Component, Fragment} from 'react'
import { Button, Header } from 'semantic-ui-react'

class RoomType extends Component {
    render(){
        return (
            <Fragment>
                <Header size='huge'>Select Room type</Header>
                <Button.Group size='massive'>
                    <Button>VOTE</Button>
                    <Button.Or />
                    <Button>RANDOM</Button>
                </Button.Group>
            </Fragment>
        )
    }
}

export default RoomType;