import {Link} from 'react-router-dom';
function TeacherSidebar() {
  return (
	<div className="card">
		<div className="list-group list-group-flush">
			<Link to='/teacher-personalcard' className="list-group-item list-group-item-action"> Личный кабинет</Link>
			<Link to='/teacher-my-courses' className="list-group-item list-group-item-action"> Мои курсы</Link>
			<Link to='/teacher-add-courses' className="list-group-item list-group-item-action"> Добавить курс</Link>
			<Link to='/teacher-my-users' className="list-group-item list-group-item-action"> Мои студенты </Link>
			<Link to='/teacher-profile-settings' className="list-group-item list-group-item-action"> Настройки профиля</Link>
			<Link to='/teacher-change-password' className="list-group-item list-group-item-action"> Сменить пароль</Link>
			<Link to='/teacher-login' className="list-group-item list-group-item-action text-danger"> Выйти</Link>
		</div>
	</div>
  );
}

export default TeacherSidebar;