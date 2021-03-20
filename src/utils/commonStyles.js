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
  topMargin40: {
    marginTop: 40,
  },
  bottomMargin50: {
    marginBottom: 50,
  },
  bottomMargin70: {
    marginBottom: 70,
  },
  topMargin15: {
    marginTop: 15,
  },
  topMargin30: {
    marginTop: 30,
  },
  formControlWidth: {
    minWidth: 174,
  },
  whiteText: {
    color: '#fff',
  },
  anchorText: {
    color: '#fff',
    textDecoration: 'none',
  },
});

export default commonStyles;
