
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {

  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => {
          dispatch(login({name: "Rami", age: 34, email: "ramilorca.b@gmail.com" }));
          }}
        >
          Login
        </button>

        <button 
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
    </div>
  )
}

export default Login;