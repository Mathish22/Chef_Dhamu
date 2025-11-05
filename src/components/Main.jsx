import React from 'react';

// This is a reusable layout component.
// The `{ children }` prop will render any child elements nested inside the <Main> component.
function Main({ children }) {
  // We've replaced the inline style attribute with a className for better code organization.
  return (
    <main className="main-content">
      {children}
    </main>
  );
}

export default Main;

