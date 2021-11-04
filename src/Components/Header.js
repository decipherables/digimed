import React, {useState} from 'react'
import SearchBar from './SearchBar'
import profile from '../images/Joe.png'

export default function Header(props) {
    const [menuBtn, setMenuBtn]=useState(false);
    const styles = {
        profile: {
            background: `url(${profile})`,
            backgroundSize: 'cover' ,
            backgroundPosition: 'center'
        }
    }

    const menu_btn_clicked = () => {
        props.menuClicked();
        setMenuBtn(!menuBtn);
    }
    return (
        <div className={'header container'}>
            <div className={'menuIconAndSearchBar'}>
                <i className={`fas ${(menuBtn)?('fa-times'):('fa-bars')}`} onClick={menu_btn_clicked}/>
                <SearchBar/>
            </div>
            
            <div className={'headerLeft'}>
                <button className={'btn btn-primary'}>+ Add Patient</button>
                <i className={'fas fa-bell'}/>
                <section className={'profilePicture'} style={styles.profile}></section>
            </div>
        </div>
    )
}
