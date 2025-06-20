# AI Snippet Service

This project is a full-stack application to generate text summaries using the OpenAI API. It includes:

- A frontend built with Remix
- A backend using Express + MongoDB
- Integration with the OpenAI API for summarization

## How to Run the Project with Docker

### Prerequisites

- Docker
- Docker Compose

### 1. Clone the Repository

```bash
git clone https://github.com/vhugorod/ai-snippet-service.git
cd ai-snippet-service
```

### 2. Run the Containers

```bash
docker-compose up --build
```

This will:
- Build the frontend and backend images
- Start the three services: MongoDB, backend (port `3001`), and frontend (port `3030`)

## Services

### MongoDB

- **Image:** `mongo`
- **Port:** `27017`
- **Volume:** non-persistent (adapt if you want persistence)
- **Connection URI (internal):** `mongodb://mongo:27017/snippets`

### Backend (Express)

- **Build context:** `./backend`
- **Port:** `3001`
- **Depends on:** `mongo`
- **Environment Variables:**
  - `MONGO_URI`: MongoDB connection string
  - `OPENAI_API_KEY`: Your OpenAI API key (insert yours)

**Routes:**

| Method | Route              | Description                         |
|--------|--------------------|-------------------------------------|
| POST   | `/snippets`        | Generates and saves a text summary  |
| GET    | `/snippets`        | Lists all snippets                  |
| GET    | `/snippets/:id`    | Retrieves a snippet by ID           |

### Frontend (Remix)

- **Build context:** `./frontend`
- **Port:** `3030`
- **Environment Variables:**
  - `PORT=3030`
  - `API_URL=http://backend:3001`

## Access

- **Frontend:** http://localhost:3030
- **Backend (API):** http://localhost:3001/snippets
- **MongoDB:** mongodb://localhost:27017

## Tests

- The backend includes tests with `jest` and `supertest`
- To run tests locally:

```bash
cd backend
npm install
npm test
```
