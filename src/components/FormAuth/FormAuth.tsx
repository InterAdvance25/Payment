import React, { useState }  from 'react'
import styles from './FormAuth.module.css';
import *as Validate from 'yup';
import {ErrorMessage, Field, Form, Formik} from 'formik'
import { Auth } from './formtype';
import TextError from '../FormContainer/TextError';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authThunk } from '../../redux/userAuthReducer';
import { compose } from 'redux';

const FormAuth = (props:any):JSX.Element => {
    const dispatch = useDispatch();
    const [state,setState] = useState(false);
    const initialValues:Auth = {
        email:'',
        password:''
    }
    const validationSchema = Validate.object().shape({
    email:Validate.string()
        .email("Invalid email").notOneOf(["admin@mail.ru"],"Email already is taken")
        .required("Required"),
    password:Validate.string().required("Required")
    });
    const Submit = async (values:Auth):Promise<void> =>  {
        setState(true);
        await dispatch(authThunk(values));
        props.history.go();
        console.log("Request");

    }
    return (
        <div className={styles.container}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={Submit}  > 
                 {
                     formik => (
                         <Form className={styles.form}>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <Field id="email" name="email" maxLength="100" placeholder="Enter E-mail" />
                                    <ErrorMessage name="email"  component={TextError} />
                                </div>
                                <br/>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <Field id="password" name="password" type="password" maxLength="100" placeholder="Enter password" />
                                    <ErrorMessage name="password" component={TextError} />
                                </div>
                                <br/>
                                <div className={styles.select_container}>
                                    <div>
                                       {
                                           state ? "Загрузка..." : <button 
                                           className={styles.form_btn + ' ' + styles.btn} 
                                           type="submit"
                                           >Войти</button>
                                       }
                                    </div>
                                    <div>
                                        <NavLink to="/reg" className={styles.form_btn}>Регистрация</NavLink>
                                    </div>
                                </div>
                         </Form>
                     )
                 }
             </Formik>  
        </div>
    )
}
export default compose(withRouter)(FormAuth);