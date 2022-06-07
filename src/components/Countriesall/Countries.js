import React, { useState } from 'react';

const Countries = () => {
    

    const handleSearch =(e)=>{
        e.preventDefault();

        console.log(e.target.value);
    
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
                            <p>ami to nai ree</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countries;