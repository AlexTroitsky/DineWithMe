import React, { Component } from 'react';
import Recommendations from "../components/Recommendations";


class profile extends Component {

    render() {
        return (
            <>
                <div>
                    <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-end">
                                <div className="col-md-9 pb-5" style={{ textAlign: "right", margin: "0 auto" }}>
                                    <p className="breadcrumbs mb-2">
                                        <span>פרופיל  <i className="ion-ios-arrow-forward" /></span>
                                        <span className="mr-2"><a href="/">בית <i className="ion-ios-arrow-forward" /></a></span>
                                    </p>
                                    <h1 className="mb-0 bread">פרופיל משתמש</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                   <Recommendations />

                    <section className="ftco-section" style={{ padding: "4em 0em" }}>
                        <div className="media-body user-area" style={{ margin: "0em 25em" }}>
                            <div>
                                <div class="card-body py-3 px-0">
                                    <p className="mb-0 phone pl-md-2" style={{ textAlign: "right", width: "61%" }}>
                                        <a href="/editProfile" className="mr-2">עריכת פרופיל</a>
                                        <span> | </span>
                                        <a className="btn"> !שלום ישראל </a>
                                    </p>
                                </div>
                            </div>
                            <div className="user-img">
                                <img src="../assets/images/staff-5.jpg" className="rounded" style={{ height: "245px", position: "relative", right: "-44%", border: "2px solid #4ccbba" }} />
                            </div>
                            <div className="user-details">
                                <span>ישראל ישראלי</span>
                                <br />
                                <span>israel@gmail.com</span>
                                <br />
                                <span>12345678</span>
                            </div>
                        </div>
                    </section>


{/* 
                    <section className="ftco-section bg-light">
                        <div className="container" style={{ display: "flex" }}>
                            <div className="" style={{ flex: "2" }}>
                                <div className="row">
                                    <h3 className="heading">הצעות</h3>
                                </div>
                                <br />
                                <div className="row d-flex suggestions">

                                    <div className="row-md-3 d-flex ">
                                        <div className="blog-entry align-self-stretch">
                                            <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/walk.jpg")', height: "150px", width: "100%" }}>
                                            </a>
                                            <div className="text p-4">
                                                <div className="meta mb-2" style={{ maxWidth: "260px" }} >
                                                    <a href="#">Ruth' Dog Walking, Ben Gabirol 120, TLV</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row-md-3 d-flex ">
                                        <div className="blog-entry align-self-stretch">
                                            <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/vet.jpeg")', height: "150px", width: "100%" }}>
                                            </a>
                                            <div className="text p-4">
                                                <div className="meta mb-2" style={{ maxWidth: "260px" }} >
                                                    <a href="#">Yad 4-Veterinarian Medical Clinic, Ben Gabirol 120, TLV</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row-md-3 d-flex ">
                                        <div className="blog-entry align-self-stretch">
                                            <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/walk.jpg")', height: "150px", width: "100%" }}>
                                            </a>
                                            <div className="text p-4">
                                                <div className="meta mb-2" style={{ maxWidth: "260px" }} >
                                                    <a href="#">Ruth' Dog Walking, Ben Gabirol 120, TLV</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="space" style={{ flex: "2", marginRight: "10%", borderRight: "1px solid #00000024" }}></div>

                            <div className="" style={{ flex: "6" }}>
                                <div className="row">
                                    <h3 className="heading">כתבות</h3>
                                </div>
                                <br />
                                <div className="row d-flex" >
                                    <div className="col-md-4 d-flex ">
                                        <div className="blog-entry align-self-stretch">
                                            <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/image_1.jpg")' }}>
                                            </a>
                                            <div className="text p-4">
                                                <div className="meta mb-2">
                                                    <div><a href="#">April 07, 2020</a></div>
                                                    <div><a href="#">Admin</a></div>
                                                    <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                                                </div>
                                                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex ">
                                        <div className="blog-entry align-self-stretch">
                                            <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/image_2.jpg")' }}>
                                            </a>
                                            <div className="text p-4">
                                                <div className="meta mb-2">
                                                    <div><a href="#">April 07, 2020</a></div>
                                                    <div><a href="#">Admin</a></div>
                                                    <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                                                </div>
                                                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex ">
                                        <div className="blog-entry align-self-stretch">
                                            <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/image_3.jpg")' }}>
                                            </a>
                                            <div className="text p-4">
                                                <div className="meta mb-2">
                                                    <div><a href="#">April 07, 2020</a></div>
                                                    <div><a href="#">Admin</a></div>
                                                    <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                                                </div>
                                                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex ">
                                        <div className="blog-entry align-self-stretch">
                                            <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/image_4.jpg")' }}>
                                            </a>
                                            <div className="text p-4">
                                                <div className="meta mb-2">
                                                    <div><a href="#">April 07, 2020</a></div>
                                                    <div><a href="#">Admin</a></div>
                                                    <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                                                </div>
                                                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </section>
 */}

                </div>
            </>
        )
    }
}
export default profile;