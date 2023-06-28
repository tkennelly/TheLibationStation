import Nav from './Nav'

const Header = ({ formState,handleChange }) => {
    return (
        <div className='header'>
            <h1>The Libation Station</h1>
            <Nav formState={formState} handleChange={handleChange} />
        </div>
    )
}

export default Header