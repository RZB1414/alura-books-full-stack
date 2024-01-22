import './IconesHeader.css'
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'

const IconesHeader = () => {

    const icones = [perfil, sacola]

    return(
        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src={icone} alt='menus'></img></li>
          ))}
        </ul>
    )
}

export default IconesHeader