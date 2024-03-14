### Local Development Setup
1. Install Git
2. Install Docker Desktop
3. Open a terminal.
4. Clone the git repository.
5. CD into the repo directory.
6. Run `docker compose watch`
7. Navigate to `localhost:3000` in the browser.

### Local Development Information
- The frontend and backend containers are both configured to hot reload within their respective docker containers. This means that you can develop on the fly without having to rebuild the project each time a code change is made.
- The ReactJS frontend is exposed at `localhost:3000`
- The ExpressJS backend is exposed at `localhost:5000`
- You do not need to specify the port when making requests from ReactJS to the ExpressJS server. This is because of the `proxy` property in the client's `package.json`.
  - An example URL to make a request to the ExpressJS server could look like this: `./register`

### Production Setup
1. Install Docker
2. Install Git
3. Clone the repository.
4. CD into the repo directory.
5. Run `docker-compose -f docker-compose.yml -f production.yml up -d`

### Production Information
- To stop the running containers, run the following command: `docker-compose -f docker-compose.yml -f production.yml down`