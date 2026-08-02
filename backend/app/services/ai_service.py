from app.services.providers.gemini_provider import GeminiProvider


class AIService:
    def __init__(self):
        self.provider = GeminiProvider()

    def chat(self, message: str) -> str:
        return self.provider.chat(message)


ai_service = AIService()