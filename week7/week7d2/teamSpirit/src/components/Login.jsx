import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Login() {
  const [info, setInfo] = useState({ email: '', password: '' });
  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target; // Corrected to 'name' instead of 'email'
    setInfo({ ...info, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((response) => {
        const user = response.data.find(
          (user) => user.email === info.email && user.password === info.password
        );
        if (user) {
          history.push('/main');
        } else {
          history.push('/error');
        }
      })
      .catch((error) => {
        history.push('/error');
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={info.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={info.password}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
}
