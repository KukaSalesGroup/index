import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; All Rights Reserved<br>
        </br>Kuka Sales Group prices are subject to change. Verify at time of order.
        <br>TEST TO CONFIRM INTEGRATION</br>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
