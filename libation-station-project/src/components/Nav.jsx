import { Link } from 'react-router-dom'
let input = document.querySelector('input').value

const Nav = () => {
    return (
        <div className='nav'>
            <input type="text" value="" placeholder='Search for your favorite cock'/>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to='/drinks'>All Drinks</Link>
        </div>
    )
}

export default {
    Nav,
    input
}