import './Logo.css'
import logo from '../../img/logo.svg'

const Logo = () => {
    return(
        <div className='logo'>
          <img className='logo-img' src={logo}  alt='logo'/>
          <p><strong>Buiatti</strong>books</p>
        </div>
    )
}

export default Logo