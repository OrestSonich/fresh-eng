import React from "react"
import './index.css'
import Routed from "./components/routed"
import AppNavbar from "./components/app.navbar"
import Layout from "./components/layout"


function App() {
  return (
      <Layout>
          <Routed/>
      </Layout>
  );
}
export default App;
