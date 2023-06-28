import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className='nav'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to='/drinks'>All Drinks</Link>
        </div>
    )
}

export default Nav