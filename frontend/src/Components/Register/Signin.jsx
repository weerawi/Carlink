import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { signinAction } from '../../Redux/Auth/Action'
import { getUserProfileAction } from '../../Redux/User/UserAction'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(8,"Password must be at least 8 characters").required("Password is required"),
})

export const Signin = () => {
  const initialValues = { email: "", password: "" }; 
  const dispatch=useDispatch(); 

  // const {user} = useSelector(store=>store);
  // const jwt=localStorage.getItem("token");

  const handleSubmit = (values, formikProps) => {
    dispatch(signinAction(values))
    formikProps.setSubmitting(false);
  } 
 
  

  // useEffect(() => {
  //   if(jwt) dispatch(getUserProfileAction(jwt));
  // },[jwt ]);


  // useEffect(() => {
  //   if(user.reqUser?.username){
  //     navigate(`/${user.reqUser.username}`)
  //   }
  // },[jwt,user.reqUser]);

  // to navigate to signup function create
  const navigate= useNavigate();
  const handelNavigate=() => navigate("/signup")

  return (
    <div>
      <div  className='border '>
        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <h1 style={{ textAlign: "center" }}>Sign In</h1><br />

          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit} >

                <Field name="email" >
                  {({field,form}) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input
                        className='w-full'
                        {...field}
                        id="email"
                        placeholder='Mobile Number or Email'
                        autoComplete="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({field,form}) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <Input
                        className='w-full  mt-5'
                        {...field}
                        id="password"
                        placeholder='Password' 
                      />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <p className='text-center my-4 text-sm'>People who use our service may have upload contact information to Instagram. Learn More</p>
                <p className='text-center my-4 text-sm'>By Singing up,you agree to our Terms, Privacy and Cookies Policy.</p> 

                <Button className='w-full' mt={4} colorScheme='blue' type='submit' isLoading={formikProps.isSubmitting}>
                  Sign In
                </Button>

              </form>
            )}
          </Formik>
        </Box>
      </div>

      <div  className='border border-slate-300 mt-5'>
        <p className='text-center py-2'>If You Don't Have Account <span onClick={handelNavigate} className='ml-2 text-blue-600 cursor-pointer'>Sign Up</span></p>
      </div>
    </div>
  )
}

export default Signin
