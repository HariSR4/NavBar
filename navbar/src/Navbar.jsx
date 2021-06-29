import { social, links } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
   const [showLinks, setShowLinks] = useState(false);
   const linksContainerRef = useRef(null);
   const linksRef = useRef(null);

   const toggleLinks = () => {
      setShowLinks(!showLinks);
   };

   useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;

      if (showLinks) {
         linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
         linksContainerRef.current.style.height = '0px';
      }
   }, [showLinks]);

   return (
      <nav>
         <div className='nav-center'>
            <div className='nav-header'>
               <img src={logo} alt='Coding Addict' class='logo' />
               <button className='nav-toggle' onClick={toggleLinks}>
                  <FaBars />
               </button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
               <ul className='links' ref={linksRef}>
                  {links.map((item) => {
                     const { id, text, url } = item;
                     return (
                        <li key={id}>
                           <a href={url}>{text}</a>
                        </li>
                     );
                  })}
               </ul>
            </div>
            <ul className='social-icons'>
               {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                     <li key={id}>
                        <ul>
                           <a href={url}>{icon}</a>
                        </ul>
                     </li>
                  );
               })}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;

// <div>
// <img src={logo} alt='Coding Adict' />
// {links.map((item) => (
//    <div>
//       <ul>
//          <li>
//             <a href={item.url}>{item.text}</a>
//          </li>
//          <li>{social.icon}</li>
//       </ul>
//    </div>
// ))}
// </div>
