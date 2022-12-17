import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/student/';
function Register(){

  const [studentLoginStatus, setstudentLoginStatus] = useState(false)
  useEffect(() => {
    const studentLoginStatusOk = localStorage.getItem('studentLoginStatus')
    setstudentLoginStatus(studentLoginStatusOk)
  })
  useEffect(() => {
    document.title = 'Преподаватели | LMS ULSTU';
    if (studentLoginStatus) {
      debugger
      window.location.href = '/student-personalcard';
    };

  }, [studentLoginStatus]
  );

  const [studentData, setstudentData] = useState({
    full_name: '',
    student_profile_img: '',
    email: '',
    password: '',
    group: '',
    necessary_categories: '',
    studylevel:'',
    status: ''
  });

  //Change Element value
  const handleChange = (event) => {
    setstudentData({
      ...studentData,
      [event.target.name]: event.target.value
    });
  }
  //End

  //Submit Form
  const submitForm = (e) => {
    e.preventDefault()
    const studentFormData = new FormData();
    studentFormData.append("full_name", studentData.full_name)
    studentFormData.append("student_profile_img", studentData.student_profile_img)
    studentFormData.append("email", studentData.email)
    studentFormData.append("password", studentData.password)
    studentFormData.append("group", studentData.group)
    studentFormData.append("necessary_categories", studentData.necessary_categories)
    studentFormData.append("necessary_categories", studentData.studylevel)
    axios.post(baseUrl, studentFormData).then((response) => {
      setstudentData({
        'full_name': '',
        'student_profile_img': '',
        'email': '',
        'password': '',
        'group': '',
        'necessary_categories': '',
        'studylevel': '',
        'status': 'success'
      });
      setstudentLoginStatus(true)
    }).catch(error => {
      console.log(error);
      setstudentData({ 'status': 'error' })
    }
    )

  };
  //End Submit Form
  return (
      <div className="conteiner mt-4">
        <div className="row">
          <div className="col-6 offset-3">
          {studentData.status == 'success' && <p className="text-success">Регистрация успешна, добро пожаловать!</p>}
          {studentData.status == 'error' && <p className="text-danger">Что-то пошло не так...</p>}
            <div className="card"> 
              <h5 className="card-header"> Регистрация </h5>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">ФИО (полностью)</label>
                    <input type="text" value={studentData.full_name} name="full_name" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Электронная почта</label>
                    <input type="email"value={studentData.email}  name="email"  onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Пароль</label>
                    <input type="password" value={studentData.password} name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Факультет</label>
                    <input type="text" value={studentData.necessary_categories} name="necessary_categories" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Курс</label>
                    <input type="text" value={studentData.studylevel} name="studylevel" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Группа</label>
                    <input type="text" value={studentData.group} name="group" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Запомнить меня</label>
                  </div>
                  <button type="submit" onClick={submitForm} className="btn btn-primary">Зарегистрироваться</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
