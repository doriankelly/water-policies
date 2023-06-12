import sequiaHidro from "../../../assets/homePageButtons/sequiaHidro.png";
import vector from "../../../assets/vector.png";
import { useState } from "react";
import { ShareButtons } from "../ShareButtons";

export const SequiaHidro = () => {
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    setShowShare(!showShare);
  };
  return (
    <section className="bg-terciary pb-16 rounded-t-3xl">
      <div>
        <img
          className="w-full rounded-t-3xl"
          src={sequiaHidro}
          alt="Image of dry valley"
        />
      </div>
      <h2 className="m-4 font-semibold">Sequía hidrológica</h2>
      <article>
        <div className="flex flex-wrap justify-start mx-3 md:justify-center ">
          <p className="my-1 ms-2 py-1 px-4 bg-primary text-white  text-center  text-xs rounded-3xl font-medium">
            Sequía
          </p>
        </div>
        <p className="m-4 pt-4 border-t border-secondary text-sm">
          Es el resultado de una disminución en la cantidad de agua almacenada
          en embalses, ríos, lagos y acuíferos. También puede ocurrir cuando los
          niveles de agua subterránea disminuyen significativamente.
        </p>
        <p className="mt-4 mx-4 text-sm">
          La sequía es un fenómeno extremo cuyos límites geográficos y
          temporales son difíciles de determinar, pudiendo convertirse en un
          desastre natural cuando no existe capacidad de gestión de los recursos
          hídricos. España acumula una sequía meteorológica de larga duración;
          en lo que llevamos de 2023 ha llovido un 26% menos de lo que sería
          normal (período 1991-2020).
        </p>
        <p className="m-4  pb-4 border-b border-secondary text-sm">
          Es de vital importancia gestionar correctamente nuestros recursos
          hídricos para afrontar las consecuencias devastadoras de la sequía
          como: escasez de agua, disminución de la producción agrícola, impacto
          económico, daños ambientales, agotamiento de los recursos hídricos y
          su impacto en la industria y el turismo. 
        </p>

        <div className="m-6 flex justify-between">
          <button onClick={handleClick} className="mb-8 px-2 py-2 drop-shadow ">
            <img className="" src={vector} alt="drought graph" />
          </button>
          {showShare && (
            <ShareButtons
              url={"megustalapizza.com"}
              title={"Me gusta la pizza"}
              handleClick={handleClick}
            />
          )}
          <a
            className="mb-8 px-5 py-2 drop-shadow w-content border border-terciary bg-secondary hover:bg-primary text-white text-center  shadow-lg rounded-3xl"
            href="https://www.miteco.gob.es/es/agua/temas/observatorio-nacional-de-la-sequia/que-es-la-sequia/default_old.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            +info
          </a>
        </div>
      </article>
    </section>
  );
};
