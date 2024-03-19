FROM openjdk:17
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","-DMYSQL_HOST=${MYSQL_HOST}","-Ddb.username=${MYSQL_USERNAME}","-Ddb.password=${MYSQL_PASSWORD}","/app.jar"]