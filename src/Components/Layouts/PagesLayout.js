import React from 'react';

const PagesLayout = (props) => {
    return (
        <div className="normal-pages-main-layout">
            {props.children}
        </div>
    );
}

export default PagesLayout;
