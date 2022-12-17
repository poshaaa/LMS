import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function CategoryCourses(){
   useEffect(()=>{
    document.title='Факультет | LMS ULSTU';
  });
	return(
		<div className="container mt-4">
			 {/*Последние курсы*/}
	      <h3 className="pb-1 mb-4"> ИВК </h3>
	      <div className="row">
	        <div className="col-md-3 mb-4">
	          <div className="card">
	            <Link to="/detail/1"> <img src="/logo512.png" className="card-img-top" alt="..."/> </Link>
	            <div className="card-body">
	              <h5 className="card-title"> <Link to="/detail/1"> Заголовок курса </Link> </h5>
	             
	            </div>
	          </div>
	        </div>
	        <div className="col-md-3 mb-4">
	          <div className="card">
	            <a href="#"> <img src="/logo512.png" className="card-img-top" alt="..."/> </a>
	            <div className="card-body">
	              <h5 className="card-title"> <a href="#"> Заголовок курса </a> </h5>
	             
	            </div>
	          </div>
	        </div>
	        <div className="col-md-3 mb-4">
	          <div className="card">
	            <a href="#"> <img src="/logo512.png" className="card-img-top" alt="..."/> </a>
	            <div className="card-body">
	              <h5 className="card-title"> <a href="#"> Заголовок курса </a> </h5>
	             
	            </div>
	          </div>
	        </div>
	        <div className="col-md-3 mb-4">
	          <div className="card">
	            <a href="#"> <img src="/logo512.png" className="card-img-top" alt="..."/> </a>
	            <div className="card-body">
	              <h5 className="card-title"> <a href="#"> Заголовок курса </a> </h5>
	             
	            </div>
	          </div>
	        </div>
	                <div className="col-md-3 mb-4">
	          <div className="card">
	            <Link to="/detail/1"> <img src="/logo512.png" className="card-img-top" alt="..."/> </Link>
	            <div className="card-body">
	              <h5 className="card-title"> <Link to="/detail/1"> Заголовок курса </Link> </h5>
	             
	            </div>
	          </div>
	        </div>
	        <div className="col-md-3 mb-4">
	          <div className="card">
	            <a href="#"> <img src="/logo512.png" className="card-img-top" alt="..."/> </a>
	            <div className="card-body">
	              <h5 className="card-title"> <a href="#"> Заголовок курса </a> </h5>
	             
	            </div>
	          </div>
	        </div>
	        <div className="col-md-3 mb-4">
	          <div className="card">
	            <a href="#"> <img src="/logo512.png" className="card-img-top" alt="..."/> </a>
	            <div className="card-body">
	              <h5 className="card-title"> <a href="#"> Заголовок курса </a> </h5>
	             
	            </div>
	          </div>
	        </div>
	        <div className="col-md-3 mb-4">
	          <div className="card">
	            <a href="#"> <img src="/logo512.png" className="card-img-top" alt="..."/> </a>
	            <div className="card-body">
	              <h5 className="card-title"> <a href="#"> Заголовок курса </a> </h5>
	             
	            </div>
	          </div>
	        </div>
	      </div>
	      {/*КОНЕЦ Последние курсы*/}
	  	  {/*Пагинация*/}
	  	  <nav aria-label="Page navigation example">
		  <ul className="pagination mt-4 pagination justify-content-center">
		    <li className="page-item"><a className="page-link" href="#">Предыдущая</a></li>
		    <li className="page-item"><a className="page-link" href="#">1</a></li>
		    <li className="page-item"><a className="page-link" href="#">2</a></li>
		    <li className="page-item"><a className="page-link" href="#">3</a></li>
		    <li className="page-item"><a className="page-link" href="#">Следующая</a></li>
		  </ul>
		  </nav>
	  	  {/*КОНЕЦ Пагинация*/}
      </div>
		);
}

export default CategoryCourses;
