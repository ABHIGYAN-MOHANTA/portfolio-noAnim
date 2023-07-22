import React from "react";
import "./Certifications.css";

function Certifications() {
  return (<section id="Certifications">
    <div className="Certifications">
      <div className="Certifications-in container-fluid">
        <div className="container-fluid">
          <h1 className="Certifications-title">Certifications:</h1>
          
          <section id="certificate">
      <div id="certificate-carousel" class="carousel slide" data-ride="false">
        <div class="carousel-inner">
          <div class="carousel-item active container-fluid">
            <h2 class="certificate-text">
              Web Development Bootcamp
            </h2>
            <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-5abf0c3d-4049-4b07-adb2-f2f5dd47c83e.jpg" >
            <img
              class="certificate-image"              
              src="https://udemy-certificate.s3.amazonaws.com/image/UC-5abf0c3d-4049-4b07-adb2-f2f5dd47c83e.jpg"
              alt="Web Dev Certificate"
            />
            </a>
           
          </div>
          <div class="carousel-item container-fluid">
            <h2 class="certificate-text">
              Python Bootcamp Certificate
            </h2>
            <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-2d53523f-f6c3-4f70-a109-0bac4dc62c8a.jpg?v=1690014400000" >
            <img
              class="certificate-image"
              src="https://udemy-certificate.s3.amazonaws.com/image/UC-2d53523f-f6c3-4f70-a109-0bac4dc62c8a.jpg?v=1690014400000"
              alt="Python Bootcamp Certificate"
            />
              </a>

          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#certificate-carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#certificate-carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
         
        </div>
      </div>
    </div>
    </section>
  );
}

export default Certifications;
