import {Link} from 'react-router-dom';
import {useEffect} from 'react';


function CourseDetail(){
   useEffect(()=>{
    document.title='О курсе | LMS ULSTU';
  });
	return(
		<div className="container mt-3"> 
			<div className="row"> 
				<div className="col-4"> 
					<img src="/logo512.png" className="card-img-top" alt="course image"/>
				</div>
					
				<div className="col-8"> 
					<h3>Course Title</h3>
					<p>Course Description </p>
					<p className="fw-bold"> Преподаватель: <Link to="/teacherdetail/1">Teacher 1</Link></p>
					<p className="fw-bold"> Длительность: 1ч 30мин</p>
					<p className="fw-bold"> Просмтотры: 453 студента</p>
					<p className="fw-bold"> Рейтинг:4/5</p>
				</div>
			{/*Видео-курсы*/}
				<div className="card mt-4">
					<h5 className="card-header">Видео курса</h5>
				  <ul className="list-group list-group-flush">
				    <li className="list-group-item">О чем этот курс? 
					    <span className="float-end"> 
					    	<span className="me-5">30мин </span>
					    	<button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal"> <i className="bi-youtube"></i> </button>
					    </span>
					{/* Video  Modal*/}
						<div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
						  <div className="modal-dialog modal-xl">
						    <div className="modal-content">
						      <div className="modal-header">
						        <h1 className="modal-title fs-5" id="videoModalLabel">Видео 1</h1>
						        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						      </div>
						      <div className="modal-body">
						        <div className="ratio ratio-16x9">
									  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
								</div>						      
							  </div>
						    </div>
						  </div>
						</div>
					{/*End Video  Modal*/}
				    </li>
				    <li className="list-group-item">Введение 
					    <span className="float-end"> 
					    	<span className="me-5"> 30мин </span>
					    	<button className="btn btn-sm btn-danger "> <i className="bi-youtube"></i> </button>
					    </span>
				    </li>
				    <li className="list-group-item">Глава 1
					    <span className="float-end"> 
					    	<span className="me-5"> 30мин </span>
					    	<button className="btn btn-sm btn-danger "> <i className="bi-youtube"></i> </button>
					    </span>
				    </li>
				  </ul>
				</div>
				{/*КОНЕЦ Видео-курсы*/}
				<h3 className="pb-1 mb-4 mt-5"> Связанные курсы </h3>
		      
		      {/*Последние курсы*/}
		      <div className="row">
		        <div className="col-md-3">
		          <div className="card">
		            <Link to="/detail/1"> <img src="/logo512.png" className="card-img-top" alt="..."/> </Link>
		            <div className="card-body">
		              <h5 className="card-title"> <Link to="/detail/1"> Заголовок курса </Link> </h5>
		             
		            </div>
		          </div>
		        </div>
		        <div className="col-md-3">
		          <div className="card">
		            <a href="#"> <img src="/logo512.png" className="card-img-top" alt="..."/> </a>
		            <div className="card-body">
		              <h5 className="card-title"> <a href="#"> Заголовок курса </a> </h5>
		             
		            </div>
		          </div>
		        </div>
		       {/*КОНЕЦ Последние курсы */} 
		       </div>
		    </div>   
		</div>
			
	);
}

export default CourseDetail;