
export default function Master() {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link">
                        <i className="nav-icon fas fa-users"></i>
                        <p>Users</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">
                        <i className="nav-icon fas fa-box"></i>
                        <p>Products</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/orders" className="nav-link">
                        <i className="nav-icon fas fa-shopping-cart"></i>
                        <p>Orders</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        <i className="nav-icon fas fa-cog"></i>
                        <p>Settings</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/reports" className="nav-link">
                        <i className="nav-icon fas fa-chart-bar"></i>
                        <p>Reports</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}
       
