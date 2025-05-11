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
import Ganador from "@/components/ganador"

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
          />  :
             <Ganador ganador={ganador} /> 
              
          }
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-red-600 hover:bg-red-500 hover:text-white cursor-pointer text-white absolute -top-4 py-2 px-3 -right-3 rounded-full">
                             X
                         </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
