import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    const [bulbStatus, setBulbStatus] = useState(false);

    return ( 
        <div className="app">
            <h1>Bulb</h1>
            <div className="bulb-container">
                <FontAwesomeIcon icon={faLightbulb} style={{ color: bulbStatus ? 'yellow' : '#f1f1f1', fontSize: '20rem' }} />
                <button onClick={() => setBulbStatus(!bulbStatus)}>
                    <FontAwesomeIcon icon={bulbStatus ? faToggleOn : faToggleOff} />
                    {bulbStatus ? ' on' : ' off' }
                </button>
            </div>
        </div>
     );
}
 
export default App;