function Header() {
  return (
    <>
      <img className='header-img' src='\src\Images\spices.jpg' alt='' />
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            SpiceStorm
          </a>
          <a className='navbar-brand' href='#'>
            Kundvagn 🛒
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Alla kryddor
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Bästsäljande
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Om oss
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Santa Maria
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Chili
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Peppar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
