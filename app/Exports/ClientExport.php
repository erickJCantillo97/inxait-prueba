<?php

namespace App\Exports;

use App\Models\Client;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;

class ClientExport implements FromView
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): \Illuminate\View\View
    {
        return view('exports.clients', [
            'clients' => Client::all(),
        ]);
    }
}
