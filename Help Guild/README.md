# Água Jump Studios — Homelab System 

AJShomelab is composed of two main applications:

>**AguaJumpStudiosHomelab.exe** → **User Interface (UI)**
>
>**SimpleDatabase.exe** → **Authentication API**

Additional apps may be added to this system over time.

---

## Overview

* The **User Interface** is the main app you interact with
* The **Authentication API** runs in the background
* The UI communicates with the API to handle login and user-related actions

---

## Requirements

* Windows system with `.exe` support
* Internet connection
* Both applications available locally

---

## How It Works

1. The **Authentication API** starts and waits for requests
2. The **User Interface** connects to the API
3. The UI sends authentication requests
4. The API validates and returns responses
5. The UI updates based on the result

---

## Setup Guide

### 1. Start the Authentication API

Run:

```bash id="a1"
SimpleDatabase.exe
```

* This must be running before opening the UI
* It will wait for incoming requests

---

### 2. Start the User Interface

Run:

```bash id="a2"
AguaJumpStudiosHomelab.exe
```

* The UI will attempt to connect automatically to the API

---

### 3. Connect UI to API

Connection is automatic if both apps are running.

**Expected behavior:**

* UI loads normally
* No connection errors appear
* Authentication features become available

If the connection fails:

* Ensure **SimpleDatabase.exe** is running
* Restart both applications

---

## Authentication Flow

1. Open the **User Interface**
2. Enter login or account details
3. Submit the request
4. The UI sends the data to the API
5. The API validates the request
6. The UI receives the response and updates accordingly

---

## Usage

* Use the **User Interface** for all interactions
* The API runs in the background and does not require direct interaction

---

## Troubleshooting

### UI cannot connect to API

* Confirm **SimpleDatabase.exe** is running
* Restart both applications
* Check firewall permissions

---

### Authentication issues

* Verify input data
* Restart the API to reset state

---

## Notes

* Always start the **Authentication API first**
* Only one API instance should run at a time
* Future apps will integrate into this same system

---

## License

*(add license here)*
