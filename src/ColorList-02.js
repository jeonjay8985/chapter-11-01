//ColorList.js
import colors from "./color-data.json"
import { Link, useNavigate } from "react-router-dom"

export default function ColorList(){
  let navigate=useNavigate()
  return(
    <div>
      <h1>ColorList</h1>
      {colors.map(color=>(
          <section>
            <Link to={`/${color.id}`}>
              {color.title}
            </Link>
            {/* <a href={`/${color.id}`} */}
            {/* onClick={(e)=>navigate(`/${color.id}`)} */}
            {/* > */}
            {/* </a> */}
          </section>
        )
      )}
    </div>
  )
}