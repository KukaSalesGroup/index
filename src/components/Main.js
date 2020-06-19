import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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

        {/* # # # # # # # # # # # # # # # Main Page # # # # # # # # # # # # # # # */} 

        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">The kuka principle</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            We have a responsibility to provide the customer our product knowledge and pricing knowledge in order for them to make an informed buying decision.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
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
            With over 20 years experience, we boast of "product Knowledge" and "Pricing Knowledge". What that really means is that you can contact us with anything from a testing concept to a specific test and we can list of the equipment you need. Our pricing knowledge allows us to get you the best product for the least cost. "Value" is the key word. We have many direct agreements with many manufacturers so we can often cut out a lauer of mark-up and provide you the best product for the least cost. I often ask out customers, "do you want a Liquid Limit Machine?" The answer is always, "yes". How about a quality Pan or SApoon? The answer is always, "no". With our experience, we can save our customers time, money, and provide them the best value.
          </p>
          <p>
            Customers often tell us that they dont have a Part Number, but just tell us the type of equipment, or sometimes just the test they want to perform. It saves them time and we ensure they, "get what they want, when they want it, at a fair price".
          </p>
          <p>
          Our office/warehouse is located off Dry Creek and I-25. It is on the south end of Denver and easily accessible. We boast an adequate inventory consisting of most testing items one would need in a hurry. Other items, we ship direct from the factory; it usually takes 3-4 days and our customers save substantially.
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
