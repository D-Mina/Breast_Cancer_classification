# 🩺 Breast Cancer Classification Web App

This project is a **full-stack deep learning web application** for **Breast Cancer Classification** using a **VGG19-based model**.
The app allows users to upload medical images and get predictions (**Benign, Normal, Malignant**) with probability scores.

It includes:

* **Frontend** (HTML templates for user interaction: Login, Signup, Learn More, Upload, etc.)
* **Backend** (Flask API for prediction and routing)
* **Deep Learning Model** (VGG19 trained on breast cancer dataset, saved as `cancer-model.h5`)
* **link** https://www.kaggle.com/code/minaashraf61/breastcare-ai

---

## 🚀 Features

* User authentication pages (Login, Signup, Forget Password).
* Informative **Learn More** page for awareness.
* Upload and classify breast cancer images into:

  * **Benign**
  * **Normal**
  * **Malignant**
* Flask backend for processing and prediction.
* REST API endpoint `/predict` for classification (returns JSON).

---

## 🏗️ Project Structure

```bash
Breast-Cancer-Classification/
│
├── static/                # CSS, JS, Images (frontend assets)
├── templates/             # HTML frontend templates
│   ├── index.html
│   ├── login.html
│   ├── signUp.html
│   ├── Forget.html
│   └── Learn_More.html
│
├── cancer-model.h5        # Pre-trained VGG19 model
├── app.py                 # Flask backend with routes & API
└── README.md              # Project documentation
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/breast-cancer-classification.git
cd breast-cancer-classification
```
## 📊 Model Details

* **Architecture**: VGG19 (pretrained on ImageNet, fine-tuned for 3-class classification).
* **Input size**: 224x224 pixels.
* **Classes**:

  * Benign
  * Normal
  * Malignant
* **Output**: Class with highest probability (Softmax).

---

## 🖥️ Frontend Pages

* **Index Page** (`/`) → Upload & Predict
* **Login Page** (`/login`)
* **Signup Page** (`/signUp`)
* **Forget Password** (`/forget`)
* **Learn More** (`/Learn_More`)

---

## 📦 Requirements

List of main dependencies:

```
Flask
tensorflow
numpy
Pillow
```
---
