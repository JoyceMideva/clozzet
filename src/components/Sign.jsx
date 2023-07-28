import { useState } from "react";
import google from "../assets/images/google.png";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { googleAuth } from "../auth";

function Sign() {
  const [show, setShow] = useState(false);
  const [formData, setFormdata] = useState({});
  const [formErrors, setFormErrors] = useState({});
const [currentUser,setCurrentUser]=useState({})


  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSignup(e) {
    e.preventDefault();
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please enter your First Name");
    (formData.lastName === undefined|| formData.lastName==="" )&&
      (errors.lastName = "Please enter your last Name");
    (formData.emailAddress === undefined || formData.emailAddress==="" )&&
      (errors.emailAddress = "Please enter your email address");
    (formData.userNumber === undefined || formData.userNumber===""  )&&
      (errors.userNumber = "Please enter your phone number");
    (formData.userPassword === undefined || formData.userPassword==="" ) &&
      (errors.userPassword = "Please enter your password");
    setFormErrors(errors);
    console.log(errors);
  }

  function handleGoogleAuth() {
  googleAuth()
  }

  return (
    <div className="">
      <h2 className="font-extrabold text-5xl ">Create An Account</h2>
      <div className="flex gap-11 py-10 ">
        <div className="flex-1 mx-7">
          <div className="flex gap-4">
            <div className="flex 1">
              {formErrors.firstName && (
                <p className="text-red-500">{formErrors.firstName}</p>
              )}
              <input
                onChange={(e) => handleChange(e)}
                className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[100] "
                type="text"
                value={formData.firstName}
                placeholder="First Name"
                name="firstName"
              />
            </div>
            <div className="flex 1">
              {formErrors.lastName && (
                <p className="text-red-500">{formErrors.lastName}</p>
              )}
              <input
                onChange={(e) => handleChange(e)}
                className="outline-none  my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]"
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
              />
            </div>
          </div>
          {formErrors.emailAddress && (
            <p className="text-red-500">{formErrors.emailAddress}</p>
          )}
          <input
            onChange={(e) => handleChange(e)}
            className="outline-none my-5 py-6 px-2 border-2 border-grey-400 rounded-full w-[100%]"
            type="email"
            placeholder="Email Address"
            name="emailAddress"
          />
          {formErrors.userNumber && (
            <p className="text-red-500">{formErrors.userNumber}</p>
          )}
          <input
            onChange={(e) => handleChange(e)}
            className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]"
            type="text"
            placeholder="Phone Number"
            name="userNumber"
          />
          {formErrors.userPassword && (
            <p className="text-red-500">{formErrors.userPassword}</p>
          )}
          <div className="border-2 my-5 py-4 px-2 border-grey-200 rounded-full flex items-center">
            <input
              onChange={(e) => handleChange(e)}
              className="outline-none w-[100%]"
              type={show ? "text" : "password"}
              placeholder="Password"
              name="userPassword"
            />
            <div onClick={() => setShow((prev) => !prev)}>
              {show ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
            </div>
          </div>
          <div className="border-2 my-5 py-4 px-2 rounded-full flex items-center">
            <input
              className="outline-none   w-[100%]"
              type="password"
              placeholder="Confirm Password"
              name="Confirm Password"
            />
          </div>
          <button
            onClick={(e) => handleSignup(e)}
            className="bg-teal-500 my-5 text-lg font-bold text-white py-4 px-2 w-[80%] rounded-full"
            type="submit"
          >
            Create Account
          </button>
          <div className=" flex items-center my-[1em]">
            <div className="flex-grow h-px bg-slate-400"></div>
            <span className="flex-shrink font-bold">OR</span>
            <div className="flex-grow h-px bg-slate-400"></div>
          </div>
          <button onClick={handleGoogleAuth} className="py-4 px-2 my-5 border-2 border-grey-400 gap-4 flex items-center rounded-full w-[70%] text-3xl text-sky-600 font-bold">
            <img width={50} src={google} alt="" /> Sign In With Google
          </button>
          <p className="text-xl">Already Have An Account? Log In</p>
        </div>
        <div className="flex-1 bg-[url('assets/images/signup.png')] bg-cover bg-left  w-[50%] bg-no-repeat"></div>
      </div>
    </div>
  );
}
export default Sign;
