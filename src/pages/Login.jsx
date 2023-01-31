import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../context/authContext";
import "./login.scss"

const Login = () => {
  const login = useContext (AuthContext );
  const handlelogin=()=>{
    login();
  }
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1> Hello world.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil saepe nulla distinctio possimus aperiam itaque eius reprehenderit aut error, ipsam dolorum veniam eveniet placeat repudiandae quod, labore doloribus ab.</p>

                <span>Create new account</span>
                <Link to='/register'>
                <button>Register</button>
                </Link>

            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                <input type='text' placeholder="Username"/>
                <input type='password' placeholder="Password"/>
                <button onClick={handlelogin}>Login</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login