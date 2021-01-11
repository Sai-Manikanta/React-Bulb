import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    return ( 
        <div className="app">
            <h1>Bulb</h1>
            <div className="bulb-container">
                <FontAwesomeIcon icon={faLightbulb} style={{ color: 'yellow', fontSize: '20rem' }} />
            </div>
        </div>
     );
}
 
export default App;