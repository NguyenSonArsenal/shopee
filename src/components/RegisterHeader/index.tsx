import { Link } from 'react-router-dom'
import { LogoShopee } from '../../common/icons'

const RegisterHeader = () => {
  return (
    <header className='py-5'>
      <div className={'px-3.5 max-w-7xl mx-auto px-4'}>
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
