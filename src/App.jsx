import './App.css'
// import React from 'react'
// // import Welcome from './embedding-expresiion/Welcome'
// // import CallingFunction from './embedding-expresiion/CallingFunction'
// // import Conditinal from './embedding-expresiion/Conditinal'
// // import NewBasic from './NewBasic'

// const App = () => {
//   return (
//     <div>
//       {/* <NewBasic/> */}
//       {/* <Welcome/> */}
//       {/* <CallingFunction/> */}
//       {/* <Conditinal/> */}


//     </div>
//   )
// }

// export default App

// class-components

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
import React, { Component } from 'react'
import Counter from './embedding-expresiion/Conditinal'
import Mounting from './Class-Compnents/life-cycle-method/Mounting'
import Update from './Class-Compnents/life-cycle-method/Update'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter/> */}
        {/* <Mounting/> */}
        <Update/>
      </div>
    )
  }
}




