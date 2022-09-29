const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="h1tag"> The Dojo Blog</h1>
            <div className="links">
                <a className="link" href="/">Home</a>
                <a className="link newBlog" href="/create">New blog</a>
            </div>
        </nav>
    )
}

export default Navbar;