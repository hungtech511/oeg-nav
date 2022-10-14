import logo from './logo.svg';
import './App.scss';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    function unknownNameFunction() {
      let mobileButton = document.querySelector(".mobile-btn");
      let mobileNav = document.querySelector(".mobile-nav");
      let toggleButtons = document.querySelectorAll(".mobile-nav .list-item a button"); 
      let closeMobileNavButton = document.querySelector(".nav-mobile-close");
      let overlayMobileNav = document.querySelector(".mobile-nav-overlay");
      let contentMobileNav = document.querySelector(".mobile-nav-content");
  
          // Click mobile button to expand mobile navigation
          mobileButton.addEventListener("click",function(){
            console.log('ok');
            mobileNav.classList.add("expanded")
            overlayMobileNav.setAttribute("style","transform: translateX(0%); opacity: 0.5")
            contentMobileNav.setAttribute("style","transform: translateX(0%); opacity: 1; visibility: visible")
          }) 
      
          // Click button to show sub menu in each link
          toggleButtons.forEach(function(toggleButton,index){
            toggleButton.addEventListener("click",function(){
              let subMenu = this.parentElement.nextElementSibling;
              console.log(this.classList);
      
              this.classList.toggle("active");
              this.parentNode.classList.toggle("active");
              subMenu.classList.toggle("active");
              subMenu.setAttribute("style", `height: ${subMenu.scrollHeight}px`)
              if(!subMenu.classList.contains("active")){
                subMenu.setAttribute("style", "height: 0px")
              }
            })
          })
          const removeMobileNav = () =>{
            mobileNav.classList.remove("expanded")
            overlayMobileNav.setAttribute("style","transform: translateX(-100%); opacity: 0")
            contentMobileNav.setAttribute("style","transform: translateX(-200%); opacity: 0; visibility: hidden")
          }
      
          // Overlay click to remove
          overlayMobileNav.addEventListener("click",function(){
            removeMobileNav()
          })
          // Icon click to remove
          closeMobileNavButton.addEventListener("click",function(){
            removeMobileNav()
          })
    }
    document.addEventListener("DOMContentLoaded", unknownNameFunction())
    return () =>     document.removeEventListener("DOMContentLoaded", unknownNameFunction())
  },[])
  return (
    <>
    <nav className="nav">
  <div className="container mx-auto">
    <div className="nav-wrapper flex items-center">
      <a href="#" className="nav-logo">
        <img src="assets/image/logo.png" alt="logo" />
      </a>
      <div className="nav-right ml-auto flex items-center">
        <div className="mobile-btn lg:hidden">
          <a href="#">
            <i className="fa-solid fa-bars text-white" />
          </a>
        </div>
        <ul className="nav-list lg:flex md:hidden hidden">
          <li className="list-item">
            <a className="uppercase active" href="#">
              Trang chủ
            </a>
          </li>
          <li className="list-item dropdown">
            <a className="text-white uppercase" href="#">
              Oeg Esports
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">Vod</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">Chương trình hỗ trợ</a>
              </li>
            </ul>
          </li>
          <li className="list-item dropdown">
            <a className="text-white uppercase" href="#">
              Giải đấu
            </a>
          </li>
          <li className="list-item dropdown">
            <a className="text-white uppercase" href="#">
              Vinh danh
            </a>
          </li>
          <li className="list-item dropdown">
            <a className="text-white uppercase" href="#">
              Liên hệ
            </a>
          </li>
        </ul>
        <div className="page-language lg:flex md:hidden hidden items-center">
          <div className="page-language-item lg:flex md:hidden hidden items-center">
            <div className="language-image">
              <img src="assets/image/vn.png" alt="language" />
            </div>
            <p className="language-text text-white font-bold">VN</p>
            <i className="fa-solid fa-chevron-down text-white" />
            <div className="sub-lang">
              <div className="lg:flex md:hidden hidden items-center">
                <div className="language-image">
                  <img src="assets/image/vn.png" alt="language" />
                </div>
                <p className="language-text font-bold">VN</p>
              </div>
              <div className="lg:flex md:hidden hidden items-center">
                <div className="language-image">
                  <img src="assets/image/vn.png" alt="language" />
                </div>
                <p className="language-text font-bold">VN</p>
              </div>
              <div className="lg:flex md:hidden hidden items-center">
                <div className="language-image">
                  <img src="assets/image/vn.png" alt="language" />
                </div>
                <p className="language-text font-bold">VN</p>
              </div>
            </div>
          </div>
        </div>
        <div className="login-search lg:flex md:hidden hidden items-center">
          <div className="button-wrapper">
            <button className="font-medium">Login</button>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
<div className="mobile-nav">
  <div className="mobile-nav-overlay" />
  <div className="mobile-nav-content">
    <a href="#!" className="nav-mobile-close">
      <i className="fa-solid fa-times" />
    </a>
    <div className="mobile-logo">
      <a href="#">
        {" "}
        <img src="assets/image/logo.png" alt="logo" />
      </a>
    </div>
    <div className="mobile-nav-container">
      <ul className="mobile-list">
        <li className="list-item">
          <a href="#!" className="nav-link text-white">
            Home
          </a>
        </li>
        <li className="list-item">
          <a href="#!" className="nav-link text-white">
            About Us
          </a>
        </li>
        <li className="list-item">
          <a href="#!" className="nav-link text-white">
            Services
            <button>
              <i className="fas fa-angle-down" />
            </button>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="Services.html">Services</a>
            </li>
            <li>
              <a href="Services_Detail.html">Services Details</a>
            </li>
          </ul>
        </li>
        <li className="list-item">
          <a href="#!" className="nav-link text-white">
            Projects
            <button>
              <i className="fas fa-angle-down" />
            </button>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="Projects.html">Projects</a>
            </li>
            <li>
              <a href="Projects_Detail.html">Projects Details</a>
            </li>
          </ul>
        </li>
        <li className="list-item">
          <a href="#!" className="nav-link text-white">
            News
            <button>
              <i className="fas fa-angle-down" />
            </button>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="News.html">News</a>
            </li>
            <li>
              <a href="News_Detail.html">News Details</a>
            </li>
          </ul>
        </li>
        <li className="list-item">
          <a href="Contact.html" className="nav-link text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
