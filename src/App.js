import Palette from './components/Palette'
import seedColors from './seedColors'
import {generatePalette} from './helpers/colorHelper.js'

console.log(generatePalette(seedColors[4]))

function App() {
  return (
    <div >
    <Palette {...seedColors[4]}/>
    </div>
  );
}

export default App;
