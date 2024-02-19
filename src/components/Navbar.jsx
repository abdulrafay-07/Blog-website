import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        {path: '/', link: "Home"},
        {path: '/services', link: "Services"},
        {path: '/about', link: "About"},
        {path: '/blogs', link: "Blog"},
        {path: '/contact', link: "Contact"},
    ]

    return (
        <header className="bg-black">

            <nav className="px-4 py-4">
                <a href="/" className="text-xl font-bold text-white">Stock <span className="text-orange-500">Blogs</span></a>
                <ul className="md:flex gap-12 text-lg hidden">
                    {navItems.map(
                        ({path, link}) => 
                        <li className="text-white" key={path}>
                            <NavLink to={path}>{link}</NavLink>
                        </li>
                    )}
                </ul>

                <div>
                    <a href="/"></a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;