import React from 'react';

export default {
  title: 'User',
};

export const User = () => (
    <div className="row">
        <div className="col-12 col-md-4">
            <div className="user-item">
                <div className="user-item__photo">
                    <img src="img/photo-cover.png" className="user-item__image"/>
                </div>
                <div className="user-item__name user-item__name--lg">Maximillian Maximillian Maximillian Maximillian</div>
                <div className="user-item__position">Leading specialist of the Control Department</div>
                <div className="user-item__email text-ellipsis">noah1998@gmail.com</div>
                <div className="user-item__tooltip">noah1998@gmail.com</div>
                <div className="user-item__phone">+380 50 678 03 24</div>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="user-item ">
                <div className="user-item__photo">
                    <img src="img/photo-cover.png" className="user-item__image"/>
                </div>
                <div className="user-item__name">Maximillian</div>
                <div className="user-item__position">Leading specialist of the Control Department</div>
                <div className="user-item__email text-ellipsis">noah1998@gmail.com</div>
                <div className="user-item__tooltip">noah1998@gmail.com</div>
                <div className="user-item__phone">+380 50 678 03 24</div>
            </div>
        </div> 
    </div>  
);