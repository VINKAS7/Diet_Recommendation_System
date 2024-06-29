import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Modal_Loader from "../components/Modal_Loader.tsx";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

function Login(){
  const navigate = useNavigate();
  const [fetching,setFetching] = useState<boolean>(false);
  async function login_send_data(){
    setFetching(true);
    const response = await fetch("http://127.0.0.1:8787/api/v1/user/login",{
      method: "POST",
      body: JSON.stringify({
        // @ts-ignore
        username: document.getElementById("username").value,
        // @ts-ignore
        password: document.getElementById("password").value
      })
    });
    const ans = await response.json();
    if(ans.message === true){
      console.log(ans.token);
      localStorage.setItem("user_token",ans.token);
      navigate("/user_info");
    }
    else{
      alert(ans.message);
      setFetching(false);
      navigate("/signup");
    }
  }
  return (
      <div className={"grid grid-cols-1 lg:grid-cols-2"}>
        <Modal_Loader active={fetching}/>
        <div>
          <div className={"h-screen flex justify-center items-center flex-col p-40"}>
            <div className={"p-2 font-bold text-4xl text-green-500"}>
              Enter Website
            </div>
            <div className={"text-slate-400"}>
              Already have an account? <span><a href={"/signup"} className={"underline"}>Signup</a></span>
            </div>
            <div className={"w-[100%] pl-20 pr-20 font-bold p-2 text-lg"}>
              Username
            </div>
            <div className={"w-[100%] pl-20 pr-20"}>
              <input type={"text"} className={"border-2 w-[100%] rounded p-2"} id={"username"}
                     placeholder={"Enter your username"}/>
            </div>
            <div className={"w-[100%] pl-20 pr-20 font-bold p-2 text-lg"}>
              Password
            </div>
            <div className={"w-[100%] pl-20 pr-20"}>
              <input type={"password"} className={"border-2 w-[100%] rounded p-2"} id={"password"}/>
            </div>
            <div className={"w-[100%] pl-20 pr-20 p-4"}>
              <button className={"bg-green-500 text-white w-[100%] rounded p-2 font-bold"}
                      onClick={login_send_data}>Log In
              </button>
            </div>
          </div>
        </div>
        <div className={"hidden lg:block pt-[22%]"}>
          <DotLottieReact
              src="https://lottie.host/3b06d69a-f645-41d3-af0e-3d75f4fc216e/IBzyVs5ZIU.lottie"
              loop
              autoplay
              className={"ml-1"} />
        </div>
      </div>
  )
}
export default Login;