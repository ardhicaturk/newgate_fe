import React from 'react';
import {
  Container,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';

import {
  KeyboardArrowLeft,
} from '@material-ui/icons'

const RegisterPage = ({...props}) => {

  return (
    <>
      <Typography variant={'h2'} className={'login-header-title'} >Complete Your Registration</Typography>
      <Container className='login-form'>
        <Grid container spacing={0} className={'header-form'}>
          <Grid item xs={1} >
            <IconButton>
              <KeyboardArrowLeft/>
            </IconButton>
          </Grid>
          <Grid item xs={10} style={{textAlign: 'center'}}>
            <Typography variant={'h5'} style={{padding: '8px 0 8px 0'}}>Register</Typography>
          </Grid>
          <Grid item xs={1} >

          </Grid>
        </Grid>

      </Container>
    </>
  )
};

export default RegisterPage;
