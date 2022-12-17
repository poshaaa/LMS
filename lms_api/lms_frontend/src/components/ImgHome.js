import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import Stickers from './Stickers';
function ImgHome() {
  return (
    <div className="card bg-light text-black">
       <img src="/ImgHome/FIST.png" className="rounded mx-auto d-block" alt="FIST image"/>
      <div className="card-img-overlay">
        <div className="mask text-dark d-flex justify-content-center flex-column text-center">
        <h4 className="fs-1">
          <b> ФИСТ </b>
        </h4>
        </div>
          {/* <Stickers/> */}
        {/* <div className="row align-items-center progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
        </div>  */}
      </div>
    </div>
    // <div className="container-fluid">
    //   <img src="/ImgHome/FIST.png" className="rounded mx-auto d-block" alt="FIST image"/>
    // </div>
  );
}

export default ImgHome;
