import React from 'react';
import { Spring } from 'react-spring/renderprops';

function Component1() {
  return (
    <Spring 
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      )}
    </Spring>

  );
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}

export default Component1;