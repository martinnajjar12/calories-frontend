import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import commonStyles from '../utils/commonStyles';
// import SubmitButton from './SubmitButton';

const useStyles = makeStyles({
  root: {
    width: '90%',
    maxWidth: 500,
    boxShadow: 'none',
    margin: '30px auto 0',
  },
  cardActionRoot: {
    flexDirection: 'column',
  },
  media: {
    height: 140,
  },
});

const MemberPageContent = ({
  name,
  image,
  info,
  changeHandler,
  value,
  // submitHandler,
}) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom color="textSecondary" variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionRoot}>
        <TextField
          onChange={e => changeHandler(name, e.target.value)}
          inputProps={{ min: 0, className: commonClasses.darkText }}
          fullWidth
          value={value}
          name={name}
          label={name}
          helperText="Should be in Gram"
          required
          variant="outlined"
          margin="dense"
          type="number"
        />
        {/* <SubmitButton submitHandler={submitHandler} name={name} /> */}
      </CardActions>
    </Card>
  );
};

MemberPageContent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  // submitHandler: PropTypes.func.isRequired,
};

export default MemberPageContent;
