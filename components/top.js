import  Link  from 'next/link';
export default function Top() {
  return (
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link href="/">
              <a
                
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                > 
                </svg>
              </a>
              </Link>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                <Link href="/">
                  <a  className="nav-link px-2 text-secondary">
                    Home
                  </a>
                  </Link>
                </li>
                <li>
                <Link href="/">
                  <a  className="nav-link px-2 text-white">
                    Features
                  </a>
                  </Link>
                </li>
                <li>
                <Link href="/">
                  <a className="nav-link px-2 text-white">
                    Pricing
                  </a>
                  </Link>
                </li>
                <li>
                <Link href="/">
                  <a className="nav-link px-2 text-white">
                    FAQs
                  </a>
                  </Link>
                </li>
                <li>
                <Link href="/">
                  <a  className="nav-link px-2 text-white">
                    About
                  </a>
                  </Link>
                </li>
              </ul>

              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </header>
  );
}
