import Nav from './Nav'

const Header = ({ formState,handleChange }) => {
    return (
        <div className='header'>
            <span className='logo'>The Libation Station</span>
            <Nav formState={formState} handleChange={handleChange} />
        </div>
    )
}

export default Header