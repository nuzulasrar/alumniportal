import React, { Component, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const Logout = () => {

  sessionStorage.clear();
  return <Navigate replace to="/login" />;
};

export default Logout;
