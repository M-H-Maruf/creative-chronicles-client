import { Outlet } from "react-router-dom";
import Navbar from './components/shared/Navbar';


const App = () => {
  return (
    <div className="font-mukta text-white/60 bg-black">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;