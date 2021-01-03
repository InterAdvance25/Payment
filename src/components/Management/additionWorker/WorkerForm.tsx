import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import *as Validate from 'yup';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './WorkerForm.module.css';
import Axios from 'axios';
const WorkerForm:React.FC = () => {

    const initialValues = {
        name:'',
        lastname:'',
        age:0,
        email:'',
        position:'',
        salary:'',
        country:'',
        city:'',
        phone:'',
    }
    async function Submit(value:any) {
        console.log(value);
       await Axios.post("https://localhost:44381/api/Worker",{value}).then(p => p.data).catch(eror => console.log(eror));
       console.log("Executed");
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
        country:Validate.string()
            .min(3,"The field length should be more 2 character")
            .matches(/^[a-zA-Z а-яА-Я]+$/,"Allowed only letters")
            .max(100,"The field can't be more 100 characters")
            .required("Required"),
        city:Validate.string()
            .min(3,"The field length should be more 2 character")
            .matches(/^[a-zA-Z а-яА-Я -]+$/,"Allowed only letters")
            .max(100,"The field can't be more 100 characters")
            .required("Required"),
        phone:Validate.string()
            .matches(/^(\+)?(\(\d{2,3}\) ?\d|\d)(([-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/,"Invalid Format")
            .required("Required")
       });
    return (
        <div style={{gridColumn:'2',gridRow:'1/-1',margin:"40px"}}>
             <Formik initialValues={initialValues} validationSchema={validatioSchema} onSubmit={Submit} > 
                 {
                     formik => (
                         <Form>  
                             <div>
                                 <label htmlFor="name" className={styles.mark}>Name</label>
                                 <Field id="name" name="name" className={styles.inp} placeholder="Enter your Name..."   />
                                 <ErrorMessage name="name"  render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>} />
                             </div>
                             <br/>
                             <div>
                                 <label htmlFor="lastname" className={styles.mark}>LastName</label>
                                 <Field id="lastname" name="lastname" className={styles.inp} placeholder="Enter your LastName..."   />
                                 <ErrorMessage name="lastname" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>} />
                             </div>
                             <br/>
                             <div >
                                 <label htmlFor="age" className={styles.mark}  >Age</label>
                                 <Field id="age" name="age" className={styles.inp} type='number' min='18' max='120' maxLength='3' />
                                 <ErrorMessage name="age" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>} />
                             </div>
                             <br/>
                             <div >
                                 <label htmlFor="email" className={styles.mark}  >E-mail</label>
                                 <Field id="email" name="email" className={styles.inp} placeholder="Enter your Email..."   />
                                 <ErrorMessage name="email" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>}  />
                             </div>
                             <br/>
                             <div>
                                 <label htmlFor="position" className={styles.mark}>Position</label>
                                 <Field id="position" name="position" className={styles.inp} />
                                 <ErrorMessage name="position" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>}  />
                             </div>
                             <br/>
                             <div >
                                 <label htmlFor="salary" className={styles.mark} >Salary</label>
                                 <Field id="salary" name="salary" className={styles.inp} />
                                 <ErrorMessage name="salary" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>}  />
                             </div>
                             <br/>
                             <div>
                                <div>
                                    <label htmlFor="country"  className={styles.mark}>Country</label>
                                    <Field id="country" className={styles.inp} name="country" />
                                    <br/>
                                    <ErrorMessage name="country" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>} />
                                 </div>
                                 <div>
                                    <label htmlFor="city" className={styles.mark} >City</label>
                                    <Field id="city" className={styles.inp} name="city"  />
                                    <br/>
                                    <ErrorMessage name="city" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>} />
                                 </div>
                             </div>
                             <br/>
                             <div>
                                 <label htmlFor="phone" className={styles.mark}>Phone</label>
                                 <Field id="phone" className={styles.inp} name="phone" placeholder="+7(111)111-11-11"  />
                                 <ErrorMessage name="phone" render={(errorMessage) => 
                                 <label className={styles.errorMark}>{errorMessage}</label>}   />
                             </div>
                             <br/>
                             <div>
                                 <button type="submit" className="waves-effect waves-light btn-large indigo darken-4" >  
                                        Добавить
                                 </button>
                                
                             </div>
                         </Form>
                     )
                 }
             </Formik>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>   
         </div>
    )
}
export default WorkerForm;










