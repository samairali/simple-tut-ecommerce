import React from 'react'
import Homepage from './../../Pages/Homepage/Homepage';
import Registeration from './../../Pages/Registeration/Registeration';
import { Router, Route } from 'react-router-dom';
import MainLayout from './../Layouts/MainLayout';
import PagesLayout from './../Layouts/PagesLayout';

export default function Routes() {
    return (
        <>
            <Route path="/" exact render={() => (
                <MainLayout>
                    <Homepage />
                </MainLayout>
            )} />

            <Route path="/registeration" render={() => (
                <PagesLayout>
                    <Registeration />
                </PagesLayout>
            )} />
        </>
    )
}
