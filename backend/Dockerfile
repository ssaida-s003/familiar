FROM openjdk:17
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","--MYSQL_HOST=${MYSQL_HOST}","--db.username=${MYSQL_USERNAME}","--db.password=${MYSQL_PASSWORD}","/app.jar"]