import "./App.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

import jobs from "./jobs-data";

console.log(jobs);

function App() {
  return (
    <>
      <Header title="Job Board" />

      <main className="container">
        <div>
          <Jobs jobs={jobs} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
