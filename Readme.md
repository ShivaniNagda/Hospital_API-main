Doctors- Routes
<!-- *********************Doctors- Routes - REGISTER ***************************** -->
### Post : http://localhost:7777/api/doctors/register

Eg:- email  :   A.k.singh@gmail.com
     password :  123
     username :  A.k.singh

     output-
     {
    "success": true,
    "message": {
        "_id": "67615da6b7fc6c2f00540a26",
        "email": "A.k.singh@gmail.com",
        "password": "$2a$10$plnIpiCrxHfyBaX09tqn/.1WAFvC8Et0vWn9LhG4C8c/UePJ6G7d6",
        "username": "A.k.singh",
        "createdAt": "2024-12-17T11:16:54.701Z",
        "updatedAt": "2024-12-17T11:16:54.701Z",
        "__v": 0
    }
}
<!-- *********************Doctors- Routes - Login ***************************** -->
### Get : http://localhost:7777/api/doctors/login
email : A.k.singh@gmail.com
password : 123

return:
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjE1ZGE2YjdmYzZjMmYwMDU0MGEyNiIsImlhdCI6MTczNDQ0NzY1NCwiZXhwIjoxNzM0NDU0ODU0fQ.PSwZrFfwMYre-_uanFOqi7o9hvR_e7AT5B5UdtGTNPE",
    "msg": "Log In Sucessful! Keep the Token safely  A.k.singh!"
}

<!-- *******************Patient Register : Add JWT Bearer Token *********  -->
### POST : http://localhost:7777/api/patients/register
name : patient
phone : 7689978900

O/p:RETURN
{
    "success": true,
    "body": {
        "_id": "67619298ec60c33b7885649e",
        "name": "patient",
        "phone": 7689978900,
        "doctor": "67615da6b7fc6c2f00540a26",
        "doctorname": "A.k.singh",
        "createdAt": "2024-12-17T15:02:48.298Z",
        "updatedAt": "2024-12-17T15:02:48.298Z",
        "__v": 0
    },
    "msg": "Patient Registered Sucessfully!"
}

<!-- *********** CREATE REPORT *************************** -->

### POST : http://localhost:7777/api/patients/67619298ec60c33b7885649e/create_report

status : Negative

o/p return -
 {
    "success": true
}

<!-- ************************* Get All Reports *************************** -->
### Get : http://localhost:7777/api/patients/67619298ec60c33b7885649e/all_reports

return : 
[
    {
        "_id": "67619439ec60c33b788564a3",
        "doctor": "67615da6b7fc6c2f00540a26",
        "patient": "67619298ec60c33b7885649e",
        "status": "Negative",
        "date": "2024-12-17T15:09:45.805Z",
        "createdAt": "2024-12-17T15:09:45.808Z",
        "updatedAt": "2024-12-17T15:09:45.808Z",
        "__v": 0
    }
]
<!-- ****************************GET STATUS ********************************************* -->
### Get : http://localhost:7777/api/reports/Negative

return:
[
    {
        "_id": "67619439ec60c33b788564a3",
        "doctor": "67615da6b7fc6c2f00540a26",
        "patient": "67619298ec60c33b7885649e",
        "status": "Negative",
        "date": "2024-12-17T15:09:45.805Z",
        "createdAt": "2024-12-17T15:09:45.808Z",
        "updatedAt": "2024-12-17T15:09:45.808Z",
        "__v": 0
    }
]

<!-- ************************************************************************* -->
<!-- ****************************ABOUT TASK *********************************** -->
### TASK: SKILL TEST - 3 
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date
- Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

<!-- =============================================================================== -->
