import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';
function TeacherMycourses(){
	const [courseData,setCourseData]=useState([]);
	
	const teacherId=localStorage.getItem('teacherId')
	console.log(teacherId);

   useEffect(()=>{
    document.title='Мои курсы | LMS ULSTU';
	try{
		axios.get(baseUrl+'/teacher-courses/1')
		.then((res)=>{
			setCourseData(res.data);
		});
	}catch(error){
		console.log(error);
	}
},[]);

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
            					<td>Алгоритмы и структуры данных</td>
            					<td><Link to="/">Шишкин В.В.</Link></td>
            					<td>
            						<button className="btn btn-danger btn-sm active">Удалить</button>
									<Link className="btn btn-success btn-sm active ms-2" to="/teacher-add-chapter/2">Добавить файлы</Link>
            					</td>
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