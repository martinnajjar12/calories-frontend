import { makeStyles } from '@material-ui/core';

const commonStyles = makeStyles({
  textSecondary: {
    color: '#000',
    opacity: 0.5,
  },
  darkText: {
    color: '#000',
    opacity: 0.8,
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
  topMargin50: {
    marginTop: 50,
  },
  bottomMargin50: {
    marginBottom: 50,
  },
  topMargin15: {
    marginTop: 15,
  },
  formControlWidth: {
    minWidth: 174,
  },
  whiteText: {
    color: '#fff',
  },
});

export default commonStyles;
