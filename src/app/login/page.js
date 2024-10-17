"use client";
import { useRouter } from "next/navigation";
import Layout from "./layout";
const Login = () => {
  const route = useRouter();
  return (
    <div>
      <h1>Commming Soon Login Form.......</h1>
      <button style={{border:"1px solid white",padding:"10px",borderRadius:"20px"}} onClick={() => route.push("/")} >Back TO Home</button>
    </div>
  );
};

export default Login;
