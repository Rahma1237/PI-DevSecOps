<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=wave&color=gradient&height=160&section=header&text=P6-Full-Stack-reseau-dev&fontSize=40&fontAlignY=35" />
</p>

<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=2500&pause=700&color=0A66C2&center=true&vCenter=true&width=600&lines=P6-Full-Stack-reseau-dev;Full-Stack+Development;Networking+Project" />
</h1>







![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![H2 Database](https://img.shields.io/badge/H2-007396?style=for-the-badge&logo=h2database&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Lombok](https://img.shields.io/badge/Lombok-ED1C24?style=for-the-badge&logo=lombok&logoColor=white)














🚀 P6-Full-Stack-reseau-dev
===========================

Ce projet est une **application web complète (Full Stack)** destinée à un **réseau de développeurs**.  
Il repose sur une architecture moderne séparant le **front-end** et le **back-end**, afin d’assurer une bonne maintenabilité, évolutivité et sécurité.

*   **Front-end** : Angular
*   **Back-end** : Spring Boot
    

* * *

🧱 Architecture du projet
-------------------------
```
PI-DevSecOps/
├── back/                                               
├── front/                       
├── k8s/                         
├── Ressource/                          
|   └── sql/ 
├── Jenkinsfile                   
├── README.md                     
└── tiny-report.txt   
```    

* * *

🎨 Front-end
------------

La partie front-end a été développée avec **Angular CLI version 14.1.3**.  
Elle permet l’affichage de l’interface utilisateur et la communication avec l’API back-end.

### 📌 Prérequis

*   Node.js installé sur la machine
*   npm
    

### 📥 Installation des dépendances

    npm install
    

### ▶️ Lancer le serveur de développement

    ng serve
    

📍 Accès à l’application :  
[http://localhost:4200/](http://localhost:4200/)

L’application se recharge automatiquement lors de toute modification des fichiers source.

* * *

### 🏗️ Compilation

    ng build
    

Les fichiers générés seront stockés dans le dossier `dist/` et pourront être utilisés pour le déploiement.

* * *

⚙️ Back-end (API)
-----------------

Le back-end est une **API REST** développée avec :

*   **Spring Boot 2.7.3**
*   **Java 11**
*   **Maven**
    

Il gère la logique métier, la sécurité, l’authentification et l’accès aux données.

* * *

### 📌 Prérequis

*   Java JDK 11
*   Maven
*   MySQL (optionnel – H2 utilisé pour les tests)
* * *

### ▶️ Démarrer l’application

    mvn spring-boot:run
    

📍 L’API sera disponible sur :  
[http://localhost:8080/](http://localhost:8080/)

* * *

🔐 Sécurité & Authentification
------------------------------

Le projet utilise :

*   **Spring Security**
*   **JWT (JSON Web Token – Auth0)**
    
Ces technologies assurent une authentification sécurisée et un contrôle des accès aux ressources de l’API.

* * *

📦 Dépendances principales
--------------------------

*   Spring Boot Starter Web
*   Spring Boot Starter Security
*   Spring Boot Starter Data JPA
*   Java JWT (Auth0)
*   Lombok
*   Java Validation API
*   MySQL Connector Java
*   H2 Database (tests)
*   Springfox Swagger (documentation API)
    
* * *

📚 Documentation de l’API
-------------------------

Une fois le back-end démarré, la documentation Swagger est accessible à l’adresse suivante :

    http://localhost:8080/v2/api-docs
    

Elle permet de visualiser et tester les différents endpoints de l’API.

* * *

🧾 Génération de la Javadoc
---------------------------

Pour générer la documentation Java du projet :

    mvn javadoc:javadoc
    

📁 La Javadoc sera générée dans le répertoire :

    target/site/apidocs
    

* * *

⚙️ Configuration
----------------

Il est recommandé d’utiliser des **variables d’environnement** pour sécuriser les informations sensibles :

    spring.datasource.url=jdbc:mysql://localhost:3306/mdd?allowPublicKeyRetrieval=true
    spring.datasource.username=${DATABASE_USERNAME}
    spring.datasource.password=${DATABASE_PASSWORD}
    
    spring.jpa.hibernate.ddl-auto=create-drop
    
    jwt.secret=${JWT_SECRET}
    

* * *

🧪 Base de données
------------------

*   **MySQL** : environnement de production
    
*   **H2** : environnement de test et développement
    

* * *


## 👥 Contributeurs

| Nom           | Rôle                   | GitHub                                        |
|---------------|-----------------------|-----------------------------------------------|
| Soufyan BASSEAID | Auteur   | [GitHub](https://github.com/Soufyan909)  |
| Thomas MICHEL | Contributor   | [GitHub](https://github.com/Micheeeeel)  |
| OU-ICHEN RAHMA    | Contributor           | [GitHub](https://github.com/Rahma1237)     |
| Romain Sessa    | Contributor           | [GitHub](https://github.com/romainsessa)     |
| dpnick    | Contributor           | [GitHub](https://github.com/dpnick)     |
| PeterGuek    | Contributor           | [GitHub](https://github.com/PeterGuek)     |
| Ayoub Aguezar    | Contributor           | [GitHub](https://github.com/Ayoub-glitsh)     |




* * *

🛠️ Technologies utilisées
--------------------------

*   Angular
*   Spring Boot
*   Spring Security
*   JWT
*   Swagger
*   Maven
*   MySQL / H2    

* * *

📄 Licence
----------

Ce projet est destiné à un **usage éducatif et académique**.

* * *

