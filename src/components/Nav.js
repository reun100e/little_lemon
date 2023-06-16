import React from "react";

const Nav = () => {
  // const[isActive, setIsActive] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsActive(!isActive);
  // };

  // const navClass = 'hamburger' + isActive ? 'is-active' : '';

  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <a href="/home">Homepage</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
