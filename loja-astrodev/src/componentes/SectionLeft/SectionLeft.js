import { useState } from "react";
import { FiltrosContainer } from "./styles";
// import { useState } from "react";


export function SectionFiltros() {
    
    const [valorMaximo, setVaMax] = useState("")
    const [valorMinimo, setVaMin] = useState("")
    const [valorBusca, setBusca] = useState("")

    const handleInputVaMax = (event) => setVaMax(event.target.value)
    const handleInputVaMin = (event) => setVaMin(event.target.value)
    const handleInputBusca = (event) => setBusca(event.target.value)
    
    return(
        <section>
            <FiltrosContainer>
                <h2>Filtros</h2>
                <br></br>
                <form>
                    <label htmlFor="valormaximo">Valor Máximo:</label>
                    <input type="number" id="valormaximo" onChange={handleInputVaMax}></input>

                    <label htmlFor="valorminimo">Valor Mínimo:</label>
                    <input type="number" id="valorminimo" onChange={handleInputVaMin}></input>

                    <label htmlFor="buscar">Buscar:</label>
                    <input type="text" id="buscar" onChange={handleInputBusca}></input>

                </form>
            </FiltrosContainer>
        </section>
    )
}