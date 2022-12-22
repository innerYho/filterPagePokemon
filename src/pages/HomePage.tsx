import React from "react";
import { usePokemon } from "../hooks/usePokemon";

export const HomePage = () => {
    const { isLoading, pokemons } = usePokemon() //no debe haber ifs encima de un hook

    return (
        <div className="mt5">
            <h1>Listado de Pokemons</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemons.map(({ id, name, pic }) => (
                            // pokemons.map(poke => (
                            // <tr key={poke.id}> //para desestructurar la info
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td><img src={pic} alt={name} /></td>
                                {/* <td>{poke.}</td> */}
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}