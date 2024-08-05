import Navbar from "../components/Navbar/Navbar";
import UserComponets from "../components/UserComponents/UserComponets";
import index from "../index.css";
const App = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
    <Navbar />
    <UserComponets />
  </div>
  );
};

export default App;
