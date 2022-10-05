import React from "react";
import "./Projects.css";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton,
  CRow,
  CCol
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Image1 from "./images/Keeper.png";
import Image2 from "./images/dbank.png";

function Projects() {
  return (
    <section id="Projects">
      <div className="Projects">
        <div className="Projects-in container-fluid">
          <div className="container-fluid">
            <h1 className="projects-heading">Projects:</h1>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}> 
            {/* Change the cols: 4 to change number of project */}
              <CCol xs>
                <CCard>
                  <CCardImage orientation="top" src={Image1} />
                  <CCardBody>
                    <CCardTitle>Google Keep Clone</CCardTitle>
                    <CCardText>Google Keep Clone made with React!</CCardText>
                    <CButton
                      color="dark"
                      shape="rounded-pill"
                      href="https://github.com/ABHIGYAN-MOHANTA/Google-Keep-Clone"
                    >
                      Visit Project
                    </CButton>
                  </CCardBody>
                </CCard>              
              </CCol>
              
              <CCol xs>
                <CCard>
                  <CCardImage orientation="top" src={Image2} />
                  <CCardBody>
                    <CCardTitle>DBank</CCardTitle>
                    <CCardText>Decentralised Bank in DFinity!</CCardText>
                    <CButton
                      color="dark"
                      shape="rounded-pill"
                      href="https://github.com/ABHIGYAN-MOHANTA/Decentralised-Bank"
                    >
                      Visit Project
                    </CButton>
                  </CCardBody>
                </CCard>              
              </CCol>
            </CRow>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
