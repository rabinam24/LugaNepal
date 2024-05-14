import React, { useState } from 'react'; 
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    // state to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    //Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    //Array containing the navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Mens' },
        { id: 3, text: 'Womens' },
        { id: 4, text: 'Kids' },
        { id: 5, text: 'Contact' },
    ];

    return (
        <div className='Navbar flex text-left'>
            {/* LOGO */}
            <h1 className='w-full text-3xl font-bold '> Luga Nepal </h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className='p-2 hover:bg-[#ff0b0b] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'>
                        {item.text}
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}

            <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size ={20} /> : <AiOutlineMenu size = {20} />}
            </div>

            {/* Mobile Navigation Menu */}

            <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#c8d0c8] cursor-pointer ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-100 fixed top-0 bottom-0 left-[-100%] cur' 
        }
      >
      {/* Mobile logo */}
      <h1 className='w-full text-3xl font-bold p-4'> </h1>

      {/* Mobile Navigation Items */}

      {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b  hover:bg-[#ff0b0b] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            {item.text}
          </li>
        ))}

                </ul>

        </div>
    );
}

export default Navbar;
