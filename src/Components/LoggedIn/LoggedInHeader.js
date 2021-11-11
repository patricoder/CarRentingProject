import React from 'react';

const LoggedInHeader = ({user,signOut}) => {
    return <div className={"content__header"}>
        <h1>Hello <span>{user.email}</span></h1>
        <div className={"content__button"}>
            <button onClick={signOut}>Sign Out</button>
            <span>{new Date().toLocaleDateString()}</span>
        </div>
    </div>
};

export default LoggedInHeader;