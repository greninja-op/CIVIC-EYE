<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GrievanceController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Authentication
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

// Module 1: Infrastructure & Grievance
Route::prefix('grievances')->group(function () {
    Route::post('/report', [GrievanceController::class, 'report']);
    Route::get('/track/{ticketId}', [GrievanceController::class, 'track']);
    Route::get('/feed', [GrievanceController::class, 'feed']);
    Route::post('/{id}/upvote', [GrievanceController::class, 'upvote']);
});

// Module 2: Municipal Services
Route::prefix('services')->group(function () {
    Route::get('/bills', [BillController::class, 'index']);
    Route::post('/bills/pay', [BillController::class, 'pay']);
    Route::get('/documents', [BillController::class, 'documents']);
});

// Module 3: Smart Mobility
Route::prefix('mobility')->group(function () {
    Route::get('/buses', function() {
        return response()->json(['buses' => []]);
    });
    Route::get('/parking', function() {
        return response()->json(['spots' => []]);
    });
});

// Module 4: Safety & Health
Route::prefix('safety')->group(function () {
    Route::post('/sos', function(Request $request) {
        return response()->json(['status' => 'alert_sent']);
    });
    Route::get('/hospitals', function() {
        return response()->json(['hospitals' => []]);
    });
});

// Module 5: Engagement
Route::prefix('engagement')->group(function () {
    Route::get('/notices', function() {
        return response()->json(['notices' => []]);
    });
    Route::get('/polls', function() {
        return response()->json(['polls' => []]);
    });
});
