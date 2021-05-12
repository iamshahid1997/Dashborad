import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { GiClapperboard } from 'react-icons/gi';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import Styles from './nav_bar.module.css';
import Divider from './shared_ui/divider/divider';

const NavItems = [{
  id : '1',
  path: '/',
  title: 'Programs',
  icon: () => <GiClapperboard />,
}, {
  id : '2',
  path: '/coaching',
  title: 'Coaching',
  icon: () => <GiClapperboard />,
}, {
  id : '3',
  path: '/collaboration',
  title: 'Collaboration',
  icon: () => <GiClapperboard />,
}, {
  id : '4',
  path: '/progress',
  title: 'Progress',
  icon: () => <GiClapperboard />,
}, {
  id : '5',
  path: '/knowledge',
  title: 'Knowledge',
  icon: () => <GiClapperboard />,
}, {
  id : '6',
  path: '/calendar',
  title: 'Calendar',
  icon: () => <GiClapperboard />,
}];

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className = {Styles.desktopNavbar}><SideBarDesktop /></div>
        <div className = {Styles.mobileNavBar}><SideBarMobile /></div>
      </div>
    );
  }
}

class SideBarMobile extends Component {
  state = {
    isVisible: false
  }

  _toggleVisiblity = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }))
  }

  render() {
    const { isVisible } = this.state
    return (
      <div>
        {!this.state.isVisible ? (
          <button
          className = {Styles.toggleButton}
          onClick = {this._toggleVisiblity}
        >
          <GiHamburgerMenu style = {{ marginRight: 5 }} />
          Menu
        </button>
        ) : null}
        <div  className = {isVisible ? [Styles.navBar, Styles.open].join(' ') : Styles.navBar}>
          <button
            className = {Styles.navClose}
            onClick = {this._toggleVisiblity}
          >
            Close
          </button>
          <SideBarContents />
        </div>
      </div>
    )
  }
}

class SideBarDesktop extends Component {
  render() {
    return (
      <div className = {Styles.navBar}>
        <SideBarContents />
      </div>
    )
  }
}

class SideBarContents extends Component {
  render() {
    
    return (
      <>
      <h2 className = {Styles.title}>BELONG</h2>
      {NavItems.map((item) => (
        <NavLink
          key = {item.id}
          activeClassName = {Styles.navBarItemActive}
          exact
          to = {item.path}
          className = {Styles.navBarItem}
        >
          <div className = {Styles.icon}>{item.icon()}</div>
          {item.title}
        </NavLink>
      ))}
      <Divider />
      <FilesSection />
      </>
    )
  }
}

class FilesSection extends Component {
  render() {
    return (
      <div className = {Styles.filesSection}>
        <h5>My Files</h5>
        <div>
          <button type = "button" className = {Styles.filesSectionItem}>
            <RiArrowDropRightFill size = {30} />
            Uploads
          </button>
          <button type = "button" className = {Styles.filesSectionItem}>
            <RiArrowDropRightFill size = {30} />
            Downloads
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
