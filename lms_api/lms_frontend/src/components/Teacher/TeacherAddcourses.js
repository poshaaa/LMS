import {useEffect, useState} from 'react';
import axios from 'axios';
import TeacherSidebar from './TeacherSidebar'

function TeacherAddcourses(){
  const baseUrl='http://127.0.0.1:8000/api';
  const [cats,setCats]=useState([]);
   useEffect(()=>{
    document.title='Добавить курс | LMS ULSTU';
    try{
			axios.get(baseUrl+'/category')
			.then((res)=>{
        setCats(res.data);
			});
		}catch(error){
			console.log(error);
		}
  },[]);

  // console.log(cats);
  
  return(
     <div className="container mt-4 ">
        <div className="row">
          <aside className="col-md-3">
            <TeacherSidebar />
          </aside>
          <section className="col-md-9">
              <div className="card">
                <h5 className="card-header"> Добавить курс</h5>
                  <div className="card-body">
                    <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Кафедра</label>
                      <select name='category' className='form-control'>
                        {cats.map((category,index)=>{return <option key={index}>{category.title}</option>})}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Название курса</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Описание</label>
                      <textarea className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="video" className="form-label">Видео к курсу</label>
                      <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Добавить</button>
                    </form>
                </div>
              </div>
            </section >
        </div>
      </div>    
    )
}

export default TeacherAddcourses;