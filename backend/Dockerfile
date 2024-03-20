FROM openjdk:17
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","-Dmysql.host=\"$MYSQL_HOST\"","-Dmysql.username=\"$MYSQL_USERNAME\"","-Dmysql.password=\"$MYSQL_PASSWORD\"","/app.jar"]