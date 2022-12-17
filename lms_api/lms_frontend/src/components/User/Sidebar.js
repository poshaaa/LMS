import {Link} from 'react-router-dom';
function Sidebar() {
  return (
	<div className="card">
		<div className="list-group list-group-flush">
			<Link to='/user-personalcard' className="list-group-item list-group-item-action"> Личный кабинет</Link>
			<Link to='/user-my-courses' className="list-group-item list-group-item-action"> Курсы</Link>
			<Link to='/user-my-favoritecourses' className="list-group-item list-group-item-action"> Избранные курсы</Link>
			<Link to='/user-profile-settings' className="list-group-item list-group-item-action"> Настройки профиля</Link>
			<Link to='/user-change-password' className="list-group-item list-group-item-action"> Сменить пароль</Link>
			<Link to='/user-login' className="list-group-item list-group-item-action text-danger"> Выйти</Link>
		</div>
	</div>
  );
}

export default Sidebar;