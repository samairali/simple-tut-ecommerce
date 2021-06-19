import React from 'react'
import Homepage from './../../Pages/Homepage/Homepage';
import Registeration from './../../Pages/Registeration/Registeration';
import { Router, Route } from 'react-router-dom';
import MainLayout from './../Layouts/MainLayout';
import PagesLayout from './../Layouts/PagesLayout';
import Login from './../../Pages/Login/Login';

export default function Routes({currentUser}) {
    return (
        <>
            <Route path="/" exact render={() => (
                <MainLayout currentUser={currentUser}>
                    <Homepage />
                </MainLayout>
            )} />

            <Route path="/registeration" render={() => (
                <PagesLayout currentUser={currentUser}>
                    <Registeration />
                </PagesLayout>
            )} />

            <Route path="/login" render={() => (
                <PagesLayout currentUser={currentUser}>
                    <Login />
                </PagesLayout>
            )} />
        </>
    )
}
