import {useEffect, useState} from 'react';
import axios from 'axios';
import TeacherSidebar from './TeacherSidebar'

function TeacherAddcourses(){
  const baseUrl='http://127.0.0.1:8000/api';
  const [cats,setCats]=useState([]);
  const [courseData,setCourseData]=useState({
    category:'',
    title:'',
    description:'',
    cousre_img:''
  });
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

  const handleChange=(event)=>{
    setCourseData({
      ...courseData,
      [event.target.name]:event.target.value
    });
  }
  const handleFileChange=(event)=>{
    setCourseData({
      ...courseData,
      [event.target.name]:event.target.files[0]
    });
  }

  const formSubmit=(e)=>{
    e.preventDefault()
    const _formData=new FormData();
    _formData.append('category',courseData.category);
    _formData.append('teacher',48);
    _formData.append('title',courseData.title);
    _formData.append('description',courseData.description);
    _formData.append('course_img',courseData.cousre_img);
    try{
      axios.post(baseUrl+'/course/',_formData,{
        headers:{
          'Content-Type' : 'multipart/form-data'
        }
      }
        ).then((res)=>{
      console.log(res.data);
    });
    }catch(error){
      console.log(error);
    }
    
  };

  //console.log(cats);
  
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
                      <label for="title" className="form-label">Название курса</label>
                      <input type="text" onChange={handleChange} name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="description"  className="form-label">Описание</label>
                      <textarea onChange={handleChange} name="description" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                      <label for="image" className="form-label">Обложка курса </label>
                      <input className="form-control" onChange={handleFileChange} name="cousre_img" type="file" id="formFile"/>
                      <img src="/"/>
                    </div>
                    <div className="mb-3">
                      <label for="category" className="form-label">Кафедра</label>
                      <select onChange={handleChange} name="category" className='form-control'>
                        {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                      </select>
                    </div>
                    <button type="buttont" onClick={formSubmit} className="btn btn-primary">Добавить</button>
                    </form>
                </div>
              </div>
            </section >
        </div>
      </div>    
    )
}

export default TeacherAddcourses;