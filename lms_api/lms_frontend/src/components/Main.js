import Header from './Header';
import Home from './Home';
//Студент
import Login from './User/Login';
import Register from './User/Register';
import Personalcard from './User/Personalcard';
import Mycourses  from './User/Mycourses';
import Favoritecourses from './User/Favoritecourses';
import Profilesettings from './User/Profilesettings';
import Changepassword from './User/Changepassword';
//Преподаватель
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherPersonalcard from './Teacher/TeacherPersonalcard';
import TeacherMycourses  from './Teacher/TeacherMycourses';
import TeacherAddcourses  from './Teacher/TeacherAddcourses';
import TeacherAddChapter  from './Teacher/TeacherAddChapter';
import TeacherMyusers  from './Teacher/TeacherMyusers';
import TeacherProfilesettings from './Teacher/TeacherProfilesettings';
import TeacherChangepassword from './Teacher/TeacherChangepassword';
import TeacherDetail from './TeacherDetail'

//Список главной страницы
import ImgHome from './ImgHome';
import CourseDetail from './CourseDetail';
import CategoryCourses from './CategoryCourses';
import Allcourses from './Allcourses';
import Teachers from './Teachers'

import Footer from './Footer';
import {Routes as Switch, Route} from 'react-router-dom';



function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/category/:category_slug" element={<CategoryCourses />} />
        <Route path="/all-courses" element={<Allcourses />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/teacherdetail/:teacher_id" element={<TeacherDetail />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-personalcard" element={<Personalcard />} />
        <Route path="/user-my-courses" element={<Mycourses />} />
        <Route path="/user-my-favoritecourses" element={<Favoritecourses />} />
        <Route path="/user-profile-settings" element={<Profilesettings />} />
        <Route path="/user-change-password" element={<Changepassword />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-logout" element={<TeacherLogout />} />
        <Route path="/teacher-personalcard" element={<TeacherPersonalcard />} />
        <Route path="/teacher-my-courses" element={<TeacherMycourses />} />
        <Route path="/teacher-add-courses" element={<TeacherAddcourses />} />
        <Route path="/teacher-add-chapter/:course_id" element={<TeacherAddChapter />} />
        <Route path="/teacher-my-users" element={< TeacherMyusers />} />
        <Route path="/teacher-profile-settings" element={<TeacherProfilesettings />} />
        <Route path="/teacher-change-password" element={<TeacherChangepassword />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
