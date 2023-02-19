import { Link } from 'react-router-dom'
import { LogoShopee } from '../../common/icons'

const RegisterHeader = () => {
  return (
    <header className='py-5'>
      <div className={'container'}>
        <nav className={`flex items-end`}>
          <Link to='/'>
              <LogoShopee  className={'h-8 lg:h-11 fill-orange'}/>

          </Link>
          <div className="text-[#222] text-xl ml-4">Đăng kí</div>
        </nav>
      </div>
    </header>
  )
}

export default RegisterHeader;
