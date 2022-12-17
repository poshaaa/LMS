import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function Login(){
	const [studentLoginData,setstudentLoginData]=useState({
		email:'',
		password:''
	});
	const handleChange=(event)=>{
		setstudentLoginData({
			...studentLoginData, 
			[event.target.name]:event.target.value
		});
	};

	const submitForm=(e)=>{
		e.preventDefault()
		console.log(studentLoginData);
		const studentFormData=new FormData();
		studentFormData.append('email',studentLoginData.email)
		studentFormData.append('password',studentLoginData.password)
		try{
			axios.post(baseUrl+'/student-login',studentFormData).then((res)=>{
				if(res.data.bool==true){
					console.log(res.data);
					localStorage.setItem('studentLoginStatus',true);
					// localStorage.setItem('studentId', res.data.student_id);
					window.location.href='/user-personalcard';
				}
			});
		}catch(error){
			console.log(error);
		}
	};

	const studentLoginStatus=localStorage.getItem('studentLoginStatus')
	if(studentLoginStatus=='true'){
		window.location.href='/user-personalcard';
	}

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
										  <label htmlFor="exampleInputEmail1" className="form-label">Электронная почта</label>
										  <input name="email" type="email" value={studentLoginData.email} onChange={handleChange} className="form-control"/>
									  </div>
									  <div className="mb-3">
										  <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
										  <input name="password" type="password" value={studentLoginData.password} onChange={handleChange} className="form-control"/>
									  </div>
									  <button type="submit" onClick={submitForm} className="btn btn-primary">Войти</button>
									  </form>
						  </div>
					  </div>
			  </div>	
		  </div>
	  </div>	
);
}

export default Login;
