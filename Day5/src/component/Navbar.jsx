import React from "react";
function Dash(prop) {
    return (
        <div
            onClick={() => {
                prop.nav(false);
            }}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
function Open(prop) {
    return (
        <>
            <div
                className="nav-bar-dash-open-close"
                onClick={() => {
                    prop.nav(true);
                }}
            >
                <div></div>
                <div></div>
            </div>

            <div className="nav-bar-dash-items">
                <div
                    className="nav-bar-dash-item"
                    onClick={() => {
                        
                    }}
                >
                    <p>Login</p>
                </div>
                <div
                    className="nav-bar-dash-item"
                >
                    <p>SignUp</p>
                </div>
            </div>
        </>
    );
}

function NavBar(prop) {
    let [nav, setNav] = React.useState(false);
    return (
        <>
            <div className="nav-bar">
                <div className={nav ? "nav-bar-dash-close" : "nav-bar-dash-open"}>
                    {nav ? (
                        <Dash nav={setNav} />
                    ) : (
                        <Open nav={setNav} />
                    )}
                </div>
            </div>
        </>
    );
}

export { NavBar };
