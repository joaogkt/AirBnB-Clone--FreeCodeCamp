import logo from '../img/airbnb-logo.png'

export default function Header(){
    return(
        <div className='navbar'>
            <img
            src={logo}
            alt = 'Logo' 
            />
        </div>
    )
}