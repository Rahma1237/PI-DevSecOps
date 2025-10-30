# ==== ÉTAPE 1 : BUILD ====
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

# Copier le code source
COPY pom.xml .
COPY src ./src

# Compiler le projet
RUN mvn clean package -DskipTests

# ==== ÉTAPE 2 : RUNTIME ====
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copier le JAR compilé depuis l’étape précédente
COPY --from=build /app/target/*.jar app.jar

# Exposer le port de ton API (change-le si besoin)
EXPOSE 8080

# Lancer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
