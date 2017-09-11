import React, { Component } from 'react'
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'
import theme, { jss, sheetsRegistry } from '../theme'

const styles = theme => {
  return {
    '@global': {
      html: {
        background: theme.palette.background.default
      },
      body: {
        margin: 0
      },
      '*': {
        fontSmoothing: 'antialiased'
      }
    }
  }
}

export default Children => {
  return class Root extends Component {
    render () {
      return (
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <MuiThemeProvider theme={theme}>
            <Children {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      )
    }

    componentDidMount () {
      const styleSheets = document.querySelector('.styleSheets')
      if (styleSheets && styleSheets.parentNode) {
        styleSheets.parentNode.removeChild(styleSheets)
      }
    }
  }
}
