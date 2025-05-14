import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'boxicons/css/boxicons.min.css';
import Navbar from './components/Navbar/Navbar';
import Complaint from './components/Complain/Complain';
import Login from './components/Login/Login';
import PreviewComplain from './components/Previewcomplain/PreviewComplain';
import Allcomplain from './components/Allcomplain/Allcomplain';
import Update from './components/Update';
import SignupForm from './components/Signup';
import AdminLogin from './components/Adminlogin/Adminlogin';
import ForgetPassword from './components/Forgetpassword';
import ResetPassword from './components/ResetPassword';
import ProtectedRouteComponents from './components/ProtectedRoute';
const { ProtectedRoute, AdminProtectedRoute } = ProtectedRouteComponents; 
import { AuthProvider } from './context/AuthContext';
import medicalWasteImage from './assets/clients/Medical-Waste.jpg';
import recycleImage from './assets/recycle.jpg';
import recycleImage2 from './assets/clients/recycling5.png';

import image1 from "./assets/clients/images.png";
import image2 from "./assets/clients/images (1).png";
import image3 from "./assets/clients/Capture.PNG";
import image4 from "./assets/clients/download (2).jfif";
import image5 from "./assets/clients/download (1).jfif";
import image6 from "./assets/clients/download (3).jfif";


import './App.css';

