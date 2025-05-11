import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from "./input-error";
import { LoaderCircle } from "lucide-react";
import { Checkbox } from '@/components/ui/checkbox';
import Select from 'react-select'

type ClientForm = {
    nombre: string;
    apellido: string;
    cedula: string;
    departamento_id: number | null;
    ciudad_id: number | null;
    celular: string;
    correo: string;
    habeas_data: boolean;
}

type departamento = {
    id: number;
    nombre: string;
}

type props = {
    departamentos: departamento[],
    ciudades: {
        id: number;
        nombre: string;
        departamento_id: number;
    }[]
}

export default function AlertDialogDemo({ departamentos, ciudades }: props) {
    const [open, setOpen] = React.useState(false);
    const optionsDepartaments = departamentos.map((departamento) => ({
        value: departamento.id,
        label: departamento.nombre,
    }));

    const optionsCiudades = ciudades.map((ciudad) => ({
        value: ciudad.id,   
        label: ciudad.nombre,
        departamento_id: ciudad.departamento_id,
    }));
    const { data, setData, post, processing, errors, reset } = useForm<Required<ClientForm>>({
        nombre: '',
        apellido: '',
        correo: "",
        cedula: '',
        departamento_id: null,
        ciudad_id: null,
        celular: '',
        habeas_data: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('clients.store'), {
            onFinish: () => {
                reset();
                setOpen(false);
            },
            onError: (errors) => {
                console.log(errors);
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <AlertDialog  open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="bg-teal-400 hover:bg-teal-500 cursor-pointer text-white">Inscribete Aqui</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[80vw]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Registra tus datos y participa</AlertDialogTitle>
                    <AlertDialogDescription>
                        <form className="flex flex-col gap-6 mt-4" onSubmit={submit}>
                            <div className="grid gap-6 grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="nombre">Nombre</Label>
                                    <Input
                                        id="nombre"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="nombre"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        placeholder="Escribe tu nombre"
                                    />
                                    <InputError message={errors.nombre} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="apellido">Apellido</Label>
                                    <Input
                                        id="apellido"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="apellido"
                                        value={data.apellido}
                                        onChange={(e) => setData('apellido', e.target.value)}
                                        placeholder="Escribe tu apellido"
                                    />
                                    <InputError message={errors.apellido} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="cedula">Cedula</Label>
                                    <Input
                                        id="cedula"
                                        type="number"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="cedula"
                                        value={data.cedula}
                                        onChange={(e) => setData('cedula', e.target.value)}
                                        placeholder="Escribe tu cedula"
                                    />
                                    <InputError message={errors.cedula} />
                                </div>
                                
                                <div className="grid gap-2">
                                    <Label htmlFor="celular">Departamento</Label>
                                    
                                    <Select placeholder="Departamento" options={optionsDepartaments} onChange={(e) => setData('departamento_id', e?.value ?? null)} />
                                    <InputError message={errors.departamento_id} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="celular">Ciudad</Label>
                                    <Select placeholder="Seleccionar una Ciudad" options={optionsCiudades.filter((x) => x.departamento_id == data.departamento_id)} onChange={(e) => setData('ciudad_id', e?.value ?? null)} />
                                    <InputError message={errors.ciudad_id} />
                                </div>
                               <div className="grid gap-2">
                                    <Label htmlFor="celular">Celular</Label>
                                    <Input
                                        id="celular"
                                        type="number"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="celular"
                                        value={data.celular}
                                        onChange={(e) => setData('celular', e.target.value)}
                                        placeholder="Escribe tu celular"
                                    />
                                    <InputError message={errors.celular} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Correo Electronico</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="correo"
                                        value={data.correo}
                                        onChange={(e) => setData('correo', e.target.value)}
                                        placeholder="email@example.com"
                                    />
                                    <InputError message={errors.correo} />
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.habeas_data}
                                    onClick={() => setData('habeas_data', !data.habeas_data)}
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember">Autorizo el tratamiento de mis datos de acuerdo con la
                                    finalidad establecida en la política de protección de datos personales</Label>
                            </div>


                            <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Registrar
                            </Button>
                        </form>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogCancel className="bg-red-600 hover:bg-red-500 hover:text-white cursor-pointer text-white absolute -top-4 py-2 px-3 -right-3 rounded-full">
                    X
                </AlertDialogCancel>
            </AlertDialogContent>
        </AlertDialog>
    )
}
