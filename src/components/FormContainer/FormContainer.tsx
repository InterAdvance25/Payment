import React from 'react'
import styles from './FormContainer.module.css';
import { Fields }  from './FormTypes';
import {ErrorMessage, Field, Form, Formik} from 'formik'
import *as Validate from 'yup';
import TextError from './TextError';
import { registerThunk } from '../../redux/userAuthReducer';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const FormContainer:React.FC = (props:any) =>  {
    
    const dispatch = useDispatch();

    const initialValus:Fields = {
        name:'',
        lastname:'',
        age:0,
        email:'',
        password:'',
        country:'',
        city:'',
        phone:'',
    }

    const validatioSchema = Validate.object({
    name:Validate.string()
        .min(3,"The field length should be more 2 character")
        .max(100,"The field can't be more 100 characters")
        .matches(/^[a-zA-Z а-яА-Я]+$/,"Allowed only letters")
        .required("Required"),
    lastname:Validate.string()
        .min(3,"The field length should be more 2 character")
        .matches(/^[a-zA-Z а-яА-Я]+$/,"Allowed only letters")
        .max(100,"The field can't be more 100 characters")
        .required("Required"),
    age:Validate.number()
        .typeError("age must be a number")
        .positive("Can't be negative")
        .min(18,"from 18")
        .max(120,'to 120')
        .required("Required"),
    email:Validate.string()
        .email("Invalid email")
        .min(3,"The field length should be more 2 characters")
        .max(100,"The field can't be more 100 characters")
        .required("Required"),
    password:Validate.string()
        .min(4,"Password should not be less 4 character")
        .max(100,"The field can't be more 100 characters")
        .required("Required"),
    country:Validate.string()
        .min(3,"The field length should be more 2 character")
        .matches(/^[a-zA-Z а-яА-Я]+$/,"Allowed only letters")
        .max(100,"The field can't be more 100 characters")
        .required("Required"),
    city:Validate.string()
        .min(3,"The field length should be more 2 character")
        .matches(/^[a-zA-Z а-яА-Я]+$/,"Allowed only letters")
        .max(100,"The field can't be more 100 characters")
        .required("Required"),
    phone:Validate.string()
        .matches(/^(\+)?(\(\d{2,3}\) ?\d|\d)(([-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/,"Invalid Format")
        .required("Required")
   })
   function Submit(value:Fields) {
       dispatch(registerThunk(value));
       props.history.push("/account");
   }
    return (
        <div className={styles.form}>
            <div className={styles.container}>
            <h1>Регистрация</h1>
             <Formik initialValues={initialValus} validationSchema={validatioSchema} onSubmit={Submit}  > 
                 {
                     formik => (
                         <Form>  
                             <div className={styles.control}>
                                 <label htmlFor="name">Name</label><br/>
                                 <Field id="name" name="name" placeholder="Enter your Name..."  className={styles.fieldText} />
                                 <ErrorMessage name="name" component={TextError} />
                             </div>
                             <br/>
                             <div className={styles.control}>
                                 <label htmlFor="lastname">LastName</label><br/>
                                 <Field id="lastname" name="lastname" placeholder="Enter your LastName..."  className={styles.fieldText} />
                                 <ErrorMessage name="lastname" component={TextError} />
                             </div>
                             <br/>
                             <div className={styles.control}>
                                 <label htmlFor="age">Age</label><br/>
                                 <Field id="age" name="age" type='number' min='18' max='120' maxLength='3' className={styles.fieldText} />
                                 <ErrorMessage name="age" component={TextError} />
                             </div>
                             <br/>
                
                             <div className={styles.control}>
                                 <label htmlFor="email">E-mail</label><br/>
                                 <Field id="email" name="email" placeholder="Enter your Email..."   className={styles.fieldText} />
                                 <ErrorMessage name="email" component={TextError} />
                             </div>
                             <br/>
                             <div className={styles.control}>
                                 <label htmlFor="password">Password</label><br/>
                                 <Field id="password" name="password" placeholder="Enter your Password..."  type="password" className={styles.fieldText} />
                                 <ErrorMessage name="password" component={TextError} />
                             </div>
                             <br/>
                             <h1>Локация</h1>
                             <div className={styles.control_group}>
                                <div>
                                    <label htmlFor="country" className={styles.mark_one}>Country</label><br/>
                                    <Field id="country" name="country" className={styles.fieldText} />
                                    <br/>
                                    <ErrorMessage name="country"  component={TextError} />
                                 </div>
                                 <div>
                                    <label htmlFor="city" className={styles.mark_two}>City</label><br/>
                                    <Field id="city" name="city" className={styles.fieldText} />
                                    <br/>
                                    <ErrorMessage name="city" component={TextError} />
                                 </div>
                             </div>
                             <br/>
                             <div className={styles.control}>
                                 <label htmlFor="phone">Phone</label><br/>
                                 <Field id="phone" name="phone" placeholder="+7(111)111-11-11" className={styles.fieldText} />
                                 <ErrorMessage name="phone"  component={TextError} />
                             </div>
                             <br/>
                             <div className={styles.control}>
                                 <button type="submit" className={styles.btnRedirect}>Регистрация</button>
                             </div>
                         </Form>
                     )
                 }
             </Formik>  
            </div>
        </div>
    )
}
export default withRouter(FormContainer);
