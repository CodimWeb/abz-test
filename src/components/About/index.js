import React from 'react';
import { Link }  from 'react-scroll';

const About = () => (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h1 about__title text-center text-ellipsis">Let's get ac quainted</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="about__image">
                        <img src="img/man-laptop-v1.svg"/>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="about__panel">
                        <p className="h3 about__subtitle">I am cool frontend developer</p>
                        <p className="p2 about__description">
                            We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
                            <br/>
                            <br/>
                            If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. 
                        </p>
                        <Link 
                            className="btn btn-link about__btn"
                            to="register"
                            smooth={true}
                            duration={500}
                        >
                            Sing up now
                        </Link>
                    </div>    
                </div>
            </div>
        </div>
    </section>
);

export default About;