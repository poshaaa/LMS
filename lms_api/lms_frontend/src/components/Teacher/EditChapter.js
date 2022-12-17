import {useEffect} from 'react';
import TeacherSidebar from './TeacherSidebar'

function EditChapter(){
   useEffect(()=>{
    document.title='Редактирование файла | LMS ULSTU';
  });
  return(
     <div className="container mt-4 ">
        <div className="row">
          <aside className="col-md-3">
            <TeacherSidebar />
          </aside>
          <section className="col-md-9">
              <div className="card">
                <h5 className="card-header"> Редактирование файл</h5>
                  <div className="card-body">
                    <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Название</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Описание</label>
                      <textarea className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="video" className="form-label">Видео</label>
                      <input className="form-control" type="file" id="formFile"/>
                        <video controls width="900" >
                           <source src="{chapter.video.url}" />
                        </video>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Заметки</label>
                      <textarea type="email" className="form-control"placeholder="В этом видео..." aria-describedby="emailHelp"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Обновить</button>
                    </form>
                </div>
              </div>
            </section >
        </div>
      </div>    
    )
}

export default EditChapter;