

import React from 'react'

import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import './Add.css'
import axios from 'axios';
function Add () {
    const SignupSchema = Yup.object().shape({
        name1: Yup.string()
          .min(3, 'Too Short!')
          .max(40, 'Too Long!')
          .required('Required'),


          description: Yup.string()
          .min(3, 'Too Short!')
          .max(40, 'Too Long!')
          .required('Required'),


          name2: Yup.string()
          .min(3, 'Too Short!')
          .max(40, 'Too Long!')
          .required('Required'),
        
          
         
      });
  return (
    <>
    <div className='formContainer'>
     <h1>Add Nitro</h1>
     <Formik
       initialValues={{
         name1: '',
         description:'',
         name2:''
        
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, {resetForm}) => {
         axios.post('http://localhost:8080/api/nitros', values).then((res)=>console.log(res.data))
         resetForm();
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <div className='form' >

            <Field name="name1" placeholder='Name' className='input'/>
           {errors.name1 && touched.name1 ? (
             <div>{errors.name1}</div>
           ) : null}
       



           <Field name="description" placeholder='description' className='input' />
           {errors.description && touched.description ? <div>{errors.description}</div> : null}

           <Field name="name2" placeholder='Name' className='input'/>
           {errors.name2 && touched.name2 ? (
             <div>{errors.name2}</div>
           ) : null}

        



           <button className='addBtn' type="submit">Submit</button>
            </div>
           
         </Form>
       )}
     </Formik>
   </div>
   
    </>
  )
}

export default Add






