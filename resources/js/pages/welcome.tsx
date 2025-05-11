import { AuroraBackground } from '@/components/ui/aurora-background'
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from "motion/react";
import Form from "@/components/Form"
import SelectGanador from "@/components/selectGanador"
import { Button } from '@/components/ui/button';

type WelcomeProps = {
    departamentos: [],
    ciudades: [],
    clientes: number
}

export default function Welcome({ departamentos, ciudades, clientes }: WelcomeProps) {
    console.log(clientes);
    const { auth } = usePage<SharedData>().props;
    return (
        <>
            <Head title="Inicio">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Bienvenido al concurso
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        Solo tienes que inscribirte
                    </div>
                    <Form departamentos={departamentos} ciudades={ciudades}></Form>
                    
                    {
                        clientes < 5 ?
                            <div className='text-center  w-full items-center justify-center flex flex-col'>
                                <p>
                                El concurso comenzará pronto
                                </p>
                                <p>
                                Tenemos {clientes} participantes
                                </p>
                            </div> : <SelectGanador></SelectGanador>
                        
                    }


                </motion.div>
            </AuroraBackground>
        </>
    );
}
