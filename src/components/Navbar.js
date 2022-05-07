import logo from '../images/logo.svg'

function Navbar(){
    return (
        <nav className='nav'>
            <img src={logo} alt="logo" />
            <h1 className='logo-name'>Meme Generator</h1>
            <p className='nav-title'>React Course - Project 5</p>
        </nav>
    );
}
export default Navbar;