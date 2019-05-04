import React, {Component, Fragment} from 'react'
import { Button, Checkbox, Form, Modal, Header, Image, } from 'semantic-ui-react'

class UserLogin extends Component {

    state = {
        username: "",
        password: "",
    }

    onTypingChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onLogIn(this.state.username, this.state.password)
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
                         
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name="password"/>
                    </Form.Field>
                    <Button type='submit'>Login</Button>
                </Form>
                    <Modal trigger={<label>I Don't have account yet</label>}>
                        <Modal.Header>Create new account</Modal.Header>
                        <Modal.Content image>
                        {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
                        <Modal.Description>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Username' placeholder='username' />
                                <Form.Input fluid label='Password' placeholder='password' />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='First Name' placeholder='First Name' />
                                <Form.Input fluid label='Last Name' placeholder='Last Name' />
                            </Form.Group>
                            <Form.Field>
                                <label>E-mail</label>
                                <input placeholder='email' />
                            </Form.Field>
                            <Button type='submit'>Create Account</Button>
                        </Form>
                        </Modal.Description>
                        </Modal.Content>
                    </Modal>
            </Fragment>
        )
    }
}

export default UserLogin;