<?php

use App\Http\Controllers\ClientController;
use App\Models\Ciudad;
use App\Models\Client;
use App\Models\Departamento;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $departamentos = Departamento::orderBy('nombre')->get();
    return Inertia::render('welcome', [
        'departamentos' => $departamentos,
        'ciudades' => Ciudad::orderBy('nombre')->get(),
        'clientes' => Client::count(),
    ]);
})->name('home');

Route::resource('clients', ClientController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
