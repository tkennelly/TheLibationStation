import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to='/drinks'>All Drinks</Link>
        </div>
    )
}

export default Nav