const Home = () => {
  return (
  <>
  <div className="hero-section">
      <div className="hero-content">
        <h1>Reimagine Waste, Reclaim the Future!</h1>
        <p>Protect Our Planet’s Future</p>
        <div className="hero-buttons">
          <button className="get-started-btn">Get Started</button>
          <button className="watch-video-btn">
            <i className="fa fa-play-circle"></i> Watch Video
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={recycleImage} alt="Recycling items" />
      </div>
    </div>


    <div className="main">
    <section id="clients" className="clients-section-bg">
  <div className="container1">
    <div className="row" data-aos="zoom-in">
      {[image1, image2, image3, image4, image5, image6].map((img, index) => (
        <div
          key={index}
          className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
        >
          <img src={img} className="img-fluid" alt={`client-${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>




    <section className="about-section" id="about-us">
  <div className="about-container">
    <h2 className="about-title">ABOUT US</h2>
    <div className="about-underline"></div>
    <div className="about-row">
      <div className="about-col about-col-left">
        <p>
          The <strong>‘ZeroBin’</strong> is a web-based platform designed to enable citizens to digitally submit <span className="about-highlight">complaints</span> to their local municipalities.
        </p>
        <ul className="about-list">
          <li>
            <span className="about-check">&#10003;</span>
            <span className="about-link">Complaining about waste or garbage problems near their locality.</span>
          </li>
          <li>
            <span className="about-check">&#10003;</span>
            <span className="about-link">See their complain Report and check if the work is done! or not.</span>
          </li>
          <li>
            <span className="about-check">&#10003;</span>
            <span className="about-link">people can take different ideas regarding recycling of waste through this website.</span>
          </li>
        </ul>
      </div>
      <div className="about-col about-col-right">
        <p>
          <span className="about-highlight">Complaining</span> about everyday waste problems to the municipality can be a frustrating and time-consuming task. This platform aims to streamline the waste management complaint process. With just a handheld device and internet access, users can quickly submit their concerns online. The system automatically forwards the complaints to the relevant municipal departments. Municipal admins can then acknowledge these complaints, helping users know whether their issues have been addressed or are still pending.
        </p>
        <button className="about-learn-btn">Learn More</button>
      </div>
    </div>
  </div>
</section>





<section id="why-us" className="why-us section-bg">
  <div className="container-fluid" data-aos="fade-up">
    <div className="row">
      {/* Content Column */}
      

        <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
        <div className="content">
          <h3>
            Guidelines implementation{" "}
            <strong>must for proper management of medical waste</strong>
          </h3>
          <p>
            A hospital is the last resort of hope for sick people who expect
            to get better and heal. However, shortcomings on the part of the
            hospital staff and management could instead have an adverse
            effect on public health. According to the annual health report published by the Department
            of Health Services in 2000/2001, there are 74 hospitals, 172
            Primary Health Care Units, 710 Health Posts and 3132 Sub-health
            Posts run by the government across Nepal. The number of
            healthcare institutions has certainly surged in the recent years.
            All healthcare facilities are required to follow the ‘National
            Health Care Waste Management Guidelines’ prepared by the National
            Health Research Council (NHRC).
          </p>
        </div>

        <div className="accordion-list">
          <ul>
            <li>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#accordion-list-1"
              >
                <span>01</span> “Wastes from health care institutions can be
                categorized as infectious or noninfectious."
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="accordion-list-1"
                className="collapse show"
                data-bs-parent=".accordion-list"
              >
                <p>
                  Infectious wastes include human, animal, or biological
                  wastes and any items that may be contaminated with
                  pathogens. Noninfectious wastes include toxic chemicals,
                  cytotoxic drugs, and radioactive, flammable, and explosive
                  wastes, reads the guideline.
                </p>
              </div>
            </li>

            <li>
              <a
                data-bs-toggle="collapse"
                data-bs-target="#accordion-list-2"
                className="collapsed"
              >
                <span>02</span> Implementation problem
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="accordion-list-2"
                className="collapse"
                data-bs-parent=".accordion-list"
              >
                <p>
                  However, not all hospitals are following the guidelines
                  mainly because of the lack of budget, lack of orientation
                  regarding medical waste management to waste handlers, and
                  flimsy monitoring from the government. Segregation of
                  medical waste is a vital part of hospital waste management.
                </p>
              </div>
            </li>

            <li>
              <a
                data-bs-toggle="collapse"
                data-bs-target="#accordion-list-3"
                className="collapsed"
              >
                <span>03</span> Dr Kedar Century, Executive Director at Bir
                Hospital said,
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="accordion-list-3"
                className="collapse"
                data-bs-parent=".accordion-list"
              >
                <p>
                  “We used to have an ideal waste management system before
                  the 2015 earthquake. But the earthquake damaged the
                  building where we had installed the autoclave device and
                  now we don’t have any space. The new building is currently
                  being used to accommodate patients.”
                </p>
                <p>
                  Management of medical waste at private hospitals is poorer
                  as compared to government-run hospitals due to lack of
                  monitoring. A report from the Ministry of Health and
                  Population shows private hospitals continue to burn, bury,
                  and dispose hazardous immunization waste mixed with
                  municipal waste.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="col-lg-5 d-flex align-items-center justify-content-center order-1 order-lg-2">
        <div className="med-image">
          <img src={medicalWasteImage} alt="Recycling items" />
      </div></div>      
    </div>
  </div>
</section>







<section class="skills">
<div className="left-skills">
  <div class="skills-image" data-aos="fade-right" data-aos-delay="100">
    <img src={recycleImage2} alt="" />
    </div>
    </div>
  

      <div class="container" data-aos="fade-up">

        <div class="row">
          
          <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Composition and Percentage of Waste Generation</h3>
            <p>
              Management of Municipal Solid Wastes: A Case Study in Limpopo Province, South Africa
            </p>

            <div class="skills-content">

              <div class="progress">
                <span class="skill">Plastics <i class="val">35%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "35%" }}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">Paper and Glass <i class="val">25%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">Food Waste  <i class="val">25%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">Garden Waste<i class="val">15%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "15%" }}></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>





    <section class="cta">
      <div class="container" data-aos="zoom-in">

        <div class="row">
          <div class="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> Here is the phone number of municipality.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="tel:+97716609952111">Call To Action</a>
          </div>
        </div>

      </div>
    </section>






    <section className="faq" id="faq">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Frequently Asked Questions</h2>
      <p>Waste management regulations and disposal methods.</p>
    </div>

    <div className="faq-list">
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">
          <i className="bx bx-help-circle icon-help"></i>
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-1" className="collapsed">
            What is waste management? 
            <i className="bx bx-chevron-down icon-show"></i>
            <i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
            <p>
              Waste management is the collection, transportation and disposal of waste materials.
            </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="200">
          <i className="bx bx-help-circle icon-help"></i>
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">
            How do I practice waste management at home? 
            <i className="bx bx-chevron-down icon-show"></i>
            <i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
            <p>
              Keep separate containers for dry and wet waste in the kitchen. Keep two bags for dry waste collection — paper and plastic, for the rest of the household waste. Keep plastic from the kitchen clean and dry and drop into the dry waste bin. Keep glass/plastic containers rinsed of food matter. Keep a paper bag for throwing sanitary waste.
            </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="300">
          <i className="bx bx-help-circle icon-help"></i>
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">
            What are the first few steps to initiate a waste management programme in your apartment complex?
            <i className="bx bx-chevron-down icon-show"></i>
            <i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
            <p>
              Form a group with like-minded people. Explain waste segregation to your family/neighbours. Get staff involved. Set up separate storage drums. Have the dry waste picked up by a collection centre or scrap dealer.
            </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="400">
          <i className="bx bx-help-circle icon-help"></i>
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">
            What are the different types of waste?
            <i className="bx bx-chevron-down icon-show"></i>
            <i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
            <p>
              1. <strong>Wet waste</strong> — Kitchen waste like peels, coffee grounds, eggshells, bones, and cooked food.<br /><br />
              2. <strong>Dry Waste</strong> — Paper, plastic, metal, glass, fabric, etc., that don't decompose easily.<br /><br />
              3. <strong>Hazardous waste</strong> — E-waste, toxic substances, biomedical waste.<br /><br />
              4. <strong>E-waste</strong> — Batteries, wires, electronics, bulbs, etc.<br /><br />
              5. <strong>Biomedical waste</strong> — Used sanitary products, bandages, materials contaminated with blood.
            </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="500">
          <i className="bx bx-help-circle icon-help"></i>
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">
            What are ways of storing the waste at homes?
            <i className="bx bx-chevron-down icon-show"></i>
            <i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
            <p>
              1. <strong>Dry waste</strong> — Store in a clean bag in the utility area. Ensure no food residue is left. If clothes are soiled with body fluids, they become sanitary waste.<br /><br />
              2. <strong>E-waste</strong> — Store in a separate container that is closed and kept away from moisture.
            </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="600">
          <i className="bx bx-help-circle icon-help"></i>
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-6" className="collapsed">
            How do I dispose my waste?
            <i className="bx bx-chevron-down icon-show"></i>
            <i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-6" className="collapse" data-bs-parent=".faq-list">
            <p>
              1. <strong>Home composting</strong> — Use an aerated container to compost wet waste.<br /><br />
              2. <strong>Community composting</strong> — Use tank composting at the apartment level.<br /><br />
              3. <strong>Biomedical waste</strong> — Wrap in newspaper and hand over to municipal collection.<br /><br />
              4. <strong>Hazardous waste</strong> — Store separately and give to the municipality (e.g., paint, cosmetics, repellents).
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>




<footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                <span className="logo-text">ZeroBin</span>
                <img src="./src/assets/trash-bin.png" alt="Logo" style={{ width: 'auto', height: '40px', transform: 'translateY(-5px)'}} />
              </h3>
              <p>
                Kolkata, West Bengal<br />
                India<br /><br />
                <strong>Phone:</strong> +91 9999999999<br />
                <strong>Email:</strong> <a href="mailto:avishek23@gmail.com">avishek23@gmail.com</a>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#faq">FAQ</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Waste Pick up</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">E-Waste Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Garbage Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Awareness Program</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Complaint Handling</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Follow us on social media to stay updated about community waste management.</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>ZeroBin</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Avishek Jha</a> and <a href="#">Antarlina Giri</a>
        </div>
      </div>
    </footer>


    </div>




    









    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
              <Home />
          } />
          <Route path="/complain" element={
            <ProtectedRoute>
              <Complaint />
            </ProtectedRoute>
          } />
          <Route path="/previewcomplain" element={
            <ProtectedRoute>
              <PreviewComplain />
            </ProtectedRoute>
          } />
          
          <Route path="/allcomplain" element={
            <AdminProtectedRoute>
              <Allcomplain />
            </AdminProtectedRoute>
          } />

          <Route path="/update/:id" element={
            <Update />
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
