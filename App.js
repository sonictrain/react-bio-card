import React from "react"

import Bio from "./components/Bio"
import Links from "./components/Links"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="container">
            <Bio />
            <section>
                <Links />
                <About />
            </section>
            <Footer />
        </div>
    )
}

export default App