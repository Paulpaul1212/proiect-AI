<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    // Ruta pentru înregistrare
Route::post('/register', 'AuthController@register');

// Ruta pentru autentificare
Route::post('/login', 'AuthController@login');

// Ruta pentru ieșire
Route::post('/logout', 'AuthController@logout');

});
