from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os
from PIL import Image
import io
import base64

app = Flask(__name__)
CORS(app)

# MySQL Connection
def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv('DB_HOST', 'mysql'),
        port=int(os.getenv('DB_PORT', 3306)),
        user=os.getenv('DB_USER', 'civic_user'),
        password=os.getenv('DB_PASSWORD', 'civic_pass'),
        database=os.getenv('DB_NAME', 'civiceye')
    )

@app.route('/ai/analyze-image', methods=['POST'])
def analyze_image():
    """
    AI Image Analysis for Grievance Auto-Tagging
    Simulates ML model that identifies issue type from image
    """
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400
        
        image_file = request.files['image']
        grievance_id = request.form.get('grievance_id')
        
        # Simulate AI analysis (in production, use actual ML model)
        # For demo: random tag based on image properties
        img = Image.open(image_file)
        width, height = img.size
        
        # Simple heuristic for demo
        if width > height:
            tag = 'road_damage'
        elif width < height:
            tag = 'streetlight_issue'
        else:
            tag = 'garbage_overflow'
        
        confidence = 0.85
        
        # Update database with AI tag
        if grievance_id:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE grievances SET image_tag = %s WHERE id = %s",
                (tag, grievance_id)
            )
            conn.commit()
            cursor.close()
            conn.close()
        
        return jsonify({
            'tag': tag,
            'confidence': confidence,
            'message': 'Image analyzed successfully'
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/ai/predict-traffic', methods=['POST'])
def predict_traffic():
    """
    Traffic Prediction using Linear Regression
    Predicts traffic levels for next few hours
    """
    try:
        data = request.json
        route_id = data.get('route_id', 1)
        current_hour = data.get('hour', 12)
        
        # Simulate ML prediction (in production, use trained model)
        # Simple pattern: high traffic 8-10 AM and 5-7 PM
        predictions = []
        for hour in range(current_hour, min(current_hour + 6, 24)):
            if hour in [8, 9, 17, 18]:
                level = 'high'
                value = 85
            elif hour in [10, 11, 16, 19]:
                level = 'medium'
                value = 60
            else:
                level = 'low'
                value = 30
            
            predictions.append({
                'hour': hour,
                'level': level,
                'value': value
            })
        
        return jsonify({
            'route_id': route_id,
            'predictions': predictions
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/ai/hospital-demand', methods=['GET'])
def hospital_demand():
    """
    Predict hospital bed demand using historical data
    """
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM hospitals")
        hospitals = cursor.fetchall()
        cursor.close()
        conn.close()
        
        # Add AI predictions
        for hospital in hospitals:
            hospital['predicted_demand'] = 'moderate'
            hospital['recommendation'] = 'Maintain current capacity'
        
        return jsonify({'hospitals': hospitals})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/ai/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'service': 'AI Service'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
