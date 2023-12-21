//ColorDetails.js
import {useParams} from "react-router-dom"
import colors from "./color-data.json"

export default function ColorDetails(){
  //파라미터가 담긴 객체가 리턴
  let {id}=useParams()
  let foundColor=colors.find(color=>color.id===id)
  return (
    <div>
      <h1>Details</h1>
      <div style={{
        backgroundColor:foundColor.color,
        height:100
      }}></div>
      <h1>{foundColor.title}</h1>
      <h1>{foundColor.color}</h1>
    </div>
  )
}