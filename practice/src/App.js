import Navbar from "./compo/Navbar";
import Textform from "./compo/Textform";
function App() {
  return (
    <>
   <Navbar></Navbar>
   <div className="container my-5">
   <Textform heading = "ENTER THE TEXT"></Textform>
   </div>
   </>
  );
}

export default App;
