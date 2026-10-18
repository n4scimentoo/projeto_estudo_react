import './Search.css'

function Search() {
    return (
        <div className="container-search">
            <h5>Busque o conteúdo que deseja assistir hoje</h5>
            <p>Conteúdo exclusivo todos os dias</p>
            <div>
                <input type="text" placeholder="Pesquisar..." className="input-search"/>
                <button className="btn-search">Buscar</button>
            </div>
        </div>
    )
}

export default Search