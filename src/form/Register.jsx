import React, { useEffect, useState } from "react";

const Register = () => {
  const [std, setStd] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [stdLoc, setStdLoc] = useState([]);

  const [stdArr, setStdArr] = useState([]);

  const [message, setMessage] = useState({
    success: false,
    message: "",
  });

  useEffect(() => {
    setStdLoc(JSON.parse(localStorage.getItem("student")));
  }, [std]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArr = [...stdArr, std];
    setStdArr(newArr);
    localStorage.setItem("student", JSON.stringify(newArr));

    setMessage({
      success: true,
      message: "Your Data has been saved.",
    });
    setStd({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="p-4 m-4">
      {message.success ? <p>Message! {message.message}</p> : null}
      <h2 className="text-2xl my-2">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name:</label>
        <br />
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={std.name}
          onChange={(e) => setStd({ ...std, name: e.target.value })}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={std.email}
          onChange={(e) => setStd({ ...std, email: e.target.value })}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={std.password}
          onChange={(e) => setStd({ ...std, password: e.target.value })}
        />
        <br />

        <label htmlFor="confirm_password">Confirm Password:</label>
        <br />
        <input type="password" id="confirm_password" name="confirm_password" />
        <br />
        <br />

        <label htmlFor="birthdate">Date of Birth:</label>
        <br />
        <input type="date" id="birthdate" name="birthdate" />
        <br />
        <br />

        <label htmlFor="gender">Gender:</label>
        <br />
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Other</label>
        <br />
        <br />

        <div className="flex gap-x-2">
          <input type="checkbox" id="java" name="java" value="Java" />
          <label htmlFor="java">Java</label>
          <br />

          <input type="checkbox" id="python" name="python" value="Python" />
          <label htmlFor="python">Python</label>
          <br />

          <input
            type="checkbox"
            id="javascript"
            name="javascript"
            value="JavaScript"
          />
          <label htmlFor="javascript">JavaScript</label>
          <br />
        </div>

        <label htmlFor="country">Country:</label>
        <br />
        <select id="country" name="country">
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <br />
        <br />

        <button type="submit">Register</button>
      </form>

      <table className="mt-4 table-fixed">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {stdLoc.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Register;
