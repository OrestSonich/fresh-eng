import './index.css'
import Routed from "./components/routed"
import Layout from "./components/layout/layout"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"


function App() {

    return (
        <BrowserRouter>
            <ChakraProvider>
                <Layout>
                    <Routed/>
                </Layout>
            </ChakraProvider>
        </BrowserRouter>
    )
}

export default App
