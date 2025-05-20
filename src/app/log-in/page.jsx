"use client"
import Button from "@/component/Button";
import DataInput from "@/component/DataInput";
import Header from '@/component/Header';
import alpha from '@/component/Main.module.css';
import { useRouter } from "next/navigation";


export default function LogIn() {
  const router = useRouter()
  return (
   <div className={alpha.form}>
    <Header header = 'Log In'/>
    <ul>
      <DataInput title='email' sname='email' place='enter your email address'/>
      <DataInput title='password' sname='pwd' place='enter your password'/>
    </ul>
    <Button title='Log in'/>
    <p>forgot password? <span onClick={()=>router.push('/Reset-Password')} className="cursor-pointer text-blue-700">reset password</span></p>
    </div>
  )
}
