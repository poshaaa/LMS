import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import Sidebar from './Sidebar'

function Mycourses(){
   useEffect(()=>{
    document.title='Мои курсы | LMS ULSTU';
  });
	return(
     <div className="container mt-4 ">
        <div className="row">
          <aside className="col-md-3">
            <Sidebar />
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

export default Mycourses;