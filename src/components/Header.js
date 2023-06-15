import React from "react";



function Header() {
  return (
    <>
      <img src={require('./images/logo.png')}alt="logo"></img>

      <meta name="og:title" content="One Place Fishing" />
      <meta name="og:description" content="some description here" />
      <meta
        name="og:image"
        content="https://example.com/one-place-fishing-store.jpg"
      />
    </>
  );
}

export default Header;
