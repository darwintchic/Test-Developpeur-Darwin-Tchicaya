import React from 'react';

const data = [
     {id:1,numCo:'124456',dateCo:'2023-12-07',typeCo:'Fixe',nomV:'Alioune Mbaye'},
     {id:1,numCo:'124456',dateCo:'2023-12-07',typeCo:'Fixe',nomV:'Omar Mbaye'},
     {id:1,numCo:'124456',dateCo:'2023-12-07',typeCo:'Fixe',nomV:'Alioune Gueye'},
      {id:1,numCo:'124456',dateCo:'2023-12-07',typeCo:'Fixe',nomV:'Alioune Fall'},
];
function Ventes() {


  return (
    <>
      <div className="container mb-4 mt-3">
           <div className="row">
                <div className="col-lg-7 col-6">
                 {/** Logo **/}
                 <h1 style={{color:"#090979"}}>QCWORKSPACE</h1>
            
                </div>
                <div className="col-lg-5 col-6">
                     <div className="card bg-warning">
                           <ul className="d-flex" style={{listStyle:'none'}}>
                               <li><i className="bi bi-exclamation-circle" style={{fontSize:'2em'}}></i></li>&nbsp;
                               <li>Cette fonctionnalité n'est pas encore dispobible!</li>
                           </ul>
                     </div> 
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
                              <div className="col-lg-2">
                                   <h3>VENTES</h3>
                              </div>
                              <div className="col-lg-4">
                                   <h6 className="text-muted mt-2">Tableau de ventes</h6>
                              </div>
                              <div className="col-lg-6">
                                  <ul className="d-flex float-end mt-2" style={{listStyle:'none'}}>
                                       <li>14  Janvier 2024&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                                       <li>Dakar, Senegal</li>
                                      
                                  </ul>
                              </div>
                          </div>
                             
                             
                             {/** Start table rows **/}
                             <div className="row">
                                 <div className="card p-2" style={{borderRadius:'20px'}}>

                                 <div className="row">
                                 <div className="col-lg-9">
                                    <i className="bi bi-journal-text text-dark" style={{fontSize:'1.3em'}}></i>
                                 </div>

                                 <div className="col-lg-3">
                                      <form>
                                      <div className="input-group mb-3" >
                                           <span className="input-group-text bg-light" id="basic-addon1"><i className="bi bi-search"></i></span>
                                           <input type="text" className="form-control bg-light" placeholder="search" aria-label="search" aria-describedby="basic-addon1" />
                                       </div>
                                     </form>
                                 </div>
                                 </div>
                                  <hr/>
                                 <div className="row">

                                  {/** Table **/}
                                                    <div className="row">
                                  <div className="col-lg-12 text-center">
                                      <table className="table table-striped">
    <thead>
      <tr>
        <th><i className="bi bi-filter"></i>&nbsp;Numéro commande</th>
        <th><i className="bi bi-filter"></i>&nbsp;Date commande</th>
        <th><i className="bi bi-filter"></i>&nbsp;Type vente</th>
        <th><i className="bi bi-filter"></i>&nbsp;Nom vendeur</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><i className="bi bi-search"></i></td>
        <td><i className="bi bi-search"></i></td>
        <td><i className="bi bi-search"></i></td>
        <td><i className="bi bi-search"></i></td>
      </tr>
      {data.map((vente) => {
        return(
          <tr key={vente.id}>
           <td>{vente.numCo}</td>
           <td>{vente.dateCo}</td>
           <td>{vente.typeCo}</td>
           <td>{vente.nomV}</td>
         </tr>
        
        )
      })}
      
    </tbody>
  </table>
                                  </div>
                             </div>

                             {/** End table **/}
                                 </div>

                                 </div>{/** End card **/}
                             </div>
          
                            {/** End row **/}
                  </div>
                  
             </div>{/** End row **/}
 
     </div>{/** End container **/}
    </>
  )
}

export default Ventes
