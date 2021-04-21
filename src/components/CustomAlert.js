import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import closeAlert from '../actions/closeAlert';

const CustomAlert = () => {
  const { bool, status, message } = useSelector(state => state.showAlert);
  const dispatch = useDispatch();
  return (
    <>
      <Snackbar open={bool} anchorOrigin={{ horizontal: 'center', vertical: 'top' }} onClose={() => dispatch(closeAlert())}>
        <Alert elevation={6} variant="filled" onClose={() => dispatch(closeAlert())} severity={status}>
          { message }
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomAlert;
