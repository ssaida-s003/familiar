FROM openjdk:17
ARG JAR_FILE=build/libs/*.jar
ENV MYSQL_HOST=${MYSQL_HOST:-localhost:3306}
ENV MYSQL_USERNAME=${MYSQL_USERNAME:-root}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD:-root}
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","-Dmysql.host=${MYSQL_HOST}","-Dmysql.username=${MYSQL_USERNAME}","-Dmysql.password=${MYSQL_PASSWORD}","/app.jar"]