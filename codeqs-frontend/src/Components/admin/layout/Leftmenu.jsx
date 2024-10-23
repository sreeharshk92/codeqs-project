import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import '../leftmenu.css';

const LeftMenu = () => {
    return (
        <nav className="left-menu">
            <ul className="nav nav-pills nav-sidebar flex-column" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to="/admin/dashboard" className="nav-link">
                        <FontAwesomeIcon icon={faTh} className="nav-icon" />
                        <p className="menu-item-text">
                            Dashboard
                            <span className="right badge badge-danger">New</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/product/list" className="nav-link">
                        <FontAwesomeIcon icon={faTh} className="nav-icon" />
                        <p className="menu-item-text">
                            Product
                            <span className="right badge badge-danger">New</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/logout" className="nav-link">
                        <FontAwesomeIcon icon={faTh} className="nav-icon" />
                        <p className="menu-item-text">
                            Logout
                            <span className="right badge badge-danger">New</span>
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftMenu;
