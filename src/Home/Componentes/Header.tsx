import './Header.css'
import logoCode from '../../assets/f827a548586616bc6d48a233e772b60c45a1890e.png'

function Header() {
    return (
        <header className="flex justify-between items-center p-5 w-full max-w-300">
            <img src={logoCode} alt="Logo" className="w-62.5 h-auto" />
            <button 
            className="w-39 h-10 bg-[#0091DE] text-white border-none rounded-md cursor-pointer font-sen font-size-18 transform scale-100 transition-transform duration-200 hover:scale-105">Premium</button>
        </header>
    );
}
export default Header
    