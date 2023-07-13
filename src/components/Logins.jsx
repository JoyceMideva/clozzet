import google from "../assets/images/google.png"
function Logins() {
    return(
        <div>
            <div className="flex">
                <div className="flex-1 bg-[url('assets/images/login.png')] bg-no-repeat h-[80vh]"></div>
                <div className="flex-1">
            <h2 className="font-bold text-3xl">Login to your Account</h2>
<input className="outline-none my-5 py-6 px-2 border-2 border-grey-400 rounded-full w-[70%]" type="email" placeholder="Email Address" />
<input className="outline-none my-5 py-6 px-2 border-2 border-grey-400 rounded-full w-[70%]" type="password" placeholder="Password" />
<div className="flex item-center gap-10">
<div><input className="outline-none my-5 py-6 px-2 border-2 border-grey-400 rounded-full " type="checkbox"/><label htmlFor=""> Remember Me</label></div>
<p>Forgot Password?</p>
</div>
<button className="bg-teal-500 my-5 text-lg font-bold text-white py-4 px-2 w-[80%] rounded-full">Sign In</button>
<div>
    <div></div>
    <span>OR</span>
    <div></div>
</div>
<div className="flex gap-4 items-center text-3xl text-sky-600 font-bold">
    <img width={50} src={google} alt="" />
    Log In With Google
    </div>
<p>Dont Have An Account Yet? Sign Up Free</p>
                </div>
            </div>
        </div>

    )
}
export default Logins