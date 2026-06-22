# Local Docker Setup

## Quick Start
1. Ensure Docker Desktop is running.
2. Run `docker compose up --build`.
3. Open `http://localhost:3000`.

## Architecture
- Development mode uses volumes so code changes sync instantly.
- Production build is separated via multi-stage Dockerfile.
- Port 3000 is exposed to the host machine.
