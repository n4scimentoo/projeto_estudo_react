import './Search.css'
import logoSearch from '../../Assets/image_d3e2c883-removebg-preview.png'

function Search() {
    return (
        <div className="container-search">
            <h5>Busque o conteúdo que deseja assistir hoje</h5>
            <p>Conteúdo exclusivo todos os dias</p>
            <div className="search">
                <input type="text" placeholder="Pesquisar..." className="input-search"/>
                <button className="btn-search">
                    <img src={logoSearch} alt="Buscar" className="logo-search"/>
                </button>
            </div>
        </div>
    )
}

export default Search