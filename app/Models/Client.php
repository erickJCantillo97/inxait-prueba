<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    /** @use HasFactory<\Database\Factories\ClientFactory> */
    use HasFactory;

    protected $fillable = [
        'nombre',
        'apellido',
        'cedula',
        'celular',
        'correo',
        'ciudad_id',
        'departamento_id',
        'habeas_data',
    ];

    public function ciudad()
    {
        return $this->belongsTo(Ciudad::class);
    }
    public function departamento()
    {
        return $this->belongsTo(Departamento::class);
    }
}
