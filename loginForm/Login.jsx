import React, { useState } from "react";
import InputField from "./InputField";

const Login = () => {
  const [std, setStd] = useState({
    userName: "",
    password: "",
    laguage: "",
    qual: [],
  });

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setStd({ ...std, qual: [...std.qual, e.target.value] });
    } else {
      setStd({
        ...std,
        qual: std.qual.filter((item) => item !== e.target.value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("std", std);
  };

  return (
    <div className="p-4 m-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl my-2">Login Form</h1>

        <input
          type="text"
          placeholder=" Enter Username"
          onChange={(e) => setStd({ ...std, userName: e.target.value })}
        />

        <input
          type="password"
          placeholder=" Enter Password"
          onChange={(e) => setStd({ ...std, password: e.target.value })}
        />

        <div className="my-4 flex items-center gap-x-4">
          <div>
            <label htmlFor="subject"> BCS </label>
            <input
              type="checkbox"
              id="subject"
              name="subject"
              value="bcs"
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <label htmlFor="subject2"> SE </label>
            <input
              type="checkbox"
              id="subject2"
              name="subject2"
              value="se"
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <label htmlFor="subject3"> IT </label>
            <input
              type="checkbox"
              id="subject3"
              name="subject3"
              value="it"
              onChange={handleCheckbox}
            />
          </div>
        </div>

        <div>
          <p>Please select your favorite Web language:</p> {" "}
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            onChange={(e) => setStd({ ...std, laguage: e.target.value })}
          />
            <label htmlFor="html">HTML</label>
          <br /> {" "}
          <input
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
            onChange={(e) => setStd({ ...std, laguage: e.target.value })}
          />
            <label htmlFor="css">CSS</label>
          <br /> {" "}
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
            onChange={(e) => setStd({ ...std, laguage: e.target.value })}
          />
            <label htmlFor="javascript">JavaScript</label>
        </div>

        <button type="submit" className="my-4 border-2 px-6 py-1 text-base">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
