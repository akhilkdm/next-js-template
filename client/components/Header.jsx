import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container-fluid px-md-4	">
          <a className="navbar-brand" href="/">
            Skillhunt
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link" >Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/browsejobs">
                  <a  className="nav-link" >
                    Browse Jobs
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a href="candidates.html" className="nav-link">
                  Canditates
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item cta mr-md-1">
                <a href="new-post.html" className="nav-link">
                  Post a Job
                </a>
              </li>
              <li className="nav-item cta cta-colored">
                <a href="job-post.html" className="nav-link">
                  Want a Job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
