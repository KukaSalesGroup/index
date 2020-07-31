import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/2000ml-rice-flask.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        {/* # # # # # # # # # # # # # # # Intro Page # # # # # # # # # # # # # # # */} 

        {/* # # # # # # # # # # # # # # # Products Page # # # # # # # # # # # # # # # */}

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">products</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This page will include all products offered by KSG and allow the use to add items to their cart from the list of items. Once they "proceed to checkout" an email will be generated and sent to sales@kukasales.com
          </p>
          {close}
        </article>

        {/* # # # # # # # # # # # # # # # About Us Page # # # # # # # # # # # # # # # */}

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Kuka Sales</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            <b>Kuka Sales Group</b> is dedicated to supplying the correct materials testing equipment to our customers at a fair price.  We understand the importance of value in performing the test correctly.
          </p>
          <p>
            Garry Kuka is a Civil Engineer licensed in Idaho and Colorado.  After practicing as an engineer for many years, he started the business 25 years ago and has been supplying testing equipment ever since.  Joe Kuka graduated with a bachelor’s degree from Saint John’s University and has been back in Colorado since 2014, working his way into the role as President of Kuka Sales Group.  The combined experience results in familiarity with the test methods performed by our customers and the equipment required to run them.
          </p>
          <p>
            It is our responsibility to provide our customers with what they need for testing.  We offer the experience and expertise needed to supply the customer with what they want, when they want it, and at a fair price.  Value is what we offer our customers.  
          </p> 
          <p>
            We are proud of the company and culture we have built in Kuka Sales Group.  Our goal is to supply you, the customer, the correct equipment at the right price, but our commitment is:
          </p> 
          <p>
            “When it comes to testing, if we don’t have it, and we can’t find it, then you don’t need it!”
          </p>                             
          {close}
        </article>

        {/* # # # # # # # # # # # # # # # Contact Page # # # # # # # # # # # # # # # */}
        
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Us</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/KukaSalesGroup"
                className="icon fa-linkedin"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://bit.ly/30Zn8WI" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        {/* # # # # # # # # # # # # # # # Blog Page # # # # # # # # # # # # # # # */}

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Kuka Sales</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>        
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
