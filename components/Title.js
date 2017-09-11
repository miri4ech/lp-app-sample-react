import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = theme => {
  return {
    root: {
      margin: 'auto',
      maxWidth: '800px'
    },
    image: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '280px'
    },
    message: {
      display: 'inline-block',
      verticalAlign: 'top',
      paddingTop: '80px',
      minWidth: '280px',
      maxWidth: '520px'
    }
  }
}

const Header = ({classes}) =>
  <div className={classes.root}>
    <div className={classes.message}>
      <Typography type='display1'>
      Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. 
      </Typography>
    </div>
  </div>

export default withStyles(styles)(Header)
