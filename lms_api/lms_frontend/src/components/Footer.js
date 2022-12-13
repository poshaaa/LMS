function Footer() {
  return (
  <footer className="text-muted text-bg-dark py-3 border-top mt-5">
    <div className="container">
      <p className="text-center mb-1 fs-2">
        Если за знаниями, то в политех!
      </p>
      <div className="row ">
        <div className="col-sm-6">
          <div className="card text-bg-dark border-0">
            <div className="card-body">
              <h5 className="card-title">Контакты отдела "Информационных систем"</h5>
              <p className="card-text">Телефон: 8(8422)77-81-63 <br/> Адрес электронной почты: lms.ulstu@mail.ru <br/> Кабинет 619, корпус №6 (главный корпус), этаж 6</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card text-bg-dark border-0">
            <div className="card-body">
              <h5 className="card-title">Курсы и успеваемость</h5>
              <p className="card-text">Мои курсы <br/> Моя кафедра <br/> Успеваемость</p>
              <p className="mb-0 text-muted float-end">© 2022 Posha_ps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
