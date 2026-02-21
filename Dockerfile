# Stage 1: Build the Application
# We use python:3.9 as the base for building and installing dependencies.
FROM python:3.9 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install system dependencies if needed
RUN apt-get update && apt-get install -y --no-install-recommends     build-essential     && rm -rf /var/lib/apt/lists/*

# Create a virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy requirements.txt if it exists (using wildcard to avoid build failure)
COPY requirements.tx[t] ./requirements.txt

# Install Python dependencies only if requirements.txt exists
RUN pip install --upgrade pip &&     if [ -f requirements.txt ]; then         pip install -r requirements.txt;     fi

# Copy the rest of the application source code
COPY . .

# Stage 2: Create the Final Production Image
# We use python:3.9 as the runtime image with all the necessary tools.
FROM python:3.9

# Set the working directory
WORKDIR /usr/src/app

# Copy the virtual environment from the build stage
COPY --from=build /opt/venv /opt/venv

# Copy the application code
COPY --from=build /usr/src/app .

# Set the virtual environment as the active Python environment
ENV PATH="/opt/venv/bin:$PATH"

# Create a non-root user to run the application
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /usr/src/app
USER appuser

# Expose the port your app runs on
ENV PORT=8080
EXPOSE $PORT

# Define the command to start your application
CMD ["python", "app.py"]
