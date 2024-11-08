import React from 'react';
import {Link} from 'react-router-dom';
const actions = [
   {id:1,lien:'ventes',bColor:'',icon:'',actionName:'Ventes'},
   {id:2,lien:'dfdfcvc',bColor:'',icon:'',actionName:'Aperçu'},
   {id:3,lien:'nbh',bColor:'',icon:'',actionName:'User Board'}
];


export default function Home(){
	
	return(
    <>
       <div className="container">
            <div className="row">
               <div className="col-lg-12">
                   <h1>Quality Center</h1>
                   <p>Choose an action!!!</p>
               </div>
            </div>

            <div className="row">

              {/** Iterable **/}
                  {actions.map((act) =>{

                     <div className="col-lg-4 mb-3" key={act.id}>
                       
                       {/** Action **/}
                          <Link path={act.lien} style={{textDecoration:'none'}}>
                            <div className="card bg-warning">
                           <ul className="d-flex" style={{listStyle:'none'}}>
                               <li><i className="bi bi-exclamation-circle" style={{fontSize:'2em'}}></i></li>&nbsp;
                               <li>{act.actionName}</li>
                           </ul>
                           </div> 
                         </Link>
                       {/** End of actions **/}
                   </div>
                  })}
                   
                {/** End of iterable **/}
                 

       
        </div>
        </div>
         </>       
    )
}