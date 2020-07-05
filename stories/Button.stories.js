import React from 'react';

export default {
  title: 'Button',
};

export const button = () => (
  <>
    <br/>
    <button className="btn btn-primary">Primary</button>
    <br/>
    <br/>
    <button className="btn btn-link">Sing up now</button>
    <br/>
    <br/>
    <button className="btn btn-secondary" disabled>Disabled</button>
  </>  
);
