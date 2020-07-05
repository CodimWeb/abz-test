import React from 'react';
import { Link }  from 'react-scroll';

const Requirements = () => (
    <section className="requirements" id="requirements">
        <div className="container">
            <div className="row">
                <div className="col col-md-8"> 
                    <h1 className="h1 requirements__title">Test assignment<br/> for Frontend<br/> Developer position</h1>
                    <p className="requirements__subtitle">We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. <span className="d-none d-md-inline">Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</span></p>
                    <Link 
                        className="btn btn-primary"
                        to="register"
                        smooth={true}
                        duration={500}
                    >
                        Sing up now
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default Requirements;