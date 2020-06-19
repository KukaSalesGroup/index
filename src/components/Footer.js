import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
<<<<<<< HEAD
        <p className="copyright">&copy; All Rights Reserved<br />
        Kuka Sales Group prices are subject to change. Verify at time of order.
=======
        <p className="copyright">&copy; All Rights Reserved<br>
        </br>Kuka Sales Group prices are subject to change. Verify at time of order. THIS IS AN INERGRATION TEST FROM ANOTHER ACCOUNT
>>>>>>> d160ab72a114c6c9a76d6733b9bfdc9000f1f1f2
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
