import {Link} from 'react-router-dom';
import Allcourses from './Allcourses';
import ImgHome from './ImgHome'
import Teachers from './Teachers'
import {useEffect} from 'react';

function Home() {
   useEffect(()=>{
    document.title='Главная страница | LMS ULSTU';
  });
  return (
    <>
    <div className="row">
        <ImgHome />
    </div>
    <div className="container-fluid bg-black " align="center">
    <div className="container bg-black p-5" align="center">
    <h3 className="pb-1 mb-4 text-light text-start fs-1"> Последние курсы <Link to="/all-courses" className="float-end text-decoration-none text-reset text-muted fs-3"> Все курсы </Link> </h3>
      {/*Последние курсы*/}
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1"> <img src="ImgCourses\AISD.png" className="card-img-top" alt="..."/> </Link>
            <div className="card-body">
              <h5 className="card-title "> <Link className="text-decoration-none text-reset" to="/detail/1"> Алгоритмы и структуры данных </Link> </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"> <img src="ImgCourses\PHILOSOPHY.png" className="card-img-top" alt="..."/> </a>
            <div className="card-body">
            <h5 className="card-title "> <Link className="text-decoration-none text-reset" to="/"> Философия <br/>  <br/> </Link> </h5>
             
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"> <img src="ImgCourses\PTI.png" className="card-img-top" alt="..."/> </a>
            <div className="card-body">
              <h5 className="card-title"> <a className="text-decoration-none text-reset" href="#"> Прикладная теория информации </a> </h5>
             
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"> <img src="ImgCourses\MATH.png" className="card-img-top" alt="..."/> </a>
            <div className="card-body">
              <h5 className="card-title"> <a className="text-decoration-none text-reset" href="#"> Теория вероятности и мат.статистики </a> </h5>
             
            </div>
          </div>
        </div>
      </div>
      {/*КОНЕЦ Последние курсы
      {/* <div className="row">
        <Teachers />
      </div> */}
    <h3 className="text-light pb-1 mb-4 mt-5"> Мотивация дня</h3>
    {/* Отзывы студентов*/}
      <div id="carouselExampleIndicators" className="carousel slide bg-dark bg-gradient text-white py-5" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Нужно много работать, чтобы чего-то достичь!</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Ярушкина Н.Г. <cite title="Source Title">"Интервью с ректором"</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Практика, практика и еще раз практика!</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Родионов В.В. <cite title="Source Title">"Цитата дня"</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Не требуй от компьютера того, что сам не можешь до него грамотно донести</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Шишкин В.В. <cite title="Source Title">"Примерный смысл"</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    {/*Отзывы студентов */}

    </div>
    </div>
      <div className="d-flex justify-content-center mt-4">
          <div className="card mt-4 mb-3 border-0">
            <div className="row">
              <div className="col-md-7">
              <img src="/ImgHome/MoreULSTU.png"  className="img-fluid rounded-start" alt="FIST image"/>
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <p className="card-title fs-2"><b>ПРЕПОДАВАТЕЛЮ <br/>УЛГТУ</b></p>
                  <ul className="list-group fs-3 border-0 ">
                    <li><a className="text-decoration-none text-reset" href="https://lk.ulstu.ru/?q=auth%2Flogin" target="_blank">личный кабинет УлГТУ</a></li>
                    <li><a className="text-decoration-none text-reset" href="https://lk.ulstu.ru/?q=auth%2Flogin&redirect_uri=https%3A%2F%2Flk.ulstu.ru%2Ftimetable%2Foidc%2Fredirect&nonce=af4949c67227cbf7ac595d37243e4bd6&client_id=77dfccdb56ed3ac2d67c5aec877787e62946b77a21f54a543491db4faa882283&response_type=code&state=740a6d074ae915bb26a2d5dade8686fb&scope=openid" target="_blank"> расписание занятий </a></li>
                    <li><a className="text-decoration-none text-reset" href="http://lib.ulstu.ru/" target="_blank">научная библиотека</a></li>
                    <li><a className="text-decoration-none text-reset" href="https://open.ulstu.ru/" target="_blank">открытое образование</a></li>
                  </ul>
                  {/* <p className="card-text"></p> */}
                </div>
              </div>
            </div>
          </div>
    </div>

    </>
  );
}

export default Home;
