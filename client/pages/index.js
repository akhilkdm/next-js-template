import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skillhunt - Free Bootstrap 4 Template by Colorlib</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
      </Head>



      <Header />

      <div
        className="hero-wrap img"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-10 d-flex align-items-center ftco-animate">
              <div className="text text-center pt-5 mt-md-5">
                <p className="mb-4">
                  Find Job, Employment, and Career Opportunities
                </p>
                <h1 className="mb-5">The Eassiest Way to Get Your New Job</h1>
                <div className="ftco-counter ftco-no-pt ftco-no-pb">
                  <div className="row">
                    <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18">
                        <div className="text d-flex">
                          <div className="icon mr-2">
                            <span className="flaticon-worldwide" />
                          </div>
                          <div className="desc text-left">
                            <strong className="number" data-number={46}>
                              0
                            </strong>
                            <span>Countries</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18 text-center">
                        <div className="text d-flex">
                          <div className="icon mr-2">
                            <span className="flaticon-visitor" />
                          </div>
                          <div className="desc text-left">
                            <strong className="number" data-number={450}>
                              0
                            </strong>
                            <span>Companies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18 text-center">
                        <div className="text d-flex">
                          <div className="icon mr-2">
                            <span className="flaticon-resume" />
                          </div>
                          <div className="desc text-left">
                            <strong className="number" data-number={80000}>
                              0
                            </strong>
                            <span>Active Employees</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ftco-search my-md-5">
                  <div className="row">
                    <div className="col-md-12 nav-link-wrap">
                      <div
                        className="nav nav-pills text-center"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link active mr-md-1"
                          id="v-pills-1-tab"
                          data-toggle="pill"
                          href="#v-pills-1"
                          role="tab"
                          aria-controls="v-pills-1"
                          aria-selected="true"
                        >
                          Find a Job
                        </a>
                        <a
                          className="nav-link"
                          id="v-pills-2-tab"
                          data-toggle="pill"
                          href="#v-pills-2"
                          role="tab"
                          aria-controls="v-pills-2"
                          aria-selected="false"
                        >
                          Find a Candidate
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12 tab-wrap">
                      <div className="tab-content p-4" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-1"
                          role="tabpanel"
                          aria-labelledby="v-pills-nextgen-tab"
                        >
                          <form action="#" className="search-job">
                            <div className="row no-gutters">
                              <div className="col-md mr-md-2">
                                <div className="form-group">
                                  <div className="form-field">
                                    <div className="icon">
                                      <span className="icon-briefcase" />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="eg. Garphic. Web Developer"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md mr-md-2">
                                <div className="form-group">
                                  <div className="form-field">
                                    <div className="select-wrap">
                                      <div className="icon">
                                        <span className="ion-ios-arrow-down" />
                                      </div>
                                      <select
                                        name=""
                                        id=""
                                        className="form-control"
                                      >
                                        <option value="">Category</option>
                                        <option value="">Full Time</option>
                                        <option value="">Part Time</option>
                                        <option value="">Freelance</option>
                                        <option value="">Internship</option>
                                        <option value="">Temporary</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md mr-md-2">
                                <div className="form-group">
                                  <div className="form-field">
                                    <div className="icon">
                                      <span className="icon-map-marker" />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Location"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md">
                                <div className="form-group">
                                  <div className="form-field">
                                    <button
                                      type="submit"
                                      className="form-control btn btn-primary"
                                    >
                                      Search
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-2"
                          role="tabpanel"
                          aria-labelledby="v-pills-performance-tab"
                        >
                          <form action="#" className="search-job">
                            <div className="row">
                              <div className="col-md">
                                <div className="form-group">
                                  <div className="form-field">
                                    <div className="icon">
                                      <span className="icon-user" />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="eg. Adam Scott"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md">
                                <div className="form-group">
                                  <div className="form-field">
                                    <div className="select-wrap">
                                      <div className="icon">
                                        <span className="ion-ios-arrow-down" />
                                      </div>
                                      <select
                                        name=""
                                        id=""
                                        className="form-control"
                                      >
                                        <option value="">Category</option>
                                        <option value="">Full Time</option>
                                        <option value="">Part Time</option>
                                        <option value="">Freelance</option>
                                        <option value="">Internship</option>
                                        <option value="">Temporary</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md">
                                <div className="form-group">
                                  <div className="form-field">
                                    <div className="icon">
                                      <span className="icon-map-marker" />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Location"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md">
                                <div className="form-group">
                                  <div className="form-field">
                                    <button
                                      type="submit"
                                      className="form-control btn btn-primary"
                                    >
                                      Search
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="category-wrap">
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <div className="top-category text-center no-border-left">
                      <h3>
                        <a href="#">Website &amp; Software</a>
                      </h3>
                      <span className="icon flaticon-contact" />
                      <p>
                        <span className="number">143</span>{" "}
                        <span>Open position</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="top-category text-center">
                      <h3>
                        <a href="#">Education &amp; Training</a>
                      </h3>
                      <span className="icon flaticon-mortarboard" />
                      <p>
                        <span className="number">143</span>{" "}
                        <span>Open position</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="top-category text-center">
                      <h3>
                        <a href="#">Graphic &amp; UI/UX Design</a>
                      </h3>
                      <span className="icon flaticon-idea" />
                      <p>
                        <span className="number">143</span>{" "}
                        <span>Open position</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="top-category text-center">
                      <h3>
                        <a href="#">Accounting &amp; Finance</a>
                      </h3>
                      <span className="icon flaticon-accounting" />
                      <p>
                        <span className="number">143</span>{" "}
                        <span>Open position</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="top-category text-center">
                      <h3>
                        <a href="#">Restaurant &amp; Food</a>
                      </h3>
                      <span className="icon flaticon-dish" />
                      <p>
                        <span className="number">143</span>{" "}
                        <span>Open position</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="top-category text-center">
                      <h3>
                        <a href="#">Health &amp; Hospital</a>
                      </h3>
                      <span className="icon flaticon-stethoscope" />
                      <p>
                        <span className="number">143</span>{" "}
                        <span>Open position</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Job Categories</span>
              <h2 className="mb-0">Top Categories</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 ftco-animate">
              <ul className="category text-center">
                <li>
                  <a href="#">
                    Web Development <br />
                    <span className="number">354</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Graphic Designer <br />
                    <span className="number">143</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Multimedia <br />
                    <span className="number">100</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Advertising <br />
                    <span className="number">90</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ftco-animate">
              <ul className="category text-center">
                <li>
                  <a href="#">
                    Education &amp; Training <br />
                    <span className="number">100</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    English <br />
                    <span className="number">200</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Social Media <br />
                    <span className="number">300</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Writing <br />
                    <span className="number">150</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ftco-animate">
              <ul className="category text-center">
                <li>
                  <a href="#">
                    PHP Programming <br />
                    <span className="number">400</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Project Management <br />
                    <span className="number">100</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Finance Management <br />
                    <span className="number">222</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Office &amp; Admin <br />
                    <span className="number">123</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ftco-animate">
              <ul className="category text-center">
                <li>
                  <a href="#">
                    Web Designer <br />
                    <span className="number">324</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Customer Service <br />
                    <span className="number">564</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Marketing &amp; Sales <br />
                    <span className="number">234</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Software Development <br />
                    <span className="number">425</span>{" "}
                    <span>Open position</span>
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section services-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon">
                  <span className="flaticon-resume" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Search Millions of Jobs</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon">
                  <span className="flaticon-team" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Easy To Manage Jobs</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon">
                  <span className="flaticon-career" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Top Careers</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon">
                  <span className="flaticon-employees" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Search Expert Candidates</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 pr-lg-5">
              <div className="row justify-content-center pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <span className="subheading">Recently Added Jobs</span>
                  <h2 className="mb-4">Featured Jobs Posts For This Week</h2>
                </div>
              </div>
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
             
              </div>
            </div>
            <div className="col-lg-3 sidebar">
              <div className="row justify-content-center pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4">Top Recruitments</h2>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <div className="">
                  <a href="#" className="company-wrap">
                    <img
                      src="images/company-1.jpg"
                      className="img-fluid"
                      alt="Colorlib Free Template"
                    />
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">Company Company</a>
                    </h3>
                    <p>
                      <span className="number">500</span>{" "}
                      <span>Open position</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <div className="">
                  <a href="#" className="company-wrap">
                    <img
                      src="images/company-2.jpg"
                      className="img-fluid"
                      alt="Colorlib Free Template"
                    />
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">Facebook Company</a>
                    </h3>
                    <p>
                      <span className="number">700</span>{" "}
                      <span>Open position</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <div className="">
                  <a href="#" className="company-wrap">
                    <img
                      src="images/company-3.jpg"
                      className="img-fluid"
                      alt="Colorlib Free Template"
                    />
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">IT Programming INC</a>
                    </h3>
                    <p>
                      <span className="number">700</span>{" "}
                      <span>Open position</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <div className="">
                  <a href="#" className="company-wrap">
                    <img
                      src="images/company-4.jpg"
                      className="img-fluid"
                      alt="Colorlib Free Template"
                    />
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">IT Programming INC</a>
                    </h3>
                    <p>
                      <span className="number">700</span>{" "}
                      <span>Open position</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-4">Happy Clients</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_3.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-candidates bg-primary">
        <div className="container">
          <div className="row justify-content-center pb-3">
            <div className="col-md-10 heading-section heading-section-white text-center ftco-animate">
              <span className="subheading">Candidates</span>
              <h2 className="mb-4">Latest Candidates</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="carousel-candidates owl-carousel">
                <div className="item">
                  <a href="#" className="team text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h2>Danica Lewis</h2>
                    <span className="position">Western City, UK</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="team text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    />
                    <h2>Nicole Simon</h2>
                    <span className="position">Western City, UK</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="team text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_3.jpg)" }}
                    />
                    <h2>Cloe Meyer</h2>
                    <span className="position">Western City, UK</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="team text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_4.jpg)" }}
                    />
                    <h2>Rachel Clinton</h2>
                    <span className="position">Western City, UK</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="team text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_5.jpg)" }}
                    />
                    <h2>Dave Buff</h2>
                    <span className="position">Western City, UK</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="team text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_6.jpg)" }}
                    />
                    <h2>Dave Buff</h2>
                    <span className="position">Western City, UK</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Our Blog</span>
              <h2>
                <span>Recent</span> Blog
              </h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                ></a>
                <div className="text mt-3">
                  <div className="meta mb-2">
                    <div>
                      <a href="#">August 28, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                ></a>
                <div className="text mt-3">
                  <div className="meta mb-2">
                    <div>
                      <a href="#">August 28, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                ></a>
                <div className="text mt-3">
                  <div className="meta mb-2">
                    <div>
                      <a href="#">August 28, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: 'url("images/image_4.jpg")' }}
                ></a>
                <div className="text mt-3">
                  <div className="meta mb-2">
                    <div>
                      <a href="#">August 28, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                </div>
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
                Copyright © All rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            strokeMiterlimit={10}
            stroke="#F96D00"
          />
        </svg>
      </div> */}

      
    </>
  );
}
