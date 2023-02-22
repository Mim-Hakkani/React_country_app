// import React, { useReducer, useState } from 'react';


// const reducer = (state, action) => {
//   //  switch(state){
//   //   case action.
//   //  }
// }

// const initialValue = 0;

// const ReducerForm = () => {

//   // const [state, dispatch] = useReducer(reducer, initialValue)

//   // state in form normal way 
//   const [name,setName] =useState('') 
//   const [email,setEmail] =useState('') 
//   const [pass,setPassword] =useState('') 
//   const [desc,setDescription] =useState('') 
//   const [agree,setAgree] =useState(null) 
//   const [radioItem,setRadioItem] =useState('') 
//   const [selectList,setSelectList] =useState(null) 

//   const handleSubmitItem = (event)=>{
//     event.preventDefault()
//    let details = {
//     name,
//     email,
//     pass,
//     desc,
//     agree,
//     radioItem,
//     selectList
//    }

//    console.log('details :: ', details)
//   }


//   return (
//     <div className='container'>
//       <form action="" onSubmit={handleSubmitItem}>
      
//        {/* name  */}
//         <div class="form-group">
//           <label for="email">Name:</label>
//           <input type="text" class="form-control" id="text" onBlur={(e)=>setName(e.target.value)} />
//         </div>

//        {/* email  */}
//         <div class="form-group">
//           <label for="email">Email address:</label>
//           <input type="email" class="form-control" id="email" onBlur={(e)=>setEmail(e.target.value)} />
//         </div>


//  {/* radio item  */}
//         <div class="form-group">
//           <label for="sel1">Select list:</label>
//           <select class="form-control" id="sel1" onBlur={(e)=>setSelectList(e.target.value)}>
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//           </select>
//         </div>

// {/* password  */}

//         <div class="form-group">
//           <label for="pwd">Password:</label>
//           <input type="password" class="form-control" id="pwd" onBlur={(e)=>setPassword(e.target.value)} />
//         </div>

//         <div class="form-group">
//           <label for="comment">Comment:</label>
//           <textarea name="comment" id="" cols="30" rows="10" onBlur={(e)=>setDescription(e.target.value)}></textarea>
//         </div>

//         <div class="checkbox">
//           <label><input type="checkbox" onClick={(e)=>setAgree(e.target.value)}/> Agree </label>
//         </div>

//         <div class="form-group">
//           <label class="radio-inline"><input type="radio" name="optradio" checked   value="option1"  onChange={(e)=>setRadioItem(e.target.value)} />Option 1</label>

//           <label class="radio-inline"><input type="radio" name="optradio"   onChange={(e)=>setRadioItem(e.target.value)} />Option 2</label>

//           <label class="radio-inline"><input type="radio" name="optradio"  onChange={(e)=>setRadioItem(e.target.value)} />Option 3</label>

//         </div>

//         <button type="submit" class="btn btn-primary">Submit</button>

//       </form>
//     </div>
//   );
// };

// export default ReducerForm;