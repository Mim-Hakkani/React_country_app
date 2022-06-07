import React from 'react';

const Country = () => {
    return (
               <div className="col-md-4">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      <ul class="list-group list-group-flush">
                                        <li class="list-group-item">An item</li>
                                        <li class="list-group-item">A second item</li>
                                        <li class="list-group-item">A third item</li>
                                    </ul>
                                    <a href="/" className="btn btn-info mt-2 d-block text-white">Go somewhere</a>
                                </div>
                                </div>
                        </div>
    );
};

export default Country;