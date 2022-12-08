import React from 'react';
import './landingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';

  class TabElem extends React.Component
  {
    render() {
      return (
        <Link to={this.props.to} className="tabElem">
            {this.props.text}
        </Link>
      );
    }
  }

  
  class Footer extends React.Component
  {
    render () {
      return (
        <div className="footer">
          <div className="footerContent">
            <div className="column">
              <a href="https://linkedin.com/in/avassilev98">
                <FontAwesomeIcon className = "footerElem" icon={faLinkedin} />
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/avassilev98">
                <FontAwesomeIcon className = "footerElem" icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

  class TabGroup extends React.Component
  {
      render () {
      return (
        <div className="tabGroup">
          <div className="row">
            <div className="column">
              <TabElem text="Projects" to='/resume'></TabElem>
            </div>
            <div className="column">
              <TabElem text="Resume" to='/resume'></TabElem>
            </div>
            <div className="column">
              <TabElem text="Blog" to='/resume'></TabElem>
            </div>
            <div className="column">
              <TabElem text="Contact" to='/resume'></TabElem>
            </div>
          </div>
        </div>
      );
    }
  }

  class LandingPage extends React.Component
  {
    render () {
      return (
        <div className="titletext">
          Welcome to Club Pseud World, Operator
        </div>
      );
    }
  }
  export default LandingPage;