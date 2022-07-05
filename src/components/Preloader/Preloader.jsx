import loader from '../../assets/images/loader.svg'
import cl from './Preloader.module.css'

let Preloader = () =>{
    return <div>
        <img className={cl.preloader} src={loader} alt=""/>
    </div>
}
export default Preloader;