![TheUnnix](https://img.shields.io/badge/theunnix-%2312100E.svg?&style=for-the-badge&logo=shpetim&logoColor=white)
![SHPETIMALIU](https://img.shields.io/badge/SHPETIM-ALIU-%2312100E.svg?&style=for-the-badge&logo=shpetim&logoColor=white)

# Crud App Employee

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

This project is an AngularJS application for employee management. The application allows for the creation, reading, updating, and deletion of employee data.

## About the Code

### `add-edit.component.ts`

This is the "AddEditComponent" component class, responsible for handling the employee addition and update form. It utilizes Angular Forms for form control and is connected to services for communication with the server to perform CRUD operations.

### `app.component.ts`

This is the main "AppComponent" component class that includes the employee list table and uses Material Angular for styling. It is also connected to services for retrieving and manipulating employee data. The component provides additional functionalities such as searching, deleting, and editing employee data.

### `core.service.ts`

This code snippet contains the "CoreService," responsible for displaying quick notifications (snackbars) for successful actions or errors in the application. Users receive notifications as needed.

## Key Application Functions

- **Adding Employees**: The application allows users to add employee information by filling out a form.

- **Modifying Employees**: Users can modify employee data by changing the information in the update form.

- **Deleting Employees**: The application offers the ability to remove employees from the employee list.

- **Searching Employees**: Users can search for employees by their first name or last name, and the list of employees will be filtered to display only the search results.

## File Structure

The project is structured into the following directories:

- `src/app` contains the AngularJS application code.

  - `src/app/add-edit` contains the component for adding and editing employees.
  - `src/app/core` contains the snackbar notification service.
  - `src/app/services` contains services for communication with the server for employees.
  - `src/app/app.component.html` contains the main application template.
  - `src/app/app.component.ts` contains the main application code.
  - `src/app/app.module.ts` contains the main application module.

## Using JSON Server (Simulating the API Server)

This project uses [JSON Server](https://github.com/typicode/json-server) to simulate an API server for storing and manipulating employee data.

To configure and use JSON Server in the project, follow these steps:

1. **Install JSON Server**: If you don't have JSON Server installed on your system, you can install it by running this command:

   ```bash
   npm install -g json-server
   ```

2. **Create the `db.json` file**: Create a file named `db.json` in your project's directory and populate it with initial data for employees. The following example presents a simple structure of the `db.json` file:

   ```json
   {
     "employees": [
       {
         "name": "Unnix",
         "lastName": "DEV",
         "email": "unnix@dev.com",
         "dob": "2001-10-19T22:00:00.000Z",
         "gender": "men",
         "education": "Science Engineering",
         "university": "Massachusetts Institute of Technology",
         "experience": 4,
         "company": "TheUnnx",
         "id": 3
       },
       {
         "name": "Shpetim",
         "lastName": "Al",
         "email": "Shpetim@al.com",
         "dob": "2001-01-17T23:00:00.000Z",
         "gender": "men",
         "education": "IT Engineering",
         "university": "Cambridge University",
         "experience": 6,
         "company": "TheUnnix DevLabs",
         "id": 4
       }
     ]
   }
   ```

3. **Start JSON Server**: Execute this command in your project's terminal to start JSON Server on port 3000 (or another port if desired):

   ```bash
   npx json-server --watch db.json
   ```

   JSON Server will create a local server and begin handling API requests based on the data in the `db.json` file.

# Crud App Emplyoee

Ky projekt është një aplikacion AngularJS për menaxhimin e punëtorëve. Aplikacioni lejon krijimin, leximin, përditësimin dhe fshirjen e të dhënave të punëtorëve.

## Rreth kodit

### `add-edit.component.ts`

Kjo është klasa e komponentit "AddEditComponent", e cila është përgjegjëse për menaxhimin e formës së shtimit dhe përditësimit të punëtorëve. Përdor Angular Forms për kontrollin e formës dhe është e lidhur me shërbimet për komunikim me serverin për të kryer operacionet CRUD.

### `app.component.ts`

Kjo është klasa e komponentit kryesor "AppComponent", e cila përfshin tabelën e listës së punëtorëve dhe përdor Material Angular për stilizim. Ajo gjithashtu është e lidhur me shërbimet për të marrë dhe manipuluar të dhënat e punëtorëve. Komponenti ofron funksionalitete të tjera si kërkim, fshirje dhe ndryshim të të dhënave të punëtorëve.

### `core.service.ts`

Ky fragment i kodit përmban shërbimin "CoreService", i cili është përgjegjës për tregimin e njoftimeve të shpejta (snackbar) për veprime të suksesshme ose gabime në aplikacion. Përdoruesit marrin njoftime të shfaqura sipas nevojës.

## Funksionet Kryesore të Aplikacionit

- **Shtimi i Punëtorëve**: Aplikacioni lejon përdoruesit të shtojnë informacionin e një punëtori duke plotësuar një formë.

- **Modifikimi i Punëtorëve**: Përdoruesit mund të modifikojnë të dhënat e punëtorëve duke ndryshuar informacionin në formën e përditësimit.

- **Fshirja e Punëtorëve**: Aplikacioni ofron mundësinë për fshirjen e punëtorëve nga lista e punëtorëve.

- **Kërkimi i Punëtorëve**: Përdoruesit mund të kërkojnë punëtorë sipas emrit ose mbiemrit të tyre, dhe lista e punëtorëve do të filtritet për treguar vetëm rezultatet e kërkimit.

## Struktura e Dosjeve

Projekti është i strukturuar në dosjet e mëposhtme:

- `src/app` përmban kodin e aplikacionit AngularJS.

  - `src/app/add-edit` përmban komponentin për shtimin dhe modifikimin e punëtorëve.
  - `src/app/core` përmban shërbimin e ndarjes së një mesazhi të shpejtë (snackbar).
  - `src/app/services` përmban shërbimet për komunikimin me serverin për punëtorët.
  - `src/app/app.component.html` përmban shabllonin kryesor të aplikacionit.
  - `src/app/app.component.ts` përmban kodin kryesor të aplikacionit.
  - `src/app/app.module.ts` përmban modulin kryesor të aplikacionit.

## Përdorimi i JSON Server (Simulimi i Serverit të API)

Ky projekt përdor [JSON Server](https://github.com/typicode/json-server) për të simuluar një server të API-ve për të ruajtur dhe manipuluar të dhënat e punëtorëve.

Për të konfiguruar dhe përdorur JSON Server në projekt, ndiq kto hapa:

1. **Instaloni JSON Server**: Nëse nuk keni JSON Server të instaluar në sistemin tuaj, mund ta instaloni duke shkruar këtë komandë:

   ```bash
   npm install -g json-server
   ```

2. **Krijoni skedarin `db.json`**: Krijoni një skedar me emrin `db.json` në rrugën e projektit tuaj dhe vendosni të dhënat fillestare për punëtorët në këtë skedar. Shembulli i mëposhtëm paraqet një strukturë të thjeshtë të skedarit `db.json`:

   ```json
   {
     "employees": [
       {
         "name": "Unnix",
         "lastName": "DEV",
         "email": "unnix@dev.com",
         "dob": "2001-10-19T22:00:00.000Z",
         "gender": "men",
         "education": "Science Engineering",
         "university": "Massachusetts Institute of Technology",
         "experience": 4,
         "company": "TheUnnx",
         "id": 3
       },
       {
         "name": "Shpetim",
         "lastName": "Aliu",
         "email": "Shpetim@aliu.com",
         "dob": "2001-01-17T23:00:00.000Z",
         "gender": "men",
         "education": "IT Engineering",
         "university": "Cambridge University",
         "experience": 6,
         "company": "TheUnnix DevLabs",
         "id": 4
       }
     ]
   }
   ```

3. **Startoni JSON Server**: Ekzekutoni këtë komandë në terminalin tuaj në rrugën e projektit për të filluar JSON Server në portin 3000 (ose një port tjetër nëse e dëshironi):

   ```bash
   npx json-server --watch db.json
   ```

   JSON Server do të krijojë një server lokal dhe do të fillojë të ndihmojë kërkesat e API-ve në bazë të të dhënave në skedarin `db.json`.
