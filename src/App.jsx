import { Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout";
import CustomCards from "./components/ui/CustomCards";

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading Data...</p>}>
        <Layout />
      </Suspense>
    </>
  );
}

export default App;
