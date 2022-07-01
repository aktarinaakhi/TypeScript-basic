import React from 'react';
import './App.css';
import { Lists } from './components/Lists';

// const Box: React.FunctionComponent<{title:string}>=({title})=>{
//   return <div></div>
// }

function App() {
  return (
    <div className="App">
      {/* <Box title='hello'>abhfgdsh</Box> */}

     <Lists />
    </div>
  );
}

export default App;
