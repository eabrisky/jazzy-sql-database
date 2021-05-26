CREATE TABLE "artist" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(80) not null,
    "birthdate" date
);

CREATE TABLE "song" (
    "id" SERIAL PRIMARY KEY,
    "title" varchar(255) not null,
    "length" varchar(10),
    "released" date
);

INSERT INTO "artist" ("id", "name", "birthdate")
VALUES ('1', 'Ella Fitzgerald', '04-25-1917');

INSERT INTO "artist" ("id", "name", "birthdate")
VALUES ('2', 'Dave Brubeck', '12-06-1920');

INSERT INTO "artist" ("id", "name", "birthdate")
VALUES ('3', 'Miles Davis', '05-26-1926');

INSERT INTO "artist" ("id", "name", "birthdate")
VALUES ('4', 'Esperanza Spalding', '10-18-1984');



INSERT INTO "song" ("id", "title", "length", "released")
VALUES ('5', 'Take Five', '5:24', '1959-09-29');

INSERT INTO "song" ("id", "title", "length", "released")
VALUES ('6', 'So What', '9:22', '1959-08-17');

INSERT INTO "song" ("id", "title", "length", "released")
VALUES ('7', 'Black Gold', '5:17', '2012-02-01');
