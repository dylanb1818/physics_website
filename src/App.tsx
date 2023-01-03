import React from 'react'
import {MomentumFile} from "./momentum";
import {FinalVelocityFile} from "./final_velocity";
import {FinalDisplacementFile} from "./final_displacement";
import {AtwoodMachineFile} from "./atwoodmachine";
import {InclinedMassFile} from "./inclined_mass";
import {TopOfPageFile} from "./top_of_page";
import {PhysicsOptionFile} from "./physics_option";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Button} from "@mantine/core";
import {MechanicsFile} from "./mechanics_eqns";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppContents />}>

            </Route>

            <Route path="contact-us" element={<MechanicsFile />} />
        </Routes>

    </BrowserRouter>


  )
}

function ContactUs() {
    return (
        <>
            <h1>Contact Us</h1>
            <Button
                component={Link}
                to={'../'}
            >
                Go Back
            </Button>
        </>
    )
}

function AppContents () {
    return (
        <div>
            <Button
                component={Link}
                to={'contact-us'}
            >

            </Button>
            <TopOfPageFile />
            <PhysicsOptionFile />
            <FinalVelocityFile />
            <FinalDisplacementFile />
            <MomentumFile />
            <AtwoodMachineFile />
            <InclinedMassFile />
        </div>
    )

}
export default App
