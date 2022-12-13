import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/teacher/';
function TeacherRegister() {

  const [teacherLoginStatus, setteacherLoginStatus] = useState(false)
  useEffect(() => {
    const teacherLoginStatusOk = localStorage.getItem('teacherLoginStatus')
    setteacherLoginStatus(teacherLoginStatusOk)
  })
  useEffect(() => {
    document.title = 'Преподаватели | LMS ULSTU';
    if (teacherLoginStatus) {
      debugger
      window.location.href = '/teacher-personalcard';
    };

  }, [teacherLoginStatus]
  );

  const [teacherData, setteacherData] = useState({
    full_name: '',
    teacher_profile_img: '',
    email: '',
    password: '',
    qualification: '',
    mobile_number: '',
    status: ''
  });

  //Change Element value
  const handleChange = (event) => {
    setteacherData({
      ...teacherData,
      [event.target.name]: event.target.value
    });
  }
  //End

  //Submit Form
  const submitForm = (e) => {
    e.preventDefault()
    const teacherFormData = new FormData();
    teacherFormData.append("full_name", teacherData.full_name)
    teacherFormData.append("teacher_profile_img", teacherData.teacher_profile_img)
    teacherFormData.append("email", teacherData.email)
    teacherFormData.append("password", teacherData.password)
    teacherFormData.append("qualification", teacherData.qualification)
    teacherFormData.append("mobile_number", teacherData.mobile_number)
    axios.post(baseUrl, teacherFormData).then((response) => {
      setteacherData({
        'full_name': '',
        'teacher_profile_img': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile_number': '',
        'status': 'success'
      });
      setteacherLoginStatus(true)
    }).catch(error => {
      console.log(error);
      setteacherData({ 'status': 'error' })
    }
    )

  };
  //End Submit Form
  //const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')

  return (
    <div className="conteiner mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          {teacherData.status == 'success' && <p className="text-success">Регистрация успешна, добро пожаловать!</p>}
          {teacherData.status == 'error' && <p className="text-danger">Что-то пошло не так...</p>}
          <div className="card">
            <h5 className="card-header"> Регистрация </h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">ФИО (полностью)</label>
                  <input value={teacherData.full_name} onChange={handleChange} name="full_name" type="text" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Выбрать фото</label>
                  <input value={teacherData.teacher_profile_img} onChange={handleChange} name="teacher_profile_img" className="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Электронная почта</label>
                  <input value={teacherData.email} onChange={handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                  <input value={teacherData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Квалификация</label>
                  <input value={teacherData.qualification} onChange={handleChange} name="qualification" type="text" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Номер телефона</label>
                  <input value={teacherData.mobile_number} onChange={handleChange} name="mobile_number" type="text" className="form-control" aria-describedby="emailHelp" />
                </div>
                <button onClick={submitForm} type="submit" className="btn btn-primary">Зарегистрироваться</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherRegister;
