import React, {Component, Fragment} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class UserLogin extends Component {

    state = {
        username: "",
        password: "",
    }

    onTypingChange = (e, { name, value }) => {
        // debugger
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onLogin(this.state.username, this.state.password)
        // e.target.reset
    }

    render(){
        return (
            <Fragment>
                <Form onChange={this.onTypingChange} onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username'
                        name="username"
                        errorMessage={!this.state.username ? "This field can't be blank!" : null} 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name="password"/>
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label= "I Don't have account yet" />
                    </Form.Field>
                    <Button type='submit'>Login</Button>
                </Form>
            </Fragment>
        )
    }
}

export default UserLogin;