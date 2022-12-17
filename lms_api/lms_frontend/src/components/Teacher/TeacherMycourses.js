import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';
function TeacherMycourses(){
	const [courseData,setCourseData]=useState([]);

	const teacherId=localStorage.getItem('teacherId')

   useEffect(()=>{
    document.title='Мои курсы | LMS ULSTU';
	try{
		axios.get(baseUrl+'/teacher-courses/'+teacherId)
		.then((res)=>{
			setCourseData(res.data);
		});
	}catch(error){
		console.log(error);
	}
},[]);

	// console.log(courseData);


	return(
     <div className="container mt-4 ">
        <div className="row">
          <aside className="col-md-3">
            <TeacherSidebar />
          </aside>
          <section className="col-md-9">
            	<div className="card">
            		<h5 className="card-header"> Мои курсы </h5>
            		<div className="card-body">
            			<table className="table table-bordered">
            				<thead> 
            					<tr>
            						<th>Название курса</th>
            						<th>Преподаватель</th>
            						<th>Действие</th>
            					</tr>
            				</thead>
            				<tbody>
								{courseData.map((course,index) =>
									<tr>
										<td><Link to="/all-chapters/1">{course.title}</Link></td>
										<td><Link to="/">{course.teacher}</Link></td>
										<td>
											<Link className="btn btn-dark text-white btn-sm active ms-2" to="/edit-course/1"><i className="bi bi-pencil-square"></i></Link>
											<Link className="btn btn-success text-white btn-sm active ms-2" to={'/teacher-add-chapter/'+course.id}><i class="bi bi-file-earmark-plus"></i></Link>
											<button className="btn btn-danger btn-sm active ms-2"><i className="bi bi-trash3-fill"></i></button>
										</td>
									</tr>
								)}
            				</tbody>
            			</table>
            		</div>
            	</div>
            </section >
        </div>
      </div>		
		)
}

export default TeacherMycourses;