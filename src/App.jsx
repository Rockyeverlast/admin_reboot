import { Route, Routes } from "react-router-dom"
import Playground from "./Pages/Playground"
import NoMatch from "./Pages/NoMatch"
import Home from "./Pages/Home"
import DbScreen from "./Pages/DbScreen"
import Playground2 from "./Pages/Playground2"

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Playground />} />
    <Route path="/home" element={<Home />} />
    <Route path="/dbscreen" element={<DbScreen />} />
    <Route path="*" element={<NoMatch />} />
    <Route path="/Playground" element={<Playground2 />} />
  </Routes>
  )
}
export default App