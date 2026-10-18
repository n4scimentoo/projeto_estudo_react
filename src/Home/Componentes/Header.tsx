import './Header.css'
import logoCode from '../../assets/f827a548586616bc6d48a233e772b60c45a1890e.png'

function Header() {
    return (
        <header>
            <img src={logoCode} alt="Logo" className="logoCode" />
            <button className="btn-premium">Premium</button>
        </header>
    );
}
export default Header
