import React, { useEffect } from 'react'
import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { signupAction } from '../../Redux/Auth/Action'


const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(8,"Password must be at least 8 characters").required("Password is required"),
  })


export const Signup = () => {

    const initialValues = { email: "", username:"", name:"", password: "" };

    // to navigate to LOGIn function create
    const navigate=useNavigate(); 
    const handleNavigate=()=>navigate("/login");


    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    const toast = useToast();
    const {user} = useSelector(store=>store);
    const jwt=localStorage.getItem("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXJsaW5rIiwiaWF0IjoxNjk1MjYzODU1LCJhdXRob3JpdGllcyI6IiIsInVzZXJuYW1lIjoidmlub2RAZ21haWwuY29tIiwiZXhwIjoxNjk1Mjk5ODU1fQ.UCcQ3CS_wHG_SpKoqA68ajOYS5QrKm-9s-R9CAUaGU2nPcYww1JhZ5mo5ia-a5hBiMUc8V31q8bJ9j0IqikVQA");

 


    const handleSubmit = async (values, formikProps) => {
      dispatch(signupAction(values))
      console.log("values:", values); 
      formikProps.setSubmitting(false);
    
      // Check if signup was successful
      if (auth.signup && auth.signup.username) {
        toast({
          title: `Account Created. ${auth.signup.username}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    

    

    useEffect(() => {
      if (auth.signup && auth.signup.username) {
        navigate("/login");
        toast.success('Sign up successful!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      console.log("success")
      }
    }, [auth.signup, navigate, toast]);
    


    useEffect(() => {
      if(user.reqUser?.username){
        navigate(`/${user.reqUser?.username}`)
      }
    },[jwt,user.reqUser])
      

  return (
    <div>
        
        <div  className=' w-full text-sm '>
        <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          {/* <h1 style={{ textAlign: "center" }}>Sign Up</h1><br /> */}

          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>

                <Field name="email" >
                  {({field,form}) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input
                        className='w-full'
                        {...field}
                        id="email"
                        placeholder='Mobile Number or Email'
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="username" >
                  {({field,form}) => (
                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                      <Input
                        className='w-full mt-2'
                        {...field}
                        id="username"
                        placeholder='username'
                      />
                      <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field> 

                <Field name="name" >
                  {({field,form}) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <Input
                        className='  w-full mt-2'
                        {...field}
                        id="name"
                        placeholder='Name'
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field> 

                <Field name="password">
                  {({field,form}) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <Input
                        className='w-full  mt-2'
                        {...field}
                        id="password"
                        placeholder='Password'
                      />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* <p className='text-center my-4 text-sm'>People who use our service may have upload contact information to Instagram. Learn More</p> */}
                {/* <p className='text-center my-4 text-sm'>By Singing up,you agree to our Terms, Privacy and Cookies Policy.</p>  */}

                <Button className='w-full' mt={4} colorScheme='linkedin' type='submit' isLoading={formikProps.isSubmitting}>
                  Sign Up
                </Button>

              </form>
            )}
          </Formik>
        </Box>
      </div>

      <div  className='border bg-gray-50 border-slate-300 mt-5'>
        <p className='text-center py-2'>If You Already Have Account <span onClick={handleNavigate} className='ml-2 text-blue-600 cursor-pointer'>Sign In</span></p>
      </div>

    </div>
  )
}


export default Signup