import Cursos from "./CardCursos";
import logoReact from "../../Assets/react.svg";
import logoNext from "../../Assets/Next.png";
import logoNode from "../../Assets/node.png";
import logoTailwind from "../../Assets/Vector.png";

export default function ContentCurso() {
  return (
    <section className="flex w-full max-w-300 min-h-92.5 h-full flex-col bg-(--cor-branca) rounded-sm text-center">
      <div className="m-3">
        <h3 className="text-[26px] text-(--cor-botao) font-bold ">
          Os cursos mais baixados
        </h3>
      </div>
      <div className="flex flex-row justify-between items-center px-1">
        <Cursos title="Fundamentos do React" foto={logoReact} />
        <Cursos title="Fundamentos do Node.js" foto={logoNode} />
        <Cursos title="Fundamentos do Next.js" foto={logoNext} />
        <Cursos title="Curso TailwindCSS" foto={logoTailwind} />
      </div>
    </section>
  );
}
{
  /* <div className="flex h-[282.8px] w-56.5 items-center justify-center rounded-sm border-2 border-(--cor-botao) ">

</div> */
}
