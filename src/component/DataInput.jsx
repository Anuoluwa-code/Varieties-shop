

export default function DataInput({title, sname, place}) {
  return (
    <li>
      <input type={title} name={sname} placeholder={place} />
    </li>
   
  )
}
