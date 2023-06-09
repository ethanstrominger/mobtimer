## Windows PC Setup

In VS Code, set your default terminal to Git Bash as follows (needed for "startAll" task to work on PC):

- Press CTRL + SHIFT + P to open the Command Palette.
- Search for “Terminal: Select Default Profile” (previously “Terminal: Select Default Shell”)
- Select “Git Bash”

## Initial Setup

Follow initial setup instructions for frontend, backend, and API

## Start All Components

To start all components (frontend server, backend server, and api build):

In VS Code,

- Press CTRL + SHIFT + P to open the Command Palette
- Search for "Tasks: Run Task"
- Search for "startAll" and select it

## Helper Scripts

All these scripts are contained in the scripts directory and should be executed
from the root directory:

- symlink-ls.sh - displays index.\* in linked directories and in mobtimer-api
- symlink-mobtimer-api-backend.sh - creates symbolic link in mobtimer-backend/node_modules/mobtimer-api. Called by start-frontend.sh (which is called from tasks.json)
- symlink-mobtimer-api-frontend.sh - creates symbolic link in mobtimer-backend/node_modules/mobtimer-api. Called by start-backend.sh (which is called from tasks.json)
- symlink-mobtimer-api-watch.sh - calls symlink-mobtimer-api and waits for changes in source dir to relink. Called from tasks.json
- symlink-mobtimer-api-no-watch.sh - calls scripts to create frontend and backend sym links for frontend and backend. Called from symlink-mobtimer-api-watch.sh (which is called from tasks.json)
- symlink-root-for-jest.sh - creates links required to run backend tests from root.
- compile-api-no-watch.sh - compiles mobtimer-api and calls symlink-mobtimer-api.sh. Called from tart-mobtimer-api.
- start-backend-watch.sh - calls symlink-mobtimer-backend. Compiles backend and starts backend server. Recompiles backend if any changes to backend src files.
- start-frontend-watch.sh - Compiles frontend and starts frontend server. Recompiles backend if any changes to frontend files.
- compile-mobtimer-api-watch.sh - calls compile-api-no-watch and waits for changes.

When you need to refresh node_modules in frontend or backend, run ../scripts/clean-all.sh

- clean-all.sh must be run. Removes the dist and node_module directories, and reruns yarn.

## See also

See additional CONTRIBUTING.md files

- [Frontend]](./mobtimer-frontend/CONTRIBUTING.md)
- [Backend]](./mobtimer-backend/CONTRIBUTING.md)
- [API]](./mobtimer-api/CONTRIBUTING.md)
