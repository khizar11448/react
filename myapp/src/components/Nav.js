function Nav(props) {
    return (
        <nav className="main-nav">
            < h1 style={{color:"purple", fontSize:"30px"}}>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>,{props.firstname}
            </h1>
        </nav>
    );
};

export default Nav;