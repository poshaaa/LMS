import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import Sidebar from './Sidebar'

function Personalcard(){
   useEffect(()=>{
    document.title='Личный кабинет | LMS ULSTU';
  });
  return (
      <div className="container mt-4 ">
      	<div className="row">
      		<aside className="col-md-3">
      			<Sidebar />
      		</aside>
      		<section className="col-md-9">
      			Личный кабинет
      		</section>
        </div>
      </div>
  );
}

export default Personalcard;
