import React from 'react';

export default {
  title: 'Link',
};

export const link = () => (
  <>
    <a href="#" className="link">default</a>
    <div style={{ backgroundColor: "#283593"}}>
      <a href="#" className="link-white">white</a>
    </div>
  </>  
);