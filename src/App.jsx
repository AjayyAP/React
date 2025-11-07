import './App.css'
import React from 'react'
// import Welcome from './embedding-expresiion/Welcome'
// import CallingFunction from './embedding-expresiion/CallingFunction'
// import Conditinal from './embedding-expresiion/Conditinal'
// import NewBasic from './NewBasic'
// import Basic from './Functional-Components/Basic'
// import State from './Functional-Components/State'
// import Props from './Functional-Components/Props'
// import Counter from './Functional-Components/Hooks/Counter'
// import ProfileForm from './Functional-Components/Hooks/UseState/ProfileForm'
// import Textinput from './Functional-Components/Hooks/UseState/TextInput'
// import Togglebutton from './Functional-Components/Hooks/UseState/Toggle'
// import UseEff from './Functional-Components/Hooks/UserEffect/UseEff'
import Home from './Functional-Components/Hooks/UserContext/ThemeSet/Home'
import UserList from './Functional-Components/Hooks/UserContext/User-List/UserList'
import { UserApiProvider } from './Functional-Components/Hooks/UserContext/User-List/UserApiContext'
// import UserList from './Functional-Components/Hooks/UserEffect/UserList'
// import { ThemeProvider } from './Functional-Components/Hooks/UserContext/ThemeSet/ThemeContext'
// import Counter from './Functional-Components/Hooks/UseState/Counter'
// import ProfileForm from './Functional-Components/Hooks/UseState/ProfileForm'
// import Textinput from './Functional-Components/Hooks/UseState/TextInput'
// import Togglebutton from './Functional-Components/Hooks/UseState/Toggle'

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


      {/* <-----hooks-----/> */}
      {/* <Counter/>
      <ProfileForm/>
      <Textinput/>
      <Togglebutton/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}


      {/* <---usecontext----/> */}
      {/* <-----theme-----/> */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}


      {/* <2 ---user list--/> */}
      <UserApiProvider>
        <UserList/>
      </UserApiProvider>





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




