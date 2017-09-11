import { create } from 'jss'
import preset from 'jss-preset-default'
import vendorPrefixer from 'jss-vendor-prefixer'
import { SheetsRegistry } from 'react-jss'
import { createMuiTheme, createTypography } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import * as overrides from './overrides'
import palette from './palette'
import shadows from './shadows'

const base = createMuiTheme({palette, overrides, shadows})

const typography = createTypography(base.palette, {
  fontFamily: '\'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif',
  fontWeightMedium: 400,
  fontWeightRegular: 300
})

base.palette.text.primary = 'rgba(0, 0, 0, 0.85)'
base.palette.text.secondary = 'rgba(0, 0, 0, 0.5)'

const theme = {
  ...base,
  typography: {
    ...typography,
    body1: {
      ...typography.body1,
      color: base.palette.text.primary,
      letterSpacing: '0.03em'
    },
    body2: {
      ...typography.body2,
      color: base.palette.text.primary,
      letterSpacing: '0.03em'
    },
    title: {
      ...typography.title,
      color: base.palette.text.primary,
      letterSpacing: '0.03em'
    },
    subheading: {
      ...typography.subheading,
      letterSpacing: '0.03em'
    },
    caption: {
      ...typography.caption,
      letterSpacing: '0.03em'
    },
    button: {
      ...typography.button,
      letterSpacing: '0.03em',
      textTransform: 'none'
    }
  }
}

const jss = create(preset())

jss.use(vendorPrefixer())

jss.options.createGenerateClassName = createGenerateClassName

const sheetsRegistry = new SheetsRegistry()

const styleSheet = () => sheetsRegistry.toString()

export { theme as default, styleSheet, jss, sheetsRegistry }
