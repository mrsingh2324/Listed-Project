import Head from "next/head";
import Image from "next/image";
import apple from "../public/apple.png";
import google from "../public/google.png";

import { useSession, signIn, signOut, getSession } from "next-auth/react"; //detect user is present or not
import { useEffect, useState } from "react";

export default function Home({ session }) {
  const [login, setLogin] = useState(true);

  const handleSignIn = () => {
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="home flex flex-col md:flex-row">
      <div className="name ">
        <h1>Board.</h1>
      </div>
      <div className="authenticate ">
        <div className="content ">
          <h2>{login ? `Log in` : `Sign up`} </h2>
          <span className="span-tag">
            {login ? `Log in` : `Sign up`} to {login ? `your` : `new`} account
          </span>
          <div className="social">
            <div>
              <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=1091834768364-2b31urjsj5pp9a6o3mfbi4g6oihp5ego.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=OJL6klhkEhiI-fH71-fPdRDkvoKVz8TEMnlewnf-6gE&code_challenge=cr8VqB0jwkEjS4Z9VWDHbWWJkyHW2X0Oa_1tfeXNUg4&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow">
                <button
                  className="hover:bg-blue-500 hover:text-white"
                  // onClick={()=> signIn()}
                >
                  <Image src={google} alt="google" />
                  <span>{login ? `Log in` : `Sign up`} with Google</span>
                </button>
              </a>
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white">
                <Image src={apple} alt="apple" />
                <span>{login ? `Log in` : `Sign up`} with Apple</span>
              </button>
            </div>
          </div>
          <div className="form">
            {login ? (
              <form>
                <div>
                  <label htmlFor="">Email address</label>
                  <input
                    type="email"
                    placeholder="Username or Email"
                    
                  />
                </div>
                <div>
                  <label type="text" >
                    Password
                  </label>
                  <input type="password" placeholder="Password" />
                </div>
                <a href="" className="forget-pass">
                  Forgot password?
                </a>
                <button className="sign-in-btn">Sign in</button>
              </form>
            ) : (
              <form>
                <div>
                  <label htmlFor="">Email address</label>
                  <input
                    type="email"
                    placeholder="Username or Email"
                    
                  />
                  <label htmlFor="">Full Name</label>
                  <input
                    type="email"
                    placeholder="Username or Email"
                    
                  />
                </div>
                <div>
                  <label type="text" >
                    {login ? `Password` : `Create Password`}
                  </label>
                  <input type="password" placeholder="Password" />
                </div>
                <a href="" className="forget-pass">
                  {login && `Forgot password?`}
                </a>
                <button className="sign-in-btn" onClick={()=>router.push('/dashboard')}>
                {login ? `Sign in` : `Sign up`} 
                </button>
              </form>
            )}
          </div>
          <div className="register-link">
            {login ? `Dont't have an account?` : `Already have an account ? `}{" "}
            <button className="text-blue-500 " onClick={() => setLogin(!login)}>
              {login ? `Register here` : `Sign In`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: true,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
