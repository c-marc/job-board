import "./App.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

import jobs from "./jobs-data";

function App() {
  return (
    <>
      <Header title="The Job Board" />

      <main className="container">
        <Jobs jobs={jobs} />
      </main>

      <Footer />
    </>
  );
}

export default App;
