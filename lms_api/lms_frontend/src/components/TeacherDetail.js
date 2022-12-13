import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function TeacherDetail(){
   useEffect(()=>{
    document.title='О преподавателе | LMS ULSTU';
  });
	return(
		<div className="container mt-3"> 
			<div className="row"> 
				<div className="col-4"> 
					<img src="/logo512.png" className="card-img-top" alt="teacher"/>
				</div>
					
				<div className="col-8"> 
					<h3>Шишкин Вадим Викторинович</h3>
					<p className="fw-bold"> Квалификация: Доцент, к.т.н. </p>
					<p className="fw-bold"> Дисциплины: <Link to="/">АИСД</Link></p>
					<p className="fw-bold"> Кафедра: <Link to="/category/FISTIVK">ИВК</Link></p>
					<p className="fw-bold"> Электронная почта: shishkin@mail.ru</p>
				</div>
			{/*Курсы*/}
				<div className="card mt-4">
					<h5 className="card-header">Курсы</h5>
				  <div className="list-group list-group-flush">
				    <Link to="/detail/1" className="list-group-item list-group-item-action">Алгоритмы и структуры данных 1</Link>
				    <Link to="/detail/1" className="list-group-item list-group-item-action">Алгоритмы и структуры данных 2</Link>
				    <Link to="/detail/1" className="list-group-item list-group-item-action">Алгоритмы и структуры данных 3</Link>
				  </div>
				</div>
				{/*КОНЕЦ Видео-курсы*/}
		       </div>
		    </div> 
			
	);
}

export default TeacherDetail;