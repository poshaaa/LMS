import {Link} from 'react-router-dom';

function Header() {
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
      <Link className="navbar-brand" to="/"> <p className="fs-1"><b>LMS.<font color="blue"><i>ULSTU</i></font></b></p></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Главная</Link>
            <Link className="nav-link" to="/all-courses">Курсы</Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Преподаватель 
              </a>
              <ul className="dropdown-menu">
                {teacherLoginStatus!='true' && 
                  <>
                      <li><Link className="dropdown-item" to="/teacher-login">Вход</Link></li>
                      <li><Link className="dropdown-item" to="/teacher-register">Регистрация</Link></li>
                  </>
                }
                <li><Link className="dropdown-item" to="/teacher-personalcard">Личный кабинет</Link></li>
                <li><Link className="dropdown-item" to="teacher-logout">Выйти</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Пользователь
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/user-login">Вход</Link></li>
                <li><Link className="dropdown-item" to="/user-register">Регистрация</Link></li>
                <li><Link className="dropdown-item" to="/user-personalcard">Личный кабинет</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/user-logout">Выйти</Link></li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
