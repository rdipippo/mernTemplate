FROM postgres:14-bullseye
ENV POSTGRES_USER postgres
ENV POSTGRES_DB test
ENV POSTGRES_PASSWORD postgres
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432

