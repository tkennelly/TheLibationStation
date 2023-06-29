import Nav from './Nav'

const Header = ({ formState,handleChange }) => {
    return (
        <div className='header'>
            <div className='logo-set'>
            <img className='logo-img' src="../images/logo1.png" alt="logo" />
            <span className='logo'>The Libation Station</span>
            </div>
            <Nav formState={formState} handleChange={handleChange} />
        </div>
    )
}

export default Header