CREATE TABLE USERS(
    ID VARCHAR PRIMARY KEY UNIQUE NOT NULL,
    LOGIN VARCHAR NOT NULL,
    PASSWORD VARCHAR NOT NULL,
    ROLE VARCHAR NOT NULL
);