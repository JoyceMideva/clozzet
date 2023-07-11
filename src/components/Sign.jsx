function Sign() {
    return(
        <div className="container mx-auto">
            <h2 className="font-extrabold text-5xl">Create An Account</h2>
        <div className="flex ">
            <div className="flex-1 my-5">
                <div>
                    <input className="outline-none py-4 px-2 border-2 border-grey-400 rounded-full w-[50%]" type="text"  placeholder="First Name"/>
                    <input className="outline-none py-4 px-2 border-2 border-grey-400 rounded-full w-[50%]" type="text" name="" id="" placeholder="Last Name" />
                </div>
                <input className="outline-none py-6 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="email" placeholder="Email Address"/>
                <input className="outline-none py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="text"  placeholder="Phone Number"/>
                <input className="outline-none py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="password" placeholder="Password"/>
                <input className="outline-none py-4 px-2 border-2 border-grey-400 rounded-full w-[100%]" type="password" placeholder="Confirm Password" />
                <button className="bg-teal-500 text-lg font-bold text-white py-4 px-2 w-[80%] rounded-full" type="submit">Create Account</button>
                <p>OR</p>
                <button className="py-4 px-2 border-2 border-grey-400 rounded-full w-[70%] text-3xl text-sky-600 font-bold">Sign Up With Google</button>
                <p>Already Have An Account? Log In</p>
            </div>
            <div className="flex-1"></div>
        </div>
        </div>
    )
}
export default Sign