type FilterProps = {
  title: string;
  foto: string;
};

export default function CardCursos(props: FilterProps) {
  return (
    <div className="flex flex-col h-[282.8px] w-56.5 items-center justify-evenly rounded-sm border-2 border-(--cor-botao) ">
      <div className="w-30 h-30 flex justify-center">
        <img
          src={props.foto}
          alt={`Logo ${props.title}`}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start justify-end gap-3 w-[85%]">
        <h6>{props.title}</h6>
        <p>9h</p>
        <button className="bg-(--cor-botao) text-(--cor-branca) py-2 px-4 rounded-sm cursor-pointer w-full">
          Inscrever-se
        </button>
      </div>
    </div>
  );
}
