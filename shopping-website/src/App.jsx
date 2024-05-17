import "./App.css";
import RegisterForm from "./components/RegisterForm";
import MultiplicationTable from "./components/MultiplicationTable";
import Rating from "./components/Rating";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="app-container">
      <Banner />
      <RegisterForm />
      <MultiplicationTable />
      <Rating />
    </div>
  );
}

export default App;
