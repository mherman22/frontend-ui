import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../common components/FormInput';

function Registration() {

  const [values, setValues] = useState({
    firstName: "", lastName: "", username: "",
    emailAddress: "", birthDate: "", password: "", confirmPassword: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }
  const handleValueChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const inputs = [
    {
      id: 1, name: "firstName", type: "text", placeholder: "First-Name  Last-Name",
      label: "Full Name",
    },
    {
      id: 4, name: "emailAddress", type: "email", placeholder: "Email Address",
      label: "Email Address",
    },
    {
      id: 6, name: "password", type: "password", placeholder: "Password",
      label: "Password",
    },
    {
      id: 7, name: "confirmPassword", type: "password", placeholder: "Confirm Password",
      label: "Confirm Password",
    }
  ]

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            {inputs.map(input => (
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
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Registration;
