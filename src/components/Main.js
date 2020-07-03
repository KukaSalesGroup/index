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

        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">
            july $90 flask sale!!
          </h2>
          <h3 className="align-center">
            2000 ml Rice Flask on sale for $90
          </h3>          
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <h5 className="align-center">
            Available while supplies last.<br />Offer valid from: July 1st - July 31st <br /> DON'T MISS OUT!!
          </h5>
          <h3 className="align-center">
            <b>
              Call us:
            </b>
          </h3>  
            <p className="align-center">
              <a href="tel:3038401047">
                (303)-840-1047
              </a>
            </p>  
          <h3 className="align-center">
            <b>
              Email us:
            </b>  
          </h3>  
            <p className="align-center">
              <a href="mailto:jkuka@kukasales.com?subject=2000ml Rice Flask Sale">Joe Kuka</a><br /> 
              <a href="mailto:gkuka@kukasales.com?subject=2000ml Rice Flask Sale">Garry Kuka</a><br />
              <a href="mailto:sales@kukasales.com?subject=2000ml Rice Flask Sale">Sales Team</a> 
            </p> 
          {close}
        </article>

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
            <b>Kuka Sales Group</b> specializes in meeting all your materials testing needs. This includes tensile testing of steel, aluminum, composites, titanium and all materials requiring testing to validate their properties.
          </p>
          <p>
            Construction materials are no exception and are a significant part of our product mix. Those would include Concrete, Soils, Aggregate, asphalt, and any other related construction materials.
          </p>
          <p>
            We at Kuka Sales Group understand our customer’s needs, because we’ve been there. Garry Kuka, the president, is a Civil Engineer and is licensed in Idaho and Colorado. Over the last 35 years, he has been involved with design, construction, and quality control. This experience has resulted in a total familiarity with the testing operations, the equipment and the procedures. 
          </p> 
          <p>
            This experience resonates in each order as we understand our customer’s needs and feel it our responsibility to ensure that they are getting the right equipment to perform their task. By working with so many vendors in the industry, we can assure that the pricing given is the most competitive price and that backorders are minimized. After all, we have all experienced the bargain price while having half of the items ordered not show up, but be backordered for weeks at a time. We will not stand for this! We have been in our customer’s position before and we understand and will not let that happen.
          </p> 
          <p>
            It is our goal to get the customer “what they want, when they want it, at a fair price.”
          </p> 
          <p>
            We pledge to offer our expertise to ensure that you get what you need to perform your tests, and to do so at least cost possible.
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
                className="icon fa-twitter"
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
