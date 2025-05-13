# Application Tracker

## Overview

_Application Tracker_ is a simple app to track job applications submitted.

_Note:_

## Getting Started

## Future Plans

-   Pagination on the application display
-   More robust search
-   Improved filtering
-   Logging and error handling
-   Improved user experience

## Building from Source

### 1. Cloning the Repository

In a terminal, run the following:

```shell
git clone https://github.com/psilentrain1/jmdm-apps-application_tracker.git
```

Open the resulting folder:

```shell
cd jmdm-apps-application_tracker
```

### 2. Setup Script

[Download](https://www.sqlite.org/download.html) and install SQLite if you don't already have it.

In the root of the project, run `setup.sh`.

The script installs the dependencies and initializes the database.

### 3. Running the Application

Open two terminal windows.

In the first terminal, start the backend server:

```shell
cd backend
npm run dev
```

In the second terminal, start the web server from the root of the project:

```shell
npm run dev
```

Use the local URL to access the application.
The backend will be running on **port 3000** and the frontend on **port 5173**.
