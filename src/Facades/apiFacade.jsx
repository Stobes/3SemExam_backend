import SERVER_URL from "../constant";
const URL = SERVER_URL;
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const apiFacade = () => {
  const login = async (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    const res = await fetch(URL + "/api/login", options);
    const res_1 = await handleHttpErrors(res);
    console.log(JSON.stringify(res_1));
    setToken(res_1.token);
    //Sets user in localstorage for usage later
    setUser(res_1.username, res_1.roles);
  };

  const setUser = (username, roles) => {
    const user = { username, roles };
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const loggedIn = () => {
    return getToken() != null;
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    window.location.reload()
  };

  const fetchData = async () => {
    const options = makeOptions("GET", true); //True add's the token
    const res = await fetch(URL + "/api/info/user", options);
    return handleHttpErrors(res);
  };
  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setUser,
    getUser,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
  };
};

export default apiFacade();
