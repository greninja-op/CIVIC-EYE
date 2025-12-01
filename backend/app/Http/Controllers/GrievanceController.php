<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grievance;

class GrievanceController extends Controller
{
    public function report(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required|string',
            'description' => 'nullable|string',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
        ]);

        $grievance = Grievance::create([
            'category' => $validated['category'],
            'description' => $validated['description'] ?? '',
            'latitude' => $validated['latitude'] ?? null,
            'longitude' => $validated['longitude'] ?? null,
            'status' => 'pending',
            'upvotes' => 0,
        ]);

        return response()->json([
            'message' => 'Grievance reported successfully',
            'ticket_id' => $grievance->id,
        ], 201);
    }

    public function track($ticketId)
    {
        $grievance = Grievance::find($ticketId);
        
        if (!$grievance) {
            return response()->json(['error' => 'Ticket not found'], 404);
        }

        return response()->json([
            'ticket_id' => $grievance->id,
            'status' => $grievance->status,
            'category' => $grievance->category,
            'created_at' => $grievance->created_at,
        ]);
    }

    public function feed(Request $request)
    {
        $grievances = Grievance::orderBy('created_at', 'desc')
            ->limit(20)
            ->get();

        return response()->json(['issues' => $grievances]);
    }

    public function upvote($id)
    {
        $grievance = Grievance::find($id);
        
        if (!$grievance) {
            return response()->json(['error' => 'Not found'], 404);
        }

        $grievance->increment('upvotes');

        return response()->json([
            'message' => 'Upvoted successfully',
            'upvotes' => $grievance->upvotes,
        ]);
    }
}
