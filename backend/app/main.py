from fastapi import FastAPI

app = FastAPI(
    title="SHAAN AI",
    description="AI Powered Desktop Assistant",
    version="0.1.0",
)

@app.get("/")
async def root():
    return {
        "assistant": "SHAAN AI",
        "status": "running",
        "version": "0.1.0",
        "message": "Welcome to SHAAN AI 🚀"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }