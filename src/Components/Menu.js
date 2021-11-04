import React, {useState} from 'react'
import { BrowserRouter, Router, Link } from 'react-router-dom'

export default function Try(props) {

                                    // Setting states for the Menu lists
                                        const [menuPatient, setMenuPatient] = useState(false);
                                        const [menuDoctor, setMenuDoctor] = useState(false);
                                        const [menuEmergency, setMenuEmergency] = useState(false);
                                        const [menuExpense, setMenuExpense] = useState(false);

    
    const menu_patient_clicked =()=> {
        setMenuPatient(!menuPatient);
        setMenuExpense(false);
        setMenuDoctor(false);
        setMenuEmergency(false);
    }
    const menu_doctor_clicked =()=> {
        setMenuDoctor(!menuDoctor);
        setMenuPatient(false);
        setMenuExpense(false);
        setMenuEmergency(false);
    }
    const menu_emergency_clicked =()=> {
        setMenuEmergency(!menuEmergency);
        setMenuPatient(false);
        setMenuDoctor(false);
        setMenuExpense(false);
    }
    const menu_expense_clicked =()=> {
        setMenuExpense(!menuExpense);
        setMenuPatient(false);
        setMenuDoctor(false);
        setMenuEmergency(false);
    }
    const menu_logout_clicked =()=> {
        props.is_login();
        localStorage.setItem('logged', 'false')
    }

    return (
        <div className={'menuContainer'}>
            {/* <Router> */}
            <ul className={'menuLists'}>
                <li><Link className={'navLink'} to='/'><i className={'fas fa-home'}/>Dashboard</Link></li>
                <li onClick={menu_patient_clicked}><Link className={'navLink'} to='#'><i className={'fas fa-user-plus'}/>Patient</Link><i className={`fas ${(menuPatient)?('fa-chevron-down'):('fa-chevron-right')}`}/></li>
                    {(menuPatient)?(<ul className={'menu_subLists'}>
                        <li>Patient List</li>
                        <li>Patient Profile</li>
                        <li>Add New Patient</li>
                    </ul>):('')
                    }
                <li onClick={menu_doctor_clicked}><Link className={'navLink'} to='#'><i className={'fas fa-user-md'}/>Doctor</Link><i className={`fas ${(menuDoctor)?('fa-chevron-down'):('fa-chevron-right')}`}/></li>
                    {(menuDoctor)?(<ul className={'menu_subLists'}>
                        <li>All Doctors</li>
                        <li>Doctor Profile</li>
                        <li>Add New Doctor</li>
                        <li>Appointment</li>
                    </ul>):('')
                    }
                <li onClick={menu_emergency_clicked}><Link className={'navLink'} to='#'><i className={"fas fa-lightbulb"}></i>Emergency</Link><i className={`fas ${(menuEmergency)?('fa-chevron-down'):('fa-chevron-right')}`}/></li>
                    {(menuEmergency)?(<ul className={'menu_subLists'}>
                        <li>Emergency Form</li>
                        <li>Emergency List</li>
                    </ul>):('')
                    }
                <li><Link className={'navLink'} to='/Patient'><i className={'fas fa-cut'}/>Operation</Link></li>
                <li><Link className={'navLink'} to='/'><i className={'fas fa-clipboard'}/>Reports</Link></li>
                <li><Link className={'navLink'} to='/'><i className={'fas fa-user-edit'}/>Accounts</Link></li>
                <li onClick={menu_expense_clicked} ><Link className={'navLink'} to='#'><i className={'fas fa-file-invoice-dollar'}/>Expense</Link><i className={`fas ${(menuExpense)?('fa-chevron-down'):('fa-chevron-right')}`}/></li>               
                    {(menuExpense)?(<ul className={'menu_subLists'}>
                        <li>Expense List</li>
                        <li>Add Expense</li>
                    </ul>):('')
                    }
                 <li onClick={menu_logout_clicked} ><Link onClick={menu_logout_clicked}  className={'navLink'} to='#'><i className={'fas fa-file-invoice-dollar'}/>LogOut</Link></li>
            </ul>
            {/* </Router> */}
        </div>
    )
}
