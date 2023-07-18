import React, { useContext, useEffect, useState, useTransition } from "react"
import './index.css'
import Routed from "./components/routed"
import Layout from "./components/layout"


function App() {

    return (
      <Layout>
          <Routed/>
      </Layout>
  );
}
export default App;
