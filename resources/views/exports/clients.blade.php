<table>
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cedula</th>
        <th>Celular</th>
        <th>Correo</th>
        <th>Departamento</th>
        <th>Ciudad</th>
    </tr>
    </thead>
    <tbody>
    @foreach($clients as $client)
        <tr>
            <td>{{ $client->nombre }}</td>
            <td>{{ $client->apellido }}</td>
            <td>{{ $client->celular }}</td>
            <td>{{ $client->correo }}</td>
            <td>{{ $client->departamento->nombre }}</td>
            <td>{{ $client->ciudad->nombre }}</td>
            <td>{{ $client->cedula }}</td>
        </tr>
    @endforeach
    </tbody>
</table>