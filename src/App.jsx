import './App.css'
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <div className="bg-red-900 min-h-screen w-screen flex flex-col ">
      {/* div contain title*/}
      <div>

      </div>
      

       {/* div contain */}
       <div>

       
      {/* Overlay */}
      <div className="bg-black/30 w-full h-full flex flex-col items-center justify-start pt-10 min-h-screen">
        <Todo />
      </div>


      </div>
      {/* div sidebar */}
      <div>

      </div>




    </div>
  );
}

export default App;
