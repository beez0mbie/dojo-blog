import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="h1tag"> The Dojo Blog</h1>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link newBlog" to="/create">New blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;