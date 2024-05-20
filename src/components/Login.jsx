import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './common components/FormInput';

function Login() {

  const [values, setValues] = useState({
    username: "", password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleValueChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const LoginInputs = [
    {
      id: 1, name: "email", type: "email", placeholder: "email address",
      label: "Email Address",
    },
    {
      id: 2, name: "password", type: "password", placeholder: "Password",
      label: "Password",
    },
  ]

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            {LoginInputs.map(input => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleValueChange}
              />
            ))}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create User Account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
