# --- Created by Slick DDL
# To stop Slick DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table "USERS" ("NAME" VARCHAR(254) NOT NULL,"ID" SERIAL NOT NULL PRIMARY KEY);
create table "event" ("name" VARCHAR(254) NOT NULL PRIMARY KEY,"event_date" DATE NOT NULL,"clientMax" INTEGER NOT NULL,"maleTicket" INTEGER NOT NULL,"femaleTicket" INTEGER NOT NULL,"description" VARCHAR(254) NOT NULL,"style" VARCHAR(254) NOT NULL);
create table "night_club" ("email" VARCHAR(254) NOT NULL PRIMARY KEY,"cnpj" VARCHAR(254) NOT NULL,"password" VARCHAR(254) NOT NULL,"clubName" VARCHAR(254) NOT NULL,"telephone" VARCHAR(254) NOT NULL,"cep" VARCHAR(254) NOT NULL,"city" VARCHAR(254) NOT NULL,"state" VARCHAR(254) NOT NULL,"address" VARCHAR(254) NOT NULL);

# --- !Downs

drop table "night_club";
drop table "event";
drop table "USERS";

