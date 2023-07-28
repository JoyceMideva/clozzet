import { useState } from "react"
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import google from "../assets/images/google.png"
function Logins() {
    const [show, setShow] = useState(false);
    const [inputField,setInputField ]=useState({})
    const [inputError,setInputError]=useState({})
    const handleChange = (e) => {
        setInputField({...inputField, [e.target.name]: e.target.value });
      };
      const [submit,setSubmit]=useState(false)
      function handleLogin(e) {
        e.preventDefault();
        const error = {};
        (inputField.emailAddress === undefined || inputField.emailAddress==="" )&&
          (error.emailAddress = "Please enter your email address");
        (inputField.userPassword === undefined || inputField.userPassword==="" ) &&
          (error.userPassword = "Please enter your password");
        setInputError(error);
        setSubmit(true)
        console.log(error);
      }
    return(
        <div>
            <div className="flex mx-3 gap-11 py-10">
                <div className="flex-1 bg-[url('assets/images/login.png')] bg-cover  bg-no-repeat h-[80vh]"></div>
                <div className="flex-1">
            <h2 className="font-bold text-3xl">Login to your Account</h2>
            {inputError.emailAddress&& (
                <p className="text-red-500">{inputError.emailAddress}</p>
              )}
<input onChange={(e)=>handleChange(e)} name="emailAddress" className="outline-none my-5 py-6 px-2 border-2 border-grey-400 rounded-full w-[70%]" type="email" placeholder="Email Address" />
{inputError.userPassword && (
                <p className="text-red-500">{inputError.userPassword}</p>
              )}
<div onClick={() => setShow((prev) => !prev)} className="  flex items-center  my-5 py-6 px-2 border-2 border-grey-400 rounded-full w-[70%]">
<input onChange={(e)=>handleChange(e)} name="userPassword" className="outline-none  w-[70%]" type={show ? "text" : "password"} placeholder="Password" />
              {show ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
              </div>
<div className="flex item-center justify-between gap-10">
<div><input className="outline-none my-5 py-6 px-2 border-2 border-grey-400 rounded-full " type="checkbox"/><label htmlFor=""> Remember Me</label></div>
<p>Forgot Password?</p>
</div>
<button onClick={(e) => handleLogin(e)} className="bg-teal-500 my-5 text-lg font-bold text-white py-4 px-2 w-[80%] rounded-full">Sign In</button>
<div className=" flex items-center my-[1em]">
    <div className="flex-grow h-px bg-slate-400"></div>
    <span className="flex-shrink font-bold">OR</span>
    <div className="flex-grow h-px bg-slate-400"></div>
</div>
<div className="flex gap-4 items-center text-3xl text-sky-600 font-bold">
    <img width={50} src={google} alt="" />
    Log In With Google
    </div>
<p className="text-xl my-2">Dont Have An Account Yet? Sign Up Free</p>
                </div>
            </div>
        </div>

    )
}
export default Logins