import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Script from "next/script";

function browsejobs() {
  return (
    <>
      <Head>
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />
          <link rel="stylesheet" href="css/aos.css" />
          <link rel="stylesheet" href="css/ionicons.min.css" />
          <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
          <link rel="stylesheet" href="css/jquery.timepicker.css" />
          <link rel="stylesheet" href="css/flaticon.css" />
          <link rel="stylesheet" href="css/icomoon.css" />
          <link rel="stylesheet" href="css/style.css" />
        </>
      </Head>
      <Header />
      <div
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-start">
            <div className="col-md-12 ftco-animate text-center mb-5">
              <p className="breadcrumbs mb-0">
                <span className="mr-3">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>About</span>
              </p>
              <h1 className="mb-3 bread">Browse Jobs</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 pr-lg-4">
              <div className="row">
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Partime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Frontend Development</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">Facebook, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Fulltime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Full Stack Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">Google, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Freelance</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Partime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Frontend Development</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">Facebook, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Temporary</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Fulltime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Full Stack Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">Google, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Freelance</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Internship</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Frontend Development</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">Facebook, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-md-12 ftco-animate">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Temporary</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers" />{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location" />{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>
                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart" />
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
                {/* end */}
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li>
                        <a href="#">&lt;</a>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 sidebar">
              <div className="sidebar-box bg-white p-4 ftco-animate">
                <h3 className="heading-sidebar">Browse Category</h3>
                <form action="#" className="search-form mb-3">
                  <div className="form-group">
                    <span className="icon icon-search" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </form>
                <form action="#" className="browse-form">
                  <label htmlFor="option-job-1">
                    <input
                      type="checkbox"
                      id="option-job-1"
                      name="vehicle"
                      defaultValue=""
                      defaultChecked=""
                    />{" "}
                    Website &amp; Software
                  </label>
                  <br />
                  <label htmlFor="option-job-2">
                    <input
                      type="checkbox"
                      id="option-job-2"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Education &amp; Training
                  </label>
                  <br />
                  <label htmlFor="option-job-3">
                    <input
                      type="checkbox"
                      id="option-job-3"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Graphics Design
                  </label>
                  <br />
                  <label htmlFor="option-job-4">
                    <input
                      type="checkbox"
                      id="option-job-4"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Accounting &amp; Finance
                  </label>
                  <br />
                  <label htmlFor="option-job-5">
                    <input
                      type="checkbox"
                      id="option-job-5"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Restaurant &amp; Food
                  </label>
                  <br />
                  <label htmlFor="option-job-6">
                    <input
                      type="checkbox"
                      id="option-job-6"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Health &amp; Hospital
                  </label>
                  <br />
                </form>
              </div>
              <div className="sidebar-box bg-white p-4 ftco-animate">
                <h3 className="heading-sidebar">Select Location</h3>
                <form action="#" className="search-form mb-3">
                  <div className="form-group">
                    <span className="icon icon-search" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </form>
                <form action="#" className="browse-form">
                  <label htmlFor="option-location-1">
                    <input
                      type="checkbox"
                      id="option-location-1"
                      name="vehicle"
                      defaultValue=""
                      defaultChecked=""
                    />{" "}
                    Sydney, Australia
                  </label>
                  <br />
                  <label htmlFor="option-location-2">
                    <input
                      type="checkbox"
                      id="option-location-2"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    New York, United States
                  </label>
                  <br />
                  <label htmlFor="option-location-3">
                    <input
                      type="checkbox"
                      id="option-location-3"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Tokyo, Japan
                  </label>
                  <br />
                  <label htmlFor="option-location-4">
                    <input
                      type="checkbox"
                      id="option-location-4"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Manila, Philippines
                  </label>
                  <br />
                  <label htmlFor="option-location-5">
                    <input
                      type="checkbox"
                      id="option-location-5"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Seoul, South Korea
                  </label>
                  <br />
                  <label htmlFor="option-location-6">
                    <input
                      type="checkbox"
                      id="option-location-6"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Western City, UK
                  </label>
                  <br />
                </form>
              </div>
              <div className="sidebar-box bg-white p-4 ftco-animate">
                <h3 className="heading-sidebar">Job Type</h3>
                <form action="#" className="browse-form">
                  <label htmlFor="option-job-type-1">
                    <input
                      type="checkbox"
                      id="option-job-type-1"
                      name="vehicle"
                      defaultValue=""
                      defaultChecked=""
                    />{" "}
                    Partime
                  </label>
                  <br />
                  <label htmlFor="option-job-type-2">
                    <input
                      type="checkbox"
                      id="option-job-type-2"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Fulltime
                  </label>
                  <br />
                  <label htmlFor="option-job-type-3">
                    <input
                      type="checkbox"
                      id="option-job-type-3"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Intership
                  </label>
                  <br />
                  <label htmlFor="option-job-type-4">
                    <input
                      type="checkbox"
                      id="option-job-type-4"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Temporary
                  </label>
                  <br />
                  <label htmlFor="option-job-type-5">
                    <input
                      type="checkbox"
                      id="option-job-type-5"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Freelance
                  </label>
                  <br />
                  <label htmlFor="option-job-type-6">
                    <input
                      type="checkbox"
                      id="option-job-type-6"
                      name="vehicle"
                      defaultValue=""
                    />{" "}
                    Fixed
                  </label>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                <h2>Subcribe to our Newsletter</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
                <div className="row d-flex justify-content-center mt-4 mb-4">
                  <div className="col-md-12">
                    <form action="#" className="subscribe-form">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
                        />
                        <input
                          type="submit"
                          defaultValue="Subscribe"
                          className="submit px-3"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Skillhunt Jobboard</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Employers</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Browse Candidates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Post a Job
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Employer Listing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Resume Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Job Packages
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Candidate</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Browse Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Submit Resume
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Browse Categories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      My Bookmarks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Candidate Listing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Account</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="pb-1 d-block">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Create Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pb-1 d-block">
                      Checkout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone" />
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope" />
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Script src="js/jquery.min.js"></Script>
      <Script src="js/jquery-migrate-3.0.1.min.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="js/jquery.easing.1.3.js"></Script>
      <Script src="js/jquery.waypoints.min.js"></Script>
      <Script src="js/jquery.stellar.min.js"></Script>
      <Script src="js/owl.carousel.min.js"></Script>
      <Script src="js/jquery.magnific-popup.min.js"></Script>
      <Script src="js/aos.js"></Script>
      <Script src="js/jquery.animateNumber.min.js"></Script>
      <Script src="js/scrollax.min.js"></Script>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></Script>
      <Script src="js/google-map.js"></Script>
      <Script src="js/main.js"></Script>
    </>
  );
}

export default browsejobs;
