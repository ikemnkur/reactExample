// import logo from "./logo.svg";
import './App.css';
// import Test1 from "./components/Test1";
// import Test2 from "./components/Test2";
// import StateMgt from "./components/StateMgt";
// import StateMgt2 from "./components/StateMgt2";
// import StateMgt3 from "./components/StateMgt3";
import UseEffectComp from "./components/UseEffectComp";

// const user = {
//   name: "Stanley",
//   location: "Nigeria"
// }

function App() {
  return (
    <div className="App">
      {/* <Test1 userInfo={user} age="25" />
      <Test1 />
      <Test1 />
      <Test1 />
      <Test2 userInfo={user} age="25" /> */}

      <UseEffectComp />
    </div>
  );
}

export default App;
