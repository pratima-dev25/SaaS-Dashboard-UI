import { useState } from "react";

function Login({ setIsLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    {/* form submission handling function */}
    let handleSubmit = (e) =>{
        
        e.preventDefault();

        if(email === "" || password === ""){
            alert("please fill all fields");
        }

        setIsLogin(true);

    }


    return(
        <div className=" min-h-screen bg-gray-900 flex justify-center items-center">

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded w-80">
                
                {/* heading */}
                <h1 className="text-2xl font-bold text-center mb-5">Xeno AutoLab</h1>

                {/* email */}
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2 mb-3" />

                {/* password */}
                <input type={showPassword? "text": "password"} placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full p-2 mb-3" />

                {/* show password */}
                <button type="button" className="text-blue-500 mb-4" onClick={() => setShowPassword(!showPassword)}>{showPassword? "Hide Password": "Show Password"}</button>

                {/* submit */}
                <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">Login</button>

            </form>

        </div>
    );
}

export default Login;