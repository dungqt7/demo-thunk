import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DemoForm from '../form/Form';
import './card.css';
const styles = {
  card: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }, 
};

const  SimpleCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent style = {{position: 'relative'}}>
            <Typography variant="h5"  style = {{textAlign: 'left'}}>
                Location
            </Typography>
            <Typography className = "setting"  style = {{textAlign: 'left', position: 'absolute'}} color="textSecondary" gutterBottom>
                Setting in the section apply to all added 
            </Typography>
            <Typography  variant="h5"  style = {{textAlign: 'left', fontSize: 14, fontWeight: 'bold', marginTop: 33}}>
                Ship-to
               
            </Typography>
            <DemoForm  />
            
      </CardContent>
    
    </Card>
      
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);