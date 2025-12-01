<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bill;

class BillController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user_id ?? 1; // Mock user
        
        $bills = Bill::where('user_id', $userId)
            ->where('status', 'pending')
            ->get();

        return response()->json(['bills' => $bills]);
    }

    public function pay(Request $request)
    {
        $validated = $request->validate([
            'bill_id' => 'required|integer',
        ]);

        $bill = Bill::find($validated['bill_id']);
        
        if (!$bill) {
            return response()->json(['error' => 'Bill not found'], 404);
        }

        $bill->update(['status' => 'paid']);

        return response()->json([
            'message' => 'Payment successful',
            'bill_id' => $bill->id,
        ]);
    }

    public function documents()
    {
        return response()->json([
            'documents' => [
                ['name' => 'Birth Certificate', 'status' => 'available'],
                ['name' => 'Income Certificate', 'status' => 'pending'],
            ]
        ]);
    }
}
