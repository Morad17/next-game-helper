import Link from 'next/link'

const Navbar = () => {
    return (
    <nav className="main-nav">
        <div className="nav-links-logo">
            <div className="logo">SS</div>
            <ul className="nav-home-links">
                <Link className="nav-links" href="/">Home</Link>
                <Link className="nav-links" href="/">All Games</Link>
                <Link className="nav-links" href="/">All Achievements</Link>
                <Link className="nav-links" href="/">Targets</Link>
            </ul>
        </div>
        <ul className="nav-user-links">
            <Link className="nav-links" href="/">Login</Link>
            <Link className="nav-links" href="/">My Account</Link>
        </ul>

    </nav>
    )
}

export default Navbar