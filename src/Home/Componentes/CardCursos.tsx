type FilterProps = {
    title: string;
    foto: string;
  };

export default function CardCursos(props: FilterProps) {
    return (
        <div className="flex flex-col h-[282.8px] w-56.5 items-center justify-evenly rounded-sm border-2 border-(--cor-botao) ">
            <img src={props.foto} alt={`Logo ${props.title}`} className="w-30"/>
            <div>
                <h6>{props.title}</h6>
                <p>9h</p>
                <button>Inscrever-se</button>
            </div>
        </div>
    )
}