import { makeStyles } from '@material-ui/core';

const commonStyles = makeStyles({
  textSecondary: {
    color: '#000',
    opacity: 0.5,
  },
  lightGreyBg: {
    backgroundColor: '#fafafa',
  },
  centerText: {
    textAlign: 'center',
  },
  centerVertically: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  topMargin: {
    marginTop: 50,
  },
});

export default commonStyles;
