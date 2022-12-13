import {useEffect} from 'react';

function Login(){
   useEffect(()=>{
    document.title='Вход | LMS ULSTU';
  });
  return (
      <div className="conteiner mt-4">
      	<div className="row">
	      	<div className="col-6 offset-3">
	          <div className="card"> 
	            <h5 className="card-header">Вход </h5>
	            <div className="card-body">
	              	<form>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">Имя пользователя</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						</div>
						<div className="mb-3">
							<label for="exampleInputPassword1" className="form-label">Пароль</label>
							<input type="password" className="form-control" id="exampleInputPassword1"/>
						</div>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
							<label className="form-check-label" for="exampleCheck1">Запомнить меня</label>
						</div>
						<button type="submit" className="btn btn-primary">Войти</button>
					</form>
	            </div>
	          </div>
	        </div>
        </div>
      </div>
  );
}

export default Login;
