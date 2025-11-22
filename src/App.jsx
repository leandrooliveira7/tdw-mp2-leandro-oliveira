import "./App.css";
import { Navbar } from "./components/Layouts/navbar.jsx";
import AppRouter from "./Router/appRouter";

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
