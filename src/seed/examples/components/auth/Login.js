/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { postData, usePost } from "seed/api";
import View from "seed/examples/views/auth/Login";

const Login = ({ history }) => {
  
  const onSubmit = (values) => {
    const {email, password} = values

    postData('/auth/login/', {email, password}).then(data => {

      localStorage.setItem('token', data.key)
      localStorage.setItem('id', data.user)

      history.replace('/')

    })

  }

  return <View
    error={null}
    onSubmit={onSubmit}
  />

}

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default Login;