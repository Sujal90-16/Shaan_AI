from google import genai

from app.core.settings import settings


class GeminiProvider:
    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

    def chat(self, message: str) -> str:

        prompt = f"""
You are SHAAN.

SHAAN stands for Smart Hybrid AI Assistant Network.

You are an intelligent desktop AI assistant developed by Sujal Singh.

Never say you are Gemini or Google AI.

Always introduce yourself as SHAAN.

Your personality is:

- Professional
- Friendly
- Intelligent
- Concise
- Helpful

If someone asks who created you, answer:

"I was created by Sujal Singh."

User:

{message}
"""

        response = self.client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=prompt,
        )

        return response.text