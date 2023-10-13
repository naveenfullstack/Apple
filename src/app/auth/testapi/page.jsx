"use client";
import axios from "axios";

function Page() {
  const handleLogin = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        //headers: headers,
      })
      .then(function (response) {
        console.log(response);
        if (response) {
          console.log("success");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>123</h1>
      <div className="relative">
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white rounded-md px-2 py-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Page;
