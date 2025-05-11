import React from "react"

type props = {
    ganador: {
        nombre: string;
        apellido: string;
        cedula: string;
        celular: string;
        correo: string;
    }
}

export default function Ganador({ganador}: props) {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-2xl font-bold text-green-700 uppercase">El ganador es</h2>
            <div className="font-bold text-center flex flex-col items-center justify-center gap-y-2 mt-4 border p-4 rounded-xl shadow-2xl w-full bg-teal-500 text-white text-lg">
                <div className="flex items-center justify-between w-full">
                    <p>
                        Nombre: 
                    </p>
                    <p>{ganador.nombre} {ganador.apellido}</p>
                    
                </div>
                <div className="flex items-center justify-between w-full">
                    <p>
                        Cedula: 
                    </p>
                    <p>{ganador.cedula}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p>
                        Celular: 
                    </p>
                    <p>{ganador.celular}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p>
                        Correo: 
                    </p>
                    <p>{ganador.correo}</p>
                </div>
            </div>
        </div>
    )


}