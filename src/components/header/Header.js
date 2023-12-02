import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='navbar'>
            <div className='for-you'><p>Для тебя, Настюша</p></div>
            <div className='year'><p>2024</p></div>
        </div>
        <div className='header__body'>
            <div className='header__title'>
                <p className='beauty'>BEAUTY</p>
                <p className='for-you'>Для тебя, Настюша</p>
            </div>
        </div>
    </header>
  );
}

export default Header;
