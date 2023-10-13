
import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  //const [passwordShown, setPasswordShown] = useState(false);
  //console.log({ username, password });
  //const onSubmit = data => console.log(data);

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    //'Authorization': 'JWT fefege...'
  };

  //   const togglePassword = () => {
  //     setPasswordShown(!passwordShown);
  //   };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    const user = {
      username: username,
      password: password,
      //   grant_type: "password",
      //   client_id: "DAMMORE_WEB",
      //   is_token_base: 1,

      //headers : {"Content-Type" : "application/json"}
    };
    //console.log(user);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", user, {
        //headers: headers,
      })
      .then(function (response) {
        console.log(response);
        if ((response.data = "1")) {
          //Navigate("/hedaer");
          console.log("success");
        }
        //Navigate ("/hedaer");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Login Form with Floating Labels
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="on"
                    id="email"
                    name="email"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
