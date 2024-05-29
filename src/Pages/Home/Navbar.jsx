import { useState, useEffect } from "react";
import {Link} from "react-scroll";


function Navbar() {
   const [navActive, setNavActive] = useState (false);


   const toggleNav = () => {
       setNavActive(!navActive);
   }


   const closeMenu = () => {
       setNavActive (false);
   };


   useEffect(() => {


       const handleResize = () => {
           if (window.innerWidth <= 500){
               closeMenu;
           }
       };


       window.addEventListener("resize", handleResize);


       return () => {
           window.removeEventListener("resize", handleResize);
       };
   }, []);


   useEffect(() =>{
       if(window.innerWidth <=1200){
           closeMenu
       }
   }, []);


   return (
       <nav className={`navbar ${navActive ? "active" : ""}`}>
           <div className="navbar-logo"> 
               <h3 className="navbar-title"><b>n</b>rey <b>.</b></h3>
           </div>
           <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
               <span className="nav__hamburger__line"></span>
               <span className="nav__hamburger__line"></span>
               <span className="nav__hamburger__line"></span>
           </a>


           <div className={`navbar-items ${navActive ? "active" : " "}`}>
               <ul>
                   <li>
                       <Link
                       onClick={closeMenu}
                       activeClass="navbar-active-content"
                       spy={true}
                       smooth={true}
                       offset={-200}
                       duration={100}
                       to="heroSection"
                       className="navbar-content"
                       >Home
                       </Link>
                   </li>
                   <li>
                       <Link
                       onClick={closeMenu}
                       activeClass="navbar-active-content"
                       spy={true}
                       smooth={true}
                       offset={-150}
                       duration={100}
                       to="MyPortfolio"
                       className="navbar-content"
                       >Portfolio
                       </Link>
                   </li>
                   <li>
                       <Link
                       onClick={closeMenu}
                       activeClass="navbar-active-content"
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={100}
                       to="AboutMe"
                       className="navbar-content"
                       >Sobre Mi
                       </Link>
                   </li>
                   <li>
                       <Link
                       onClick={closeMenu}
                       activeClass="navbar-active-content"
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={100}
                       to="ContactMe"
                       className="navbar-content"
                       >Contacto
                       </Link>
                   </li>
               </ul>
           </div>
           <Link
               onClick={closeMenu}
               activeClass="navbar-active-content"
               spy={true}
               smooth={true}
               offset={-70}
               duration={50}
               to="Contact"
               className='btn btn-primary2'
               >Contactame
           </Link>
       </nav>
   );
}


export default Navbar;