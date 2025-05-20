
import Button from "@/component/Button";
import DataInput from "@/component/DataInput";
import Header from "@/component/Header";
import alpha from "@/component/Main.module.css"


export default function SignUp() {
  return (
    <div className={alpha.form}>
      <Header header = 'create account'/>
      <ul>
        <DataInput title='text' sname='text' place='enter your name'/>
        <DataInput title='email' sname='email' place='enter your email'/>
        <DataInput title='password' sname='pwd' place='enter your password'/>
        <DataInput title='password' sname='pwd' place='confirm your password'/>

      </ul>
      <Button title='create account'/>
    </div>
  )
}
