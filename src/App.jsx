import { useState, useRef } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  // const [username,setUsername]=useState("");
  // const usernameRef=useRef() on using this useRef changes will not
  // reflect as soon as changes is  taking place as in case of useState

  //Defining input state for each of the input may become hectic
  // therefore try to use as object

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-15 characters and shouldn't have any special characters",
      label: "Username",
      required:true,
      pattern:"^[A-Za-z0-9]{3,15}$",

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"Enter Valid Email Address",
      label: "Email",
      required:true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage:"",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should contains 6-14 character having atleast 1 number,1 Uppercase ,1 Lowercase, 1 special Character",
      label: "Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$`,
      required:true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"Password should be as same as above",
      label: "Confirm Password",
      pattern:values.password,
      required:true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data=new FormData(e.target)
    // console.log(data);
    // to access data we will be using Object method as below

    // console.log(Object.fromEntries(data.entries())); this was use for accessing using useRef
    // console.log("Showing the values");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };
  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
