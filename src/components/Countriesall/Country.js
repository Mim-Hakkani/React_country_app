import React from 'react';

const Country = ({item,removecountry}) => {
    return (
               <div className="col-md-4">
                            <div className="card" style={{width: '18rem'}}>
                                <img src={item?.flags?.png} className="card-img-top" alt="..." width="100px" height="150px"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item?.name?.common}</h5>
                            
                                      <ul className="list-group list-group-flush">
                                   
                                        <li className="list-group-item">Population:{item?.population}</li>
                                        <li className="list-group-item">{item?.capital}</li>
                                    </ul>
                                    <button 
                                    onClick={()=>removecountry(item?.name?.common)}
                                    className="btn btn-info mt-2 d-block text-white">Remove Country</button>
                                </div>
                                </div>
                        </div>
    );
};

export default Country;