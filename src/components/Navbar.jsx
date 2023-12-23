import {headerLogo} from "../assets/images"
const Navbar = () => {
  return (
    <header className="padding-z py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="" />
            </a>

            <ul className="flex justify-center items-center gap-16 max-lg:hidden"></ul>
        </nav>
    </header>
  )
}

export default Navbar