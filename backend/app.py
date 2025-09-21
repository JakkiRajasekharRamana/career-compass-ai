from flask import Flask, request, jsonify
from flask_cors import CORS
import vertexai
from vertexai.generative_models import GenerativeModel

# Init Flask
app = Flask(__name__)
CORS(app)

# Init Vertex AI (Gemini)
vertexai.init(project="gen-ai-472811", location="us-central1")
model = GenerativeModel("gemini-1.0-pro")

@app.route("/")
def home():
    return jsonify({"status": "Career Compass API is running 🚀"})

@app.route("/api/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    profile = data.get("profile", "")

    prompt = f"""
    User profile: {profile}
    Suggest 2 possible career paths for this user.
    For each career:
    - Title
    - Why it's a good fit
    - 3 skills to learn
    - 2 learning resources with links
    Return in JSON format.
    """

    try:
        response = model.generate_content(prompt)
        return jsonify({"recommendations": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
