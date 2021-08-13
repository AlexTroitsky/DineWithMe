import React, { Component } from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SearchIcon from '@material-ui/icons/Search';

class home extends Component {
    render() {
        return (
            <div>
                <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("../assets/images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                             style={{ height: '100vh' }} >
                            <div className="col-md-11 text-center">
                                <h1 className="mb-4">עוזרים לאוהבי האוכל לנהל את הארוחות שלהם</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section bg-light ftco-no-pt ftco-intro">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex align-self-stretch px-4">
                                <div className="d-block services active text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <RestaurantIcon style={{ color: "#00bd56" }} fontSize="large"/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">יצירת ארוחה</h3>
                                        <h5>תוכל לנהל את כל הארוחות שלך במקום אחד ולשתף אותם עם חבריכם</h5>
                                        <a href="/meals" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex align-self-stretch px-4 ">
                                <div className="d-block services text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-recipe-book" />
                                        <SearchIcon style={{ color: "#00bd56" }} fontSize="large"/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">חיפוש מתכונים</h3>
                                        <h5>אנחנו מציגים את המתכונים הכי מעניינים, חדשים ורלוונטיים לכל אחד</h5>
                                        <a href="/recipes" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default home;