import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import axios from "axios"
import React from "react"
import { InfinitySpin } from 'react-loader-spinner'
import Ganador from "@/components/Ganador"

export default function AlertDialogDemo() {
  const [ganador, setGanador] = React.useState(null)
  const getGanador = async () => {
    const {data} = await axios.get(route('get.ganador'))
    setGanador(data.ganador)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={getGanador}>Elegir un ganador</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col items-center justify-center">
              {!ganador ?
            <InfinitySpin
            width="200"
            color="green"
          />  : <Ganador ganador={ganador} />
          }
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cerrar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
