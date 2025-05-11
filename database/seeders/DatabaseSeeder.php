<?php

namespace Database\Seeders;

use App\Models\Ciudad;
use App\Models\Departamento;
use App\Models\User;
use GuzzleHttp\Client;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $client = new Client(
        [
           'base_uri' =>'https://www.datos.gov.co',
        ]
    );
    $response = $client->request('get', 'resource/xdk5-pm3f.json');
    $municipios = json_decode($response->getBody()->getContents());
    foreach ($municipios as  $value) {
        $id = Ciudad::firstOrcreate([
            'departamento_id' => Departamento::firstOrCreate([
                'nombre' => $value->departamento
            ])->id,
            'nombre' => $value->municipio,
        ]);
    }
}
}
