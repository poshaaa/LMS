import {Link} from 'react-router-dom';
import {useEffect} from 'react';


function Register(){
   useEffect(()=>{
    document.title='Регистрация | LMS ULSTU';
  });
  return (
      <div className="conteiner mt-4">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card"> 
              <h5 className="card-header"> Регистрация </h5>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">ФИО (полностью)</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Электронная почта</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Имя пользователя</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Факультет</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Курс и группа</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Запомнить меня</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
