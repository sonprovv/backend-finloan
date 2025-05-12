FROM python:3.11

WORKDIR /app

# Install system dependencies for image processing libraries and netcat for wait script
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    netcat-openbsd \
    tesseract-ocr \
    libtesseract-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Create upload directory
RUN mkdir -p uploads
RUN chmod 777 uploads

# Set environment variables with production values
# OCR.space API key (Free tier - thực hiện đăng ký miễn phí tại https://ocr.space/ocrapi#free)
ENV OCR_API_KEY=K84590567688957
ENV OCR_API_ENDPOINT=https://api.ocr.space/parse/image
ENV UPLOAD_DIR=/app/uploads
ENV MAX_UPLOAD_SIZE=10485760
ENV VERIFICATION_API_KEY=YOUR_API_KEY
ENV VERIFICATION_API_ENDPOINT=https://api.verification-provider.com/verify
ENV SECRET_KEY=f823j0498fpj9821089jf128h0v1p2h0198hfe192hf0921h8f

COPY . .

EXPOSE 8008

# Simple startup command to wait for DB and start the service
CMD ["bash", "-c", "echo 'Waiting for database to be ready...' && \
    until nc -z identity-verification-db 3306; do echo 'Waiting for identity-verification-db:3306...'; sleep 1; done && \
    echo 'Database is up and running!' && \
    echo 'Starting Identity Verification Service...' && \
    cd /app && uvicorn app.main:app --host 0.0.0.0 --port 8008"]