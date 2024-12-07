from flask import Flask, request, render_template, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import io
from PIL import Image

app = Flask(__name__)

# Load the model (ensure the model path is correct)
model_path = 'cancer-model.h5'
model = load_model(model_path)

def classify_image(file_storage, model, class_labels=['Benign', 'Normal', 'Malignant']):
    target_size = (model.input_shape[1], model.input_shape[2])
    
    # Convert FileStorage to PIL Image
    image = Image.open(file_storage.stream)
    
    # Preprocess the image
    img = image.resize(target_size)
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    
    # Make predictions
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions[0])
    predicted_prob = np.max(predictions[0])
    return f"{class_labels[predicted_class]} ({predicted_prob * 100:.2f}%)"

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template('index.html')


@app.route("/forget") 
def forget():
     return render_template('Forget.html')
@app.route("/login") 
def login():
     return render_template('login.html')
@app.route('/signUp')
def signUp():
    return render_template('signUp.html')

@app.route('/Learn_More')
def Learn():
    return render_template('Learn_More.html')

@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    if file:
        prediction = classify_image(file, model)
        return jsonify({'prediction': prediction})
    return jsonify({'error': 'File not processed'})

if __name__ == "__main__":
    app.run(debug=True)

