import { AuroraBackground } from '@/components/ui/aurora-background'
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from "motion/react";
import Form from "@/components/Form"

type WelcomeProps = {
    clientes: number
}

export default function Welcome({clientes}: WelcomeProps) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
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
                        <Form></Form>
                        <div className=''>
                            El consurso comenzará pronto
                        </div>
                        <div>
                            Ya tenemos más de {clientes} participantes
                        </div>
                </motion.div>
            </AuroraBackground>
        </>
    );
}
