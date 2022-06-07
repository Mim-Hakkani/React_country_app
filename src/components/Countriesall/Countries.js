import React, { useEffect, useState } from 'react';
import Country from './Country';
const { v4: uuidv4 } = require('uuid');

const Countries = () => {
 
    const [country,setCountry] =useState([])
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        //set up the country api 

         fetch('https://restcountries.com/v3.1/all')
         .then(res=>res.json())
         .then(data=>
            // console.log(data),
             setCountry(data),
             setLoading(false)
         )
    },[])

    // console.log({country,id:uuidv4()}) 

    if(loading) return <img src="/loading.gif" alt="loading" />

    const handleSearch =(e)=>{
        e.preventDefault();

        console.log(e.target.value);
    
    }

    const removecountry =(name)=>{
       const filteritem = country?.filter(filteritem=> filteritem?.name?.common!==name);

       setCountry(filteritem);

    }
    return (
        <div>
            <div className="search-section container my-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                            <form className="d-flex">
                                <input 
                                className="form-control me-2"      type="text" 
                                 placeholder="Search"
                                 aria-label="Search"
                                 onChange={handleSearch}

                                 />
                      
                            </form>
                          
                    </div>
                </div>
            </div>

{
    !loading &&  
     <div className="country-body">
                 <div className="container">
                    <div className="row"> 
                    {
                        country?.map((item,index)=> <Country key={index} item={item} removecountry={removecountry}/>)
                    }
                        
                    </div>
                    
                </div>
    </div>
}
          
        </div>
    );
};

export default Countries;