import React from 'react'
import {BrowserRouter as Router, Route, Routes}  from "react-router-dom"
import IndexPage from '../pages/Index/IndexPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'
import FixedPointPage from '../pages/FixedPoint/FixedPointPage'
import BisectionPage from '../pages/Bisection/BisectionPage'
import NewtonRaphsonPage from '../pages/NewtonRaphson/NewtonRaphsonPage'
import SecantePage from '../pages/Secante/SecantePage'

const Routess = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/puntofijo' element={<FixedPointPage />} />
                    <Route path='/biseccion' element={ <BisectionPage/>} />
                    <Route path='/newtonRaphson' element={ <NewtonRaphsonPage/>} />
                    <Route path='/secante' element={ <SecantePage/>} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routess