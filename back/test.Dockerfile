FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY build/libs/*.jar app.jar
ENV ODSAY_KEY=gU/0UOBChjTBxg+fxexxWL43Rg/cFvbeAkx8E66cQ6c
ENV JWT_SECRET_KEY=33bd0bb457635f55d494b99dc4f81b7d9e274cee61a6e123f670218e30304000f093007041d08f071b608d36d7eaa6c2fdb91ef7a53f82e9e05a000cdb597b8d
ENTRYPOINT ["java","-jar","/app.jar"]
