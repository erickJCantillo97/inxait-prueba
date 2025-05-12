# Muchas gracias por la oportunidad.

## Descripcion de la solución.
Desarrollé la solución con laravel 12, por lo cual el proyecto debe ser desplegado en un entorno de desarrollo con php 8.2+ pero es recomendado usar php 8.3.
El starter kid que use es el que esta integrado en la version 12 de laravel y para este caso use react para el front-end, tambien existe la posibilidad de usar Vue.js y livewire, pero para efectos
de un mejor diseño ese fue el elegido, pero estoy capacitado para realizar la prueba en cualquiera de los mencionados anteriormente.

## Como usar la solucion. 

Hice uso de un servicio de laravel llamado laravel Cloud y desplegue la solucion en este [Enlace](https://inxait-prueba-main-qyxetu.laravel.cloud/).
Ahí encontrará las diferentes funciones que se solicitaron para la ejecución de la prueba. 

1. Inscribir Usuario.
2. Elegir un ganador _(Cuando haya mas 5 o mas inscritos)_.
3. Descargar Excel con los inscritos.

## Como desplegar la solución Ofline

La aplicación esta preparada para usar la base de datos que usted decida, el primer paso es crear la base de datos en el gestor que desee.

siga los siguientes pasos: 

1. Clone el proyecto:
    ```
    git clone https://github.com/erickJCantillo97/inxait-prueba.git
    ```
3. Dirigase a la raiz del proyecto y ejecute los siguientes comandos
   ```
   cp .env.example .env
   composer install
   npm install --legacy-peer-deps
   php artisan key:generate
    ```
5. El nuevo archvio **.env** configure la BD.
6. Ejecute el proyecto con los comandos.
   ```
   npm run build
   php artisan serve
    ```

Muchas gracias una vez mas y espero me vaya bien en esta prueba





