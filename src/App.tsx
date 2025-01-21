import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import "./style.css";

function App() {
  return (
    <>
      <main>
        <Sidebar />
        <section className="mainRight">
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
