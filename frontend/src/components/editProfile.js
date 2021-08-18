import React, { Component } from 'react';


class editProfile extends Component {

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
                                    <h1 className="mb-0 bread">עריכת פרופיל</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ftco-section" style={{ padding: "4em 0em" }}>
                        <div className="media-body user-area" style={{ margin: "0em 25em" }}>
                            <div>
                                <div class="card-body py-3 px-0">
                                    <p className="mb-0 phone pl-md-2" style={{ textAlign: "right", width: "57%" }}>
                                        <a href="/editProfile" className="mr-2">עריכת פרופיל</a>
                                        <span> | </span>
                                        <a className="btn"> !שלום ישראל </a>
                                    </p>
                                </div>
                            </div>
                            <div className="user-img">
                                <img src="../assets/images/staff-5.jpg" className="rounded" style={{ height: "245px", position: "relative", right: "-44%", border: "2px solid #4ccbba" }} />
                            </div>
                            <div className="user-details-edit">
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">Name</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control" type="text" placeholder="ישראל ישראלי" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">Email</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control" defaultValue="israel@example.com" type="email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">Password</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control" defaultValue="12345678" type="password" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                </div>

            </>
        )
    }
}
export default editProfile;