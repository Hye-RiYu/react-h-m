import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img
        width={100}
        src='https://images.seeklogo.com/logo-png/6/2/hm-logo-png_seeklogo-64496.png' alt='logo' />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map(menu => <li>{menu}</li>)}
        </ul>
        <div className='menu-input'>
          <input type='text' placeholder='검색어를 입력해주세요' />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
