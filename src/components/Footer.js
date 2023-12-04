import React from 'react' 
import logo from '../images/logo.jpg'; 

export default function Footer() {
  return (
    <div>

<div class="bg-alert text-center text-white mt-5">

  <div class="container p-2">

    <div class="mb-2">

    <section></section>
    <footer class="footer-distributed">

      <div class="footer-left">
        <h3>Healthy-Raam<span><img src={logo} style={{height:"50px",width:"75px", margin:"10px"}}alt="contacts" />
        </span></h3>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Government Enginnering College</span> Kannauj (U.P), INDIA</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+91 8423000000 </p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">shreyyadav123000@gmail.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span> <b><u> About Healthy-Raam </u></b></span><br/>
          Taking care of Your health is our primary and top most priority.
        </p>

        <div class="footer-icons">

          <a href="https://www.instagram.com/__sitto___/"><i class="fa fa-instagram"> <b>Instagram</b></i></a>
          <a href="https://www.linkedin.com/in/shrey-yadav-412324228/"><i class="fa fa-linkedin"> <b>LinkedIn</b></i></a>
          <a href="https://github.com/Sitto2002"><i class="fa fa-github"></i> <b>Github</b></a>

        </div>

      </div>

    </footer>
                 
    </div>

    <section class="mb-2">
      <p>
     <i>Thank you for visiting us. </i>
     <b> !!! COME AGAIN !!! </b>
      </p>
    </section>

        </div>

  <div class="text-center p-2">
    © 2020 Copyright:
    <a class="text-white" href="/"> HEALTHY-RAAM </a>
  </div>

</div>

    </div>
  )
}
