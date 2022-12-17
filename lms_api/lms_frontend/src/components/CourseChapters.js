import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import TeacherSidebar from './Teacher/TeacherSidebar'
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';
function CourseChapters(){
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
                        <h5 className="card-header"> Все файлы курса </h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead> 
                                    <tr>
                                        <th>Название курса</th>
                                        <th> Видео </th>
                                        <th>Комментарии</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td><Link to="/">Алгоритмы и структуры данных</Link></td>
                                    <td> 
                                        <video controls width="300" >
                                            <source src="{chapter.video.url}" />
                                        </video>
                                    </td>
                                    <td>
                                        <Link className="btn btn-dark text-white btn-sm active ms-2" to="/edit-chapter/1"><i className="bi bi-pencil-square"></i></Link>
                                        <button className="btn btn-danger btn-sm active ms-1"><i className="bi bi-trash3-fill"></i></button>
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

export default CourseChapters;