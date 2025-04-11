import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
  let [width, setWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // authenticate 상태가 변경될 때마다 실행되는 로직
    // 필요에 따라 추가적인 처리를 여기에 작성할 수 있습니다.
  }, [authenticate]);

  const handleAuthClick = () => {
    if (authenticate) {
      setAuthenticate(false);
    } else {
      navigate('/login');
    }
  };

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
          <div className="side-menu" style={{ width: width }}>
            <button className="closebtn" onClick={() => setWidth(0)}>
              &times;
            </button>
            <div className="side-menu-list" id="menu-list">
              {menuList.map((menu, index) => (
                <button key={index}>{menu}</button>
              ))}
            </div>
          </div>
          <div className='login-button'>
            <div className="burger-menu hide">
              <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
            </div>
              <div onClick={handleAuthClick}>
                <FontAwesomeIcon icon={faUser} className='login' />
                {authenticate ? '로그아웃' : "로그인"}
              </div>
          </div>
      </div>
      <div className='nav-section'>
        <Link to='/'>
          <img
          width={90}
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
