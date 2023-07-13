import google from "../assets/images/google.png"
function Sign() {
    return(
        <div className="container mx-auto">
            <h2 className="font-extrabold text-5xl">Create An Account</h2>
        <div className="flex gap-11 py-10 ">
            <div className="flex-1">
                <div className="flex gap-4">
                    <input className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[50%]" type="text"  placeholder="First Name"/>
                    <input className="outline-none  my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[50%]" type="text" name="" id="" placeholder="Last Name" />
                </div>
                <input className="outline-none my-5 py-6 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="email" placeholder="Email Address"/>
                <input className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="text"  placeholder="Phone Number"/>
                <input className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="password" placeholder="Password"/>
                <input className="outline-none  my-5 py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="password" placeholder="Confirm Password" />
                <button className="bg-teal-500 my-5 text-lg font-bold text-white py-4 px-2 w-[80%] rounded-full" type="submit">Create Account</button>
                <p className="my-5">OR</p>
                <button className="py-4 px-2 my-5 border-2 border-grey-400 gap-4 flex items-center rounded-full w-[70%] text-3xl text-sky-600 font-bold"> <img width={50} src={google} alt="" /> Sign Up With Google</button>
                <p>Already Have An Account? Log In</p>
            </div>
            <div className="flex-1 bg-[url('assets/images/signup.png')] bg-no-repeat"></div>
        </div>
        </div>
    )
}
export default Sign