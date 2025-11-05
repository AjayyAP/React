import './App.css'
import React from 'react'
import Welcome from './embedding-expresiion/Welcome'
import CallingFunction from './embedding-expresiion/CallingFunction'
import Conditinal from './embedding-expresiion/Conditinal'
import NewBasic from './NewBasic'
import Basic from './Functional-Components/Basic'
import State from './Functional-Components/State'
import Props from './Functional-Components/Props'
import Counter from './Functional-Components/Hooks/Counter'

const App = () => {
  return (
    <>
      {/* ------------------------embedding js ------------------*/}
      {/* <NewBasic/> */}
      {/* <Welcome/> */}
      {/* <CallingFunction/> */}
      {/* <Conditinal/> */}

      {/* ---------------------functional component ------------------------ */}
      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}
      <Counter/>



    </>
  )
}

export default App

// ------------------------------------class-components---------------------------------

// import React, { Component } from 'react'
// import BasicClass from './Class-Compnents/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <BasicClass/>
//       </div>
//     )
//   }
// }
// import React, { Component } from 'react'
// import Counter from './embedding-expresiion/Conditinal'
// import Mounting from './Class-Compnents/life-cycle-method/Mounting'
// import Update from './Class-Compnents/life-cycle-method/Update'
// import List from './embedding-expresiion/List'
// import ShouldUpdate from './Class-Compnents/life-cycle-method/ShouldUpdate'
// import UnMounting from './Class-Compnents/life-cycle-method/UnMounting'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Counter/> */}
//         {/* <Mounting/> */}
//         {/* <Update/> */}
//         {/* <List/> */}
//         {/* <ShouldUpdate/> */}
//         <UnMounting/>
//       </div>
//     )
//   }
// }




