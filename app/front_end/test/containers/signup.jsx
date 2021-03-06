import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { authenticate } from '../../shared/modules/auth/actions';

class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      zipcode: '',
      phone: '',
      confirm_password: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password, firstname, lastname, zipcode, phone, password_confirmation } = this.state;
    const csrfToken = document.getElementsByTagName('meta')['csrf-token'].getAttribute('content')

    return axios({
      url: '/api/v1/auth',
      method: 'POST',
      //headers: {'X-CSRFToken': csrfToken},
      data: { email, password }
    }).then(response => {
      console.log(`response from signup is ${response}`);
    }).catch(error => {
      console.log(`error from signup is ${error}`);
    })
  }

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />
    }
    return (
      <div className="container-fluid col-6 col-sm-6">
        <Form onSubmit={e => {this.handleSubmit(e)}}>
          <FormGroup>
            <Label for="signupEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="signupEmail"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="firstName"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastName"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupPhone">Phone</Label>
            <Input
              type="tel"
              name="phone"
              id="signupPhone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="zipCode">Zip Code</Label>
            <Input
              type="number"
              name="phone"
              id="zipCode"
              placeholder="Zip Code"
              value={this.state.zipcode}
              onChange={(e) => this.setState({ zipcode: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupPassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="signupPassword"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="passwordConfirm">Confirm Password</Label>
            <Input
              type="password"
              name="confirm_password"
              id="passwordConfirm"
              placeholder="Confirm Password"
              value={this.state.password_confirmation}
              onChange={(e) => this.setState({ password_confirmation: e.target.value })}
            />
          </FormGroup>
          <FormGroup className="row justify-content-center">
            <Button type="submit" color="primary">Submit</Button>
          </FormGroup>
          <FormGroup className="row justify-content-center">
            <Link to="/login">Already have an accout? Go to Login</Link>
          </FormGroup>
        </Form>
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

export default connect(mapStateToProps)(SignupPage);
