import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'
import favicon from '../../static/favicon.ico'
import Footer from '../components/footer/Footer'
const scrollLib = require('really-smooth-scroll')
scrollLib.shim()
scrollLib.config({
  mousewheelSensitivity: 7.5,
  keydownSensitivity: 7.5
})
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'author', content: 'Su Li'},
        { name: 'description', content: 'Front End Developer and UX Designer from Greater Seattle Area.' },
        { name: 'keywords', content: 'Su Li, Portfolio, Front End Developer, Web Developer, Design, Design Portfolio, UX Designer' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0'}
      ]}
      link={[
        { rel: 'icon', href: favicon}
      ]}
    />
    {children()}
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
