import React from 'react';


function Overview() {


  return (
    <>
      <div className="container mb-4 mt-3">
           <div className="row">
                <div className="col-lg-7 col-6">
                 {/** Logo **/}
                 <h1 style={{color:"#090979"}}>QCWORKSPACE</h1>
            
                </div>
                <div className="col-lg-5 col-6">
                     {/** User connected settings **/}

                     {/** End of user connected settigns **/}
                </div>
           </div>

      </div>

     <div className="container">
             <div className="row">
                  <div className="col-lg-2">
                        <ul style={{listStyle:'none'}}>
                            <li><button type="button" className="btn w-100 p-2 bg-light mb-2 text-muted" style={{borderRadius:'30px'}}><i className="bi bi-eye"></i>&nbsp;Aperçu</button></li>
                            <li><button type="button" className="btn w-100 p-2 bg-light mb-2 text-primary" style={{borderRadius:'30px'}}><i className="bi bi-receipt"></i>&nbsp;Ventes</button></li>
                            <li><button type="button" className="btn w-100 p-2 bg-light mb-2 text-muted" style={{borderRadius:'30px'}}><i className="bi bi-bar-chart"></i>&nbsp;Analyses</button></li>
 
                        </ul>

                  </div>

                  <div className="col-lg-10">
                          <div className="row">
                              <div className="col-lg-3">
                                   <h3>OVERVIEW</h3>
                              </div>
                              <div className="col-lg-3">
                                   <h6 className="text-muted mt-2">Tableau de ventes</h6>
                              </div>
                              <div className="col-lg-6">
                                  <ul className="d-flex float-end mt-2" style={{listStyle:'none'}}>
                                       <li>14  Janvier 2024&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                                       <li>Dakar, Senegal</li>
                                      
                                  </ul>
                              </div>
                          </div>
                             
                             
                             {/** Start overview **/}
                             <div className="row">
                                 <div className="card p-2" style={{borderRadius:'20px'}}>

                                 <div className="row">
                                     <div className="col-lg-9">
                                        <h6>Aperçu générale de réalisations</h6>
                                     </div>

                                     <div className="col-lg-3">
                                       <span className="float-end badge text-white bg-primary">2024</span>
                                     </div>
                                 </div>
                                  
                                </div>{/** End of card**/}
                             </div>
          
                            {/** End row overview **/}


                             {/** Analysing Sales **/}
                             <div className="row">
                                
                             </div>
          
                            {/** End of analysing sales **/}
                  </div>
                  
             </div>{/** End row **/}
 
     </div>{/** End container **/}
    </>
  )
}

export default Overview
