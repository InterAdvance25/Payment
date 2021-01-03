import React from 'react'
import styles from './Management.module.css';
const Management:React.FC = () => {
    
    return (
        <div className={styles.content}>
                <div className={styles.navbar}>
                <a href='/additionWorker' className="waves-effect waves-teal blue-grey darken-2 btn-flat blue-text text-lighten-5" style={{display:'block'}} >Добавить</a>
                <br/>
                <br/>
                <a href='/' className="waves-effect waves-teal blue darken-3 btn-flat blue-text text-lighten-5 " style={{display:'block'}}>Назад</a>
                </div>
                <div className={styles.workers}>
                <div className="row">
                    <div className="col s12 m6" style={{minWidth:"100%"}}>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <p>Джонатан</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Данные</a>
                            <a href="#">Удалить</a>
                        </div>
                    </div>
                </div>
             </div>
             <div className="row">
                    <div className="col s12 m6" style={{minWidth:"100%"}}>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <p>Джонатан</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Данные</a>
                            <a href="#">Удалить</a>
                        </div>
                    </div>
                </div>
             </div>
             <div className="row">
                    <div className="col s12 m6" style={{minWidth:"100%"}}>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <p>Джонатан</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Данные</a>
                            <a href="#">Удалить</a>
                        </div>
                    </div>
                </div>
             </div>
             
              </div>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>   
       </div>
    )
}
export default Management 
