import { useCookies } from "react-cookie";
import { NavLink, useNavigate } from "react-router-dom";

export function Navbar() {
  const [cookie, , removeCookie] = useCookies();
  const navigate = useNavigate();

  function logout() {
    removeCookie("admin");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          Book Crud
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                to="/books"
              >
                All Books
              </NavLink>
            </li>
            {cookie.admin !== undefined && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                  to="/add-book"
                >
                  Add New Book
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav mb-lg-0">
            {cookie.admin === undefined ? (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <button onClick={logout} className="nav-link btn btn-link">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
