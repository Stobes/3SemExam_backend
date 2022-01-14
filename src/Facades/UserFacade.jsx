/* eslint-disable no-unused-vars */
import apiFacade from "./apiFacade";
import SERVER_URL from "../constant";
import { useState } from "react";
const URL = SERVER_URL;

const getAllWashers = (test) => {
  const options = makeOptions("GET");
  return fetch(URL + "/api/user/washers", options)
  .then(res => handleHttpErrors(res))
  .then((data) => test(data))
}

const getAllBookings = (username, test) => {
  const options = makeOptions("GET");
  return fetch(URL + "/api/user/bookings/" + username, options)
  .then(res => handleHttpErrors(res))
  .then((data) => test(data))
}

const createWasher = (body) => {
  const options = makeOptions("POST", body);
  return fetch(URL + "/api/user/addwasher", options)
  .then(res => handleHttpErrors(res))
}

function addArrangement(body) {
  const options = makeOptions("POST", body);
  return fetch(URL + "/api/user/addarrangement", options)
  .then(res => handleHttpErrors);
}

function createUser(body) {
  const options = makeOptions("POST", body);
  return fetch(URL + "/api/user/adduser", options)
  .then(res => handleHttpErrors(res));
}

function addFunds(body) {
  const options = makeOptions("POST", body);
  return fetch(URL + "/api/user/addfunds", options)
  .then((res) => handleHttpErrors);
}

function getArrangements(userName, test) {
  const options = makeOptions("GET");
  return fetch(URL + "/api/user/" + userName, options)
  .then(res => handleHttpErrors(res))
  .then((data) => test(data))
}

function getUserInfo(userName) {
  const options = makeOptions("GET");
  return fetch(URL + "/api/user/userinfo/" + userName, options)
  .then(res => handleHttpErrors(res))
  //.then((data) => test(data))
}

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const getUsername = () => {
  const token = apiFacade.getToken();
  if (token != null) {
    const payloadBase64 = apiFacade.getToken().split(".")[1];
    const decodedClaims = JSON.parse(window.atob(payloadBase64));
    const username = decodedClaims.username;
    return username;
  } else return "";
};

const userFacade = {
  getAllWashers,
  getAllBookings,
  getUsername,
  createWasher
};

export default userFacade;
