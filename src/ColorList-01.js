//ColorList.js
import colors from "./color-data.json"
import { useNavigate } from "react-router-dom"

export default function ColorList(){
  let navigate=useNavigate()
  return(
    <div>
      <h1>ColorList</h1>
      {colors.map(color=>(
          <section>
            <a href=""
              onClick={()=>navigate(`/${color.id}`)}>
              {color.title}
            </a>
          </section>
        )
      )}
    </div>
  )
}