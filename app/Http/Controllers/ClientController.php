<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;

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

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
