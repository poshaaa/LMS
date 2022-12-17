import {useEffect, useState} from 'react';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios';
import {useParams} from 'react-router-dom';

function TeacherAddChapter(){
   useEffect(()=>{
    document.title='Добавить курс | LMS ULSTU';
  });
  const baseUrl='http://127.0.0.1:8000/api';
  const [cats,setCats]=useState([]);
  const [chapterData,setChapterData]=useState({
    course:'',
    title:'',
    description:'',
    video:'',
    remarks:''
  });

  const handleChange=(event)=>{
    setChapterData({
      ...chapterData,
      [event.target.name]:event.target.value
    });
  }
  const handleFileChange=(event)=>{
    setChapterData({
      ...chapterData,
      [event.target.name]:event.target.files[0]
    });
  }

  const {course_id}=useParams();

  const formSubmit=(e)=>{
    e.preventDefault()
    const _formData=new FormData();

    _formData.append('course',course_id);
    _formData.append('teacher',48);
    _formData.append('title',chapterData.title);
    _formData.append('description',chapterData.description);
    _formData.append('video',chapterData.video, chapterData.video.name);
    _formData.append('remarks',chapterData.remarks);
    try{
      axios.post(baseUrl+'/chapter/',_formData,{
        headers:{
          'content-type' : 'multipart/form-data'
        }
      }
        ).then((res)=>{
        window.location.href='/teacher-add-chapter/1';
    });
    }catch(error){
      console.log(error);
    }
    
  };

  return(
     <div className="container mt-4 ">
        <div className="row">
          <aside className="col-md-3">
            <TeacherSidebar />
          </aside>
          <section className="col-md-9">
              <div className="card">
                <h5 className="card-header"> Добавить файл</h5>
                  <div className="card-body">
                    <form>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Название</label>
                      <input type="text" onChange={handleChange} className="form-control" name="title" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Описание</label>
                      <textarea  onChange={handleChange} className="form-control" name="description"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="video" className="form-label">Видео к курсу</label>
                      <input  onChange={handleChange} className="form-control" id="video" type="video" name="video"/>
                      <video controls width="900" >
                           <source src="{chapter.video.url}" />
                        </video>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Заметки</label>
                      <textarea onChange={handleChange} name="remarks" className="form-control"placeholder="В этом видео..." aria-describedby="emailHelp"/>
                    </div>
                    <button type="button" onClick={formSubmit} className="btn btn-primary">Добавить</button>
                    </form>
                </div>
              </div>
            </section >
        </div>
      </div>    
    )
}

export default TeacherAddChapter;