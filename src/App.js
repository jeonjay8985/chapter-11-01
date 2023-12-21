import {Routes,Route}from "react-router-dom"
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ColorList/>}/>
      <Route path=":id" element={<ColorDetails/>}/>
    </Routes>
  );
}

export default App;

      <Route path="/" element={<ColorList/>}/>
      {/* <Route path=":id" element={<ColorDetails/>}/>  id가 키값이 되어 데이터로 사용 가능 */}
