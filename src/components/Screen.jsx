import React, {useState} from 'react';
import './Screen.css';

const Screen = () => {
    const [screen, setScreen] = useState(true);
    return(
    <>
    <div className={screen? "container" : "container dark"} >
        <div className="content">
        <h3>Change screen to Dark or Light<br/>using State</h3>
        <label className="switch">
            <input type="checkbox" onClick={() => setScreen(!screen)}/>
            <span className="slider round"></span>
        </label>
        </div>
    </div>
    </>
    );
};

export default Screen;