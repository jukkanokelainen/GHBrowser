import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = props => {
    const {icon, title} = props;

    return (
        <nav className= 'navbar bg-primary'>
            <h1><i className= {icon}/> {title}</h1>
            <ul>
                <Link to='/'>Home</Link>
            </ul>
            <ul>
                <Link to='/about'>About</Link>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar
