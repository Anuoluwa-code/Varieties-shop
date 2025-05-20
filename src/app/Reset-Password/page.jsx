import Button from "@/component/Button";
import DataInput from "@/component/DataInput";
import Header from "@/component/Header";
import alpha from "@/component/Main.module.css";

export default function ResetPassword() {
  return (
    <div className={alpha.form}>
      <Header header = 'reset password'/>
      <ul>
        <DataInput title='password' sname='password' place='Enter your old password'/>
        <DataInput title='password' sname='password' place='New password'/>
      </ul>
      <Button title='reset password'/>
    </div>
  )
}
