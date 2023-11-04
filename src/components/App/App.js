import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../App/reset.scss";
import '../App/mixin.scss';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element="" />
            </Routes>
        </BrowserRouter>
    )
}

export default App;