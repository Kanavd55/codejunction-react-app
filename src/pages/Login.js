import { useState } from 'react';
import styles from '../styles/login.module.css';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks';

const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loggingIn,setLoggingIn]=useState(false);
  const auth=useAuth();

  const handleSubmit=async (e)=>{
    e.preventDefault();

    setLoggingIn(true);
    if(!email || !password){
      return toast("Please enter both email and password");
    }

    const response=await auth.login(email,password);
    if(response.success){
      toast("Successfully logged in")
    }else{
      toast(response.message)
    }

    setLoggingIn(false);
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className={styles.field}>
        <input type="password" placeholder="Paasword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>{loggingIn?'Loggin In...':'Log In'}</button>
      </div>
    </form>
  );
};

export default Login;
