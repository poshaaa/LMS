import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function TeacherLogin(){
	const [teacherLoginData,setteacherLoginData]=useState({
		email:'',
		password:''
	});
	const handleChange=(event)=>{
		setteacherLoginData({
			...teacherLoginData, 
			[event.target.name]:event.target.value
		});
	};

	const submitForm=(e)=>{
		e.preventDefault()
		console.log(teacherLoginData);
		const teacherFormData=new FormData();
		teacherFormData.append('email',teacherLoginData.email)
		teacherFormData.append('password',teacherLoginData.password)
		try{
			axios.post(baseUrl+'/teacher-login',teacherFormData).then((res)=>{
				if(res.data.bool==true){
					console.log(res.data);
					localStorage.setItem('teacherLoginStatus',true);
					localStorage.setItem('teacherId', res.data.teacher_id);
					window.location.href='/teacher-personalcard';
				}
			});
		}catch(error){
			console.log(error);
		}
	};

	const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
	if(teacherLoginStatus=='true'){
		window.location.href='/teacher-personalcard';
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
											<input name="email" type="email" value={teacherLoginData.email} onChange={handleChange} className="form-control"/>
										</div>
										<div className="mb-3">
											<label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
											<input name="password" type="password" value={teacherLoginData.password} onChange={handleChange} className="form-control"/>
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

export default TeacherLogin;
