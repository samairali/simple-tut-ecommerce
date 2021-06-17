import React from 'react';
import './style.scss'
const MainLayout = (props) => {
    return (
        <div className="main-layout">
            {props.children}
        </div>
    );
}

export default MainLayout;
