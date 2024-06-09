import "./App.css";
import Footer from "./components/Footer/footer";
import HeaderComponent from "./components/Header/header";
import HomePage from "./pages/HomePage/homePage";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
