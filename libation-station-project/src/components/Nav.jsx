import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className='nav'>
            <Link to="/">
                <h2>Home</h2>
            </Link>
        </div>
    )
}

export default Nav