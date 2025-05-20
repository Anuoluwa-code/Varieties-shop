import alpha from '@/component/Main.module.css';
export default function Button(props) {
  return (
    <button className={alpha.btn} type='button'>
      {props.title}
    </button>
  )
}
