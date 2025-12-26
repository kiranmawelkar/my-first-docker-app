# my-first-docker-app
# My First Dockerized Node.js App

This repository contains a simple Node.js application that is fully containerized using Docker and automated with a CI/CD pipeline via GitHub Actions.

## Tech Stack
- Language: Node.js
- Containerization: Docker
- Automation: GitHub Actions (CI/CD)
- Registry: Docker Hub

## Key Features
- Automated Build: Every time code is pushed to the main branch, GitHub Actions builds a new Docker image.
- Automated Push: The new image is automatically pushed to the Docker Hub repository.
- Secure Credentials: Docker Hub credentials are managed securely using GitHub Secrets.

## How to Run this Project
To run this image directly from Docker Hub, use the following commands in your terminal:

```bash
docker pull kiranmawelkar/my-first-docker-app:latest
docker run -p 3000:3000 kiranmawelkar/my-first-docker-app:latest
