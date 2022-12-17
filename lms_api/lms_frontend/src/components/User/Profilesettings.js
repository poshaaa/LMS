import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import Sidebar from './Sidebar'

function Profilesettings(){
   useEffect(()=>{
    document.title='Настройки профиля | LMS ULSTU';
  });
  return (
      <div className="container mt-4 ">
      	<div className="row">
      		<aside className="col-md-3">
      			<Sidebar />
      		</aside>
      		<section className="col-md-9">
            <div className="card">
              <h5 className="card-header"> Настройки профиля</h5>
              <div className="card-body">
                  <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">ФИО (полностью)</label>
                    <div className="col-sm-10">
                      <input type="text" readonly className="form-control" id="staticEmail" />
                    </div>
                  </div>
          			  <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Электронная почта</label>
                    <div className="col-sm-10">
                      <input type="text" readonly className="form-control" id="staticEmail" />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Фото профиля</label>
                    <div className="col-sm-10">
                      <input type="file" className="form-control" id="inputPassword"/>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Пароль</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                  </div>
                  <hr/>
                  <button className="btn btn-primary">Обновить</button>
                </div> 
              </div>
      		</section>
        </div>
      </div>
  );
}

export default Profilesettings;
