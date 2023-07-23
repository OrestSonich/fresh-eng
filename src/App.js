import './index.css'
import Routed from "./components/routed"
import Layout from "./components/layout/layout"
import { BrowserRouter } from "react-router-dom"


function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Routed/>
            </Layout>
        </BrowserRouter>
    )
}

export default App
