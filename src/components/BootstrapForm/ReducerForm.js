import React, { useReducer } from 'react';

const reducer =(state,action)=>{
//  switch(state){
//   case action.
//  }
}

const initialValue = 0;

const ReducerForm = () => {

const [state,dispatch] =useReducer(reducer,initialValue)

    return (
        <div className='container'>
            <form action="">

    <div class="form-group">
        <label for="email">Name:</label>
        <input type="text" class="form-control" id="text" />
    </div>


  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" />
  </div>

  <div class="form-group">
  <label for="sel1">Select list:</label>
  <select class="form-control" id="sel1">
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
  </select>
</div>

  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" />
  </div>

  <div class="form-group">
  <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>

  <div class="checkbox">
    <label><input type="checkbox" /> Agree </label>
  </div>
  
<div class="form-group"> 
<label class="radio-inline"><input type="radio" name="optradio" checked />Option 1</label>
<label class="radio-inline"><input type="radio" name="optradio"/>Option 2</label>
<label class="radio-inline"><input type="radio" name="optradio"/>Option 3</label>
</div> 

  <button type="submit" class="btn btn-primary">Submit</button>

</form>
        </div>
    );
};

export default ReducerForm;