/* 

your exercise is to create registration form with validation using formik   also use "yup" with it with mate


*/


import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { ButtonGroup } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

const Signup = () => {


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('First Name is Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Last Name is Required'),
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters or more')
                .required('Password is Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{
                marginTop: 3
            }}>
                <Box>
                    <>
                        <Card>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h5" component="h5" sx={{
                                        marginTop: 3,
                                        padding: 2,
                                    }}>
                                        Registration Form
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                <form onSubmit={formik.handleSubmit} sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 2,
                                    gap: 2 ,
                                }}>
                                    <label htmlFor="firstName">First Name : </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                    /> <br />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className='alert-for-required'>{formik.errors.firstName}</div>
                                    ) : null}
                                    
                                    <label htmlFor="lastName">Last Name : </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                    /> <br />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className='alert-for-required'>{formik.errors.lastName}</div>
                                    ) : null}

                                    <label htmlFor="email">Email Address : </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    /> <br />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className='alert-for-required'>{formik.errors.email}</div>
                                    ) : null}

                                    <label htmlFor="password">Password : </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    /> <br />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className='alert-for-required'> {formik.errors.password}</div>
                                    ) : null}

                                    <label htmlFor="confirmPassword">Confirm Password : </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    /> <br />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className='alert-for-required'>{formik.errors.confirmPassword}</div>
                                    ) : null}

                                    <button type="submit">Submit</button>
                                </form>
                                </Grid>
                            </Grid>
                        </Card>            
                    </>
                </Box>
            </Container>
        </React.Fragment>
    )
}


export default Signup