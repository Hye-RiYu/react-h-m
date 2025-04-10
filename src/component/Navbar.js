import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;

      // url을 바꿔준다
      navigate(`/?q=${keyword}`)
    }
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
        <Link to='/'>
          <img
          width={100}
          src='https://images.seeklogo.com/logo-png/6/2/hm-logo-png_seeklogo-64496.png' alt='logo' />
        </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map(menu => <li>{menu}</li>)}
        </ul>
        <div className='menu-input'>
          <input type='text' placeholder='검색어를 입력해주세요' onKeyDown={(event) => search(event)}/>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
