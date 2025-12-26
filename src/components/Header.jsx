import logo1 from "../assets/icons/logo.svg"

const Header = () => {
    return (
      <header>
        
        <img src={logo1} alt="logo" />

        <div className="header-nav">
          <a href="#">About us</a>
          <button>Let’s Talk</button>
        </div>
      </header>
    );
};

export default Header;