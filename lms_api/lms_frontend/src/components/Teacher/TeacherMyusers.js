import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import TeacherSidebar from './TeacherSidebar'

function TeacherMyusers(){
   useEffect(()=>{
    document.title='Мои студенты | LMS ULSTU';
  });
	return(
     <div className="container mt-4 ">
        <div className="row">
          <aside className="col-md-3">
            <TeacherSidebar />
          </aside>
          <section className="col-md-9">
            	<div className="card">
            		<h5 className="card-header"> Мои студенты </h5>
            		<div className="card-body">
            			<table className="table table-bordered">
            				<thead> 
            					<tr>
            						<th>Имя</th>
            						<th>Курс</th>
            						<th>Действие</th>
            					</tr>
            				</thead>
            				<tbody>
            					<td>Дьячкова П.С.</td>
            					<td><Link to="/">АИСД</Link></td>
            					<td>
            						<button className="btn btn-danger btn-sm active">Удалить</button>
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

export default TeacherMyusers;