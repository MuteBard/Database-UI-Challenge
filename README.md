# Database UI Project

### Objective
This will be a very simple web application which handles appointments.
The appointments will be stored in a SQL database with at least 1 table.

**Server side Languages and Frameworks/Libraries Used**<br/>
Java<br/>
Spring<br/>

**Client side Languages and Frameworks/Libraries Used**<br/>
HTML<br/>
CSS<br/>
jQuery<br/>

**Databases Used**<br/>
PostgreSQL<br/>

**IDEs Used**<br/>
Spring Tool Suite<br/>
Visual Studio Code<br/>
Postico<br/>

### Rebuilding the backend in STS

**Cloning**<br/> 
git clone the project</br>
In Backend/appointments, import this Spring boot application with the pom file listing all of the dependencies in STS or IntelliJ
https://github.com/MuteBard/challenge1/tree/master/Backend/appointments</br>

![picture alt](https://media.discordapp.net/attachments/429357870111391745/451052358332579840/Screen_Shot_2018-05-29_at_12.00.08_PM.png?width=1824&height=1140)
![picture alt](https://media.discordapp.net/attachments/429357870111391745/451052327693189122/Screen_Shot_2018-05-29_at_12.00.17_PM.png?width=1824&height=1140)
![picture alt](https://media.discordapp.net/attachments/429357870111391745/451052302233501736/Screen_Shot_2018-05-29_at_12.00.37_PM.png?width=1824&height=1140)


**Setting up application.properties**<br/>
In application.properties be sure that if you set up a postgreSQL database with the appropriate table name</br>
```
spring.datasource.url = jdbc:postgresql://localhost:5432/Appointments
```
![picture alt](https://cdn.discordapp.com/attachments/429357870111391745/451053206144024576/Screen_Shot_2018-05-29_at_12.04.10_PM.png)

**Setting up Appointments database in PostgreSQL**<br/>
Create a database in postgres called Appointments. Then create a table with the following schema:</br>
```
CREATE TABLE appointment(
	id serial primary key,
	bookdate text,
	booktime text,
	description text
);
```
![picture alt](https://cdn.discordapp.com/attachments/429357870111391745/451053572956880909/Screen_Shot_2018-05-29_at_12.05.45_PM.png)

**Executing**<br/>
Be sure to do a Maven Update</br>
![picture alt](https://cdn.discordapp.com/attachments/429357870111391745/451051789098156052/Screen_Shot_2018-05-29_at_11.56.41_AM.png)
Be sure to do a Clean package</br>
![picture alt](https://cdn.discordapp.com/attachments/429357870111391745/451051729241243658/Screen_Shot_2018-05-29_at_11.57.06_AM.png)
![picture alt](https://cdn.discordapp.com/attachments/429357870111391745/451051703370907648/Screen_Shot_2018-05-29_at_11.57.19_AM.png)
Run as a Spring Boot App</br>
![picture alt](https://cdn.discordapp.com/attachments/429357870111391745/451051758270283776/Screen_Shot_2018-05-29_at_11.56.50_AM.png)


### Visualizing Data in Frontend 
**Opening your file**<br/>
From the parent root folder, go to Frontend directory and open index.html with google chrome 





