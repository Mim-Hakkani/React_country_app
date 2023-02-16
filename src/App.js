import 'bootstrap/dist/css/bootstrap.css';
import { createContext, useState } from 'react';
import './App.css';
import ReducerForm from './components/BootstrapForm/ReducerForm';
import Parent from './components/ContextApi/Parent';
// import Countries from './components/Countriesall/Countries';
// import TestEditor from './components/editorTest/TestEditor';
// import ContextApiMain from './components/Propsdrilling/ContextApi';
// import UserDetails from './components/PropsType/UserDetails';
// import ReducerHook from './components/useReducerHook/ReducerHook';
import ReducerPratices from './components/useReducerHook/ReducerPratices';



export const COUNTER_CONTEXT = createContext()

function App() {

  const [count,setCount] =useState(0)
  const value = { count ,setCount}

  return (
   <>
     {/* <Countries /> */}


     

      {/*this section is used for props drilling */}

       {/* <ContextApiMain/>  */}




       {/* this area is used for context apis  */}

       {/* <ContextApiMain /> */}


       {/* props type example  */}

       {/* <UserDetails /> */}

       {/* <h1>Ehsan Marketing Details page </h1>

       <div className="containers" style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'start',
        alignItems:'stretch',

         border:'1px solid red',
         padding:'5px',
         backgroundColor:'#000',
         width:' 500px',
         height: '400px'

       }}>
        <div className='  bg-warning text-white p-4'  style={{height:'90px',}}>Box1</div>
        <div className=' bg-info text-white p-4' style={{height:'90px',flexBasis:'130px',flexShrink:'0'}}>Box2</div>
        <div className=' bg-danger text-white p-4' style={{height:'90px',flexGrow:'1'}}>Box3</div>
     
       </div>


       <div>
        <p style={{
          border :'1px solid red',
          marginTop:'30px',
          width:'400px',
          outline:'yellow outset 2px' ,
          outlineOffset:'7px'
        }}>Golam Hakkani Mim</p>
       </div> */}

       {/* <ReducerHook /> */}

       {/* <ReducerPratices /> */}

       {/* <TestEditor /> */}

      {/* <COUNTER_CONTEXT.Provider value={value}> 
       <div>
        <Parent />
       </div>
      </COUNTER_CONTEXT.Provider> */}


      <ReducerForm />
     
    
    </>
      

  );
}

export default App;
