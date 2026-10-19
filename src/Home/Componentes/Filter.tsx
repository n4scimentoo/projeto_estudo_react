
import logoSearch from '../../Assets/image_d3e2c883-removebg-preview.png'

export default function Filter() {
    return (
        <div className="flex flex-col items-center align-center w-full max-w-170 h-full max-h-28 mt-2.5 mb-25 py-0 px-0">
            <h5 className="max-w-170 h-28 p-1.25  text-[26px] text-(--cor-botao) font-semibold">Busque o conteúdo que deseja assistir hoje</h5>
            <p className="pb-3.75 text-[16px] text-(--cor-botao)">Conteúdo exclusivo todos os dias</p>
            <div className="w-full  flex justify-between">
                <input type="text" placeholder="Pesquisar..." className="pl-2.5  w-[90%] h-full border rounded-sm border-[#cccccc46] bg-[#f8f8f8]" />
                <button 
                className="w-12.5 h-12.5 bg-[#00a1f70f] border-0 rounded-[5px] cursor-pointer flex items-center justify-center transition-[background-color,transform] duration-250 ease-in-out hover:bg-[#cbecfe] hover:scale-[1.08] hover:-translate-y-px">
                    <img src={logoSearch} alt="Buscar" className="w-6.25 h-6.25 "/>
                </button>
            </div>
        </div>
    )
}
