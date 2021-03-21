import style from './Header.module.css';
import NavigationItem from './NavigationItem/';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
        <ul>
          <li className='listItem'><img src="/white-origami-bird.png" alt="White Origami"/></li>
          <NavLink activeStyle={{backgroundColor: 'blue'}} exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'blue'}} exact={true} to="/About"><NavigationItem>About</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'blue'}} exact={true} to="/Contact"><NavigationItem>Contact</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'blue'}} exact={true} to="/about/Gosho"><NavigationItem>Gosho</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'blue'}} exact={true} to="/about/Pesho"><NavigationItem>Pesho</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'blue'}} exact={true} to="/about/Ivanka"><NavigationItem>Ivanka</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'blue'}} exact={true} to="/about/Mariyka"><NavigationItem>Going to 7</NavigationItem></NavLink>
        </ul>
      </nav>
    )
}

export default Header;
