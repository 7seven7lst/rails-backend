import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { authenticate } from '../../shared/modules/auth/actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.dispatch(authenticate(email, password));
  }

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />
    }
    return (
      <div className="container" style={{'height': '100vh'}}>
        <div className="row align-items-center justify-content-center" style={{'height': '100%'}}>
          <Form className="col-sm-4 align-self-center align-items-center" onSubmit={e => {this.handleSubmit(e)}}>
            <FormText>Login</FormText>
            <FormGroup>
              <Label for="loginEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="loginEmail"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="loginPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="loginPassword"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </FormGroup>
            <FormGroup className="row justify-content-center">
              <Button type="submit" color="primary">Submit</Button>
            </FormGroup>
            <FormGroup className="row justify-content-center">
              <Link to="/signup">Don't have an account yet? Go to signup</Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  const { loading, isAuthenticated } = auth;
  return {
    loading,
    isAuthenticated
  };
}

export default connect(mapStateToProps)(LoginPage);
