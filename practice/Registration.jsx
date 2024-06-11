import React, { useState } from "react";

const Registration = () => {
  const [student, setStudent] = useState({
    name: "",
    password: "",
    gender: false,
    language: [],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setStudent({
        ...student,
        language: [...student.language, e.target.value],
      });
    } else {
      setStudent({
        ...student,
        language: student.language.filter((item) => item !== e.target.value),
      });
    }
  };
  return (
    <div className="p-4">
      <h1 className="my-4 text-2xl">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name :</label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setStudent({ ...student, password: e.target.value })
            }
          />
        </div>

        <div className="flex gap-x-2 my-2">
          <div>
            <input
              type="checkbox"
              value="java"
              id="java"
              name=""
              onChange={handleCheck}
            />
            <label htmlFor="fav-lang">java</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="python"
              value="Python"
              onChange={handleCheck}
            />
            <label htmlFor="fav-lang">Python</label>
          </div>
          <div>
            <input
              type="checkBox"
              id="react"
              value="React"
              onChange={handleCheck}
            />
            <label htmlFor="fav-lang">React</label>
          </div>
        </div>

        <div className="flex gap-x-4">
          <label htmlFor="Gender">Gender : </label>
          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              required
              value="male"
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="feMale">Female</label>
            <input
              type="radio"
              name="gender"
              value="feMale"
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="other">Other</label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
          </div>
        </div>
        <button className=" my-2 border-2 px-4">REGISTER</button>
      </form>
    </div>
  );
};

export default Registration;
