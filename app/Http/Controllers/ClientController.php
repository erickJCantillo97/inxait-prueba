<?php

namespace App\Http\Controllers;

use App\Exports\ClientExport;
use App\Models\Client;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use Maatwebsite\Excel\Facades\Excel;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::orderBy('nombre')->get();
        return inertia('Clients/Index', [
            'clients' => $clients,
        ]);
    }

    
    public function store(StoreClientRequest $request)
    {
        
        $client = Client::create($request->validated());
        return back()->with('success', 'Cliente creado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function getGanador()
    {
        $ganador = Client::inRandomOrder()->first();
        return response()->json([
            'ganador' => $ganador,
        ]);
    }

    public function download()
    {
       return Excel::download(new ClientExport, 'clientes.xlsx');
    }
}
