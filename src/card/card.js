import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DemoForm from '../form/Form';

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

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Typography variant="h5"  style = {{textAlign: 'left'}}>
          Demo
        </Typography>
        <Typography  style = {{textAlign: 'left',  borderBottomColor: 'black'}} color="textSecondary" gutterBottom>
           Setting in the section apply to all added 
        </Typography>
        <Typography  variant="h5"  style = {{textAlign: 'left', fontSize: 14, fontWeight: 'bold'}}>
           Ship-to
        </Typography>
        <Typography style = {{textAlign: 'left'}}>
            <DemoForm/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);