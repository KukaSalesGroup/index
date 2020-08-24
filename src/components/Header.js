import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">

        <h1>
          Kuka Sales Group
        </h1>

        <p>
          Address: 7108 S. Alton Way<br />
          Bldg. F, Unit 1<br />
          Centennial, CO 80112<br />
        </p>

          <a href="tel:3038401047">
            Call: (303)-840-1047
          </a><br />
          <a href="mailto:jkuka@kukasales.com">
            Email: Joe Kuka<br />
          </a>
          <a href="mailto:gkuka@kukasales.com">
            Email: Garry Kuka
          </a><br />
          <a href="mailto:sales@kukasales.com?subject=Quote Request">
            Email: Sales Team
          </a>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button>
            <a href="https://blogs.kukasalesgroup.com/pages/about">
              about us
            </a>
          </button>
        </li>  
        <li>
          <button>
            <a href="https://blogs.kukasalesgroup.com/">
              blogs
            </a>
          </button>
        </li>        
        <li>
          <button>
            <a href="https://www.kukasalesgroup.com/">
              products
            </a>
          </button>
        </li>         
{/*        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Products
          </button>
        </li>        
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('blog')
            }}
          >
            Blog
          </button>
        </li>        
          */}

      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
