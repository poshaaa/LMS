import {useEffect} from 'react';
import TeacherSidebar from './TeacherSidebar'

function TeacherPersonalcard(){
   useEffect(()=>{
    document.title='Личный кабинет | LMS ULSTU';
  });
  return (
      <div className="container mt-4 ">
      	<div className="row">
      		<aside className="col-md-3">
      			<TeacherSidebar />
      		</aside>
      		<section className="col-md-9">
      			Личный кабинет
      		</section>
        </div>
      </div>
  );
}

export default TeacherPersonalcard;
