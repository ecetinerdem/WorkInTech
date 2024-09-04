import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialForm = {
  email: '',
  password: '',
  terms: false,
};

const initialError = {
  email: false,
  password: false,
  terms: false,
};

const errorMessages = {
  email: 'Please enter a valid email address',
  password: 'Password must be at least 4 characters long',
  terms: 'You must agree to the terms and conditions',
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialError);
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (
      validateEmail(form.email) &&
      form.password.trim().length >= 4 &&
      form.terms
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === 'checkbox' ? event.target.checked : value;
    setForm({ ...form, [name]: value });
    validateInput(name, value);
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validateEmail = (email) => {
    return emailRegex.test(email.toLowerCase().trim());
  };

  const validateInput = (fieldName, fieldValue) => {
    let newErrors = { ...errors };

    if (fieldName === 'email') {
      newErrors.email = !validateEmail(fieldValue);
    } else if (fieldName === 'password') {
      newErrors.password = fieldValue.length < 4;
    } else if (fieldName === 'terms') {
      newErrors.terms = !fieldValue;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.terms) {
      setErrors({ ...errors, terms: true });
      return;
    }
    if (!isValid) return;

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((res) => {
        const user = res.data.find(
          (item) => item.password === form.password && item.email === form.email
        );
        if (user) {
          setForm(initialForm);
          history.push('/main');
        } else {
          history.push('/error');
        }
      });
  };

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
          value={form.email}
          invalid={errors.email}
        />
        {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={form.password}
          invalid={errors.password}
        />
        {errors.password && (
          <FormFeedback>{errorMessages.password}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup check>
        <Input
          id="terms"
          name="terms"
          checked={form.terms}
          type="checkbox"
          onChange={handleChange}
        />{' '}
        <Label htmlFor="terms" check>
          I agree to terms of service and privacy policy
        </Label>
        {errors.terms && <FormFeedback>{errorMessages.terms}</FormFeedback>}
      </FormGroup>
      <FormGroup className="text-center p-4">
        <Button disabled={!isValid} color="primary">
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}
