import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GetData from "./getData";

const SingUp = () => {
  const Move_to = useNavigate();

  const [user, setUser] = useState({
    Userid  : "",
    Fname   : "",
    Lname   : "",
    MoNum   : "",
    country : "",
    Password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    
    const { Userid, Fname, Lname, MoNum, country, Password } = user;

    axios.post("http://localhost:4000/enterData/register", {
      Userid,
      Fname,
      Lname,
      MoNum,
      country,
      Password,
    });
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    Move_to("/LoginForm");
  };

  return (
    <div>
      <h1 align="center">Sign Up Form</h1>
      <form method="POST">
        <h4 align="center">
        <label><h3> Userid</h3></label>
        <br />
        <input
          type="Userid"
          name="Userid"
          placeholder="Userid"
          id="Userid"
          value={user.Userid}
          onChange={handleInputs}
        />
        <br />

        <br />
        <label><h3>Fname</h3></label>
        <br />

        <input
          type="Fname"
          name="Fname"
          placeholder="Fname"
          id="Fname"
          value={user.Fname}
          onChange={handleInputs}
        />
        <br />

        <br />
        <label><h3>Lname</h3></label>
        <br />

        <input
          type="Lname"
          name="Lname"
          placeholder="Lname"
          id="Lname"
          value={user.Lname}
          onChange={handleInputs}
        />
        <br />

        <br />
        <label><h3>MoNum</h3></label>
        <br />
        <input
          type="Number"
          name="MoNum"
          placeholder="MoNum"
          id="MoNum"
          value={user.MoNum}
          onChange={handleInputs}
        />
        <br />

        <br />
        <label><h3>country</h3></label>
        <br />
        <input
          type="country"
          name="country"
          placeholder="country"
          id="country"
          value={user.country}
          onChange={handleInputs}
        />
        <br />

        <br />
        <label><h3>Password</h3></label>
        <br />
        <input
          type="Password"
          name="Password"
          placeholder="Password"
          id="Password"
          value={user.Password}
          onChange={handleInputs}
        />
        <br />
        <br />
        <button onClick={PostData} className="btn btn-primary"><h6>Submit</h6></button>
        {/* <button onClick={DataList}>Submit In List</button> */}
      </h4>
      </form>
      <div align="center">
        <button onClick={() => LogOut()} className="btn btn-primary"><h6>LogOut</h6></button>
      </div>
      <hr />
      <GetData />
    </div>
  );
};

export default SingUp;
