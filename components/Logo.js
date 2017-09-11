import React from 'react'
import { withStyles } from 'material-ui/styles'
import { blueGrey } from 'material-ui/colors'

const styles = theme => {
  return {
    root: {
      margin: '80px auto 0',
      maxWidth: '340px'
    },
    twiiter: {
      textAlign: 'center'
    }
  }
}

const Logo = ({classes}) =>
  <div className={classes.root}>
    <svg
      width='280px'
      height='280px'
      viewBox='0 0 512 512'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={blueGrey['300']}
        d='M163.082,73.407l-163.082,365.186l352.554,0l159.446,-365.186l-348.918,0Zm194.951,271.902l0,-239.6l104.614,0l-104.614,239.6Zm-159.049,-239.6l126.747,0l0,247.541l-126.747,-247.541Zm-149.179,300.58l124.286,-278.315l142.503,278.315l-266.789,0Z' />
    </svg>
  </div>

export default withStyles(styles)(Logo)
