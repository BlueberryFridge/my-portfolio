import React, {useState} from 'react';



export default function Contact() {
    const [showEmail, setShowEmail] = useState(false);

    const toggleEmail = () => setShowEmail(!showEmail);

    return(
        <div id='contact' className='jumbotron main-content p-5'>
            <h3>Contact and Profiles</h3>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-4 col-lg-3 text-center my-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <span className='fa fa-github menu-icon' />
                            </div>
                            <div className='card-body'>
                                <a role='button' className='btn btn-dark btn-sm' href='https://github.com/BlueberryFridge' target='_blank'>GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-12 col-sm-4 col-lg-3 text-center my-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <span className='fa fa-codepen menu-icon' />
                            </div>
                            <div className='card-body'>
                                <a role='button' className='btn btn-dark btn-sm' href='https://codepen.io/BlueberryFridge' target='_blank'>CodePen</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-4 col-lg-3 text-center my-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <span className='fa fa-free-code-camp menu-icon' />
                            </div>
                            <div className='card-body'>
                                <a role='button' className='btn btn-dark btn-sm' href='https://www.freecodecamp.org/blueberryfridge' target='_blank'>freeCodeCamp</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-4 col-lg-3 text-center my-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <span className='fa fa-linkedin menu-icon' />
                            </div>
                            <div className='card-body'>
                                <a role='button' className='btn btn-dark btn-sm' href='https://www.linkedin.com/in/janinelapiz/' target='_blank'>LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-4 col-lg-3 text-center my-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <span className='fa fa-google menu-icon' />
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-dark btn-sm' onClick={toggleEmail}>Gmail</button>
                                {showEmail && <p className='mt-2'>jglapiz@up.edu.ph</p>}
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-4 col-lg-3 text-center my-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='card-title'>indeed</div>
                            </div>
                            <div className='card-body'>
                                <a role='button' className='btn btn-dark btn-sm' href='https://my.indeed.com/p/janinel-r17eh31' target='_blank'>Indeed</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}