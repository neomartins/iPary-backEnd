# iParty README
You can try a deployed instance of the app here: https://afternoon-wildwood-5782.herokuapp.com/

This application is meant to make it easier to create a Play application with basic Create, Read, Update and Delete functionality and get it up onto Heroku. Database manipulation is handled by Slick connected to PostgreSQL.


### Local development on Ubuntu
#### Database Setup
- Install PostgreSQL 9.3 Postgres.app is the easiest way: [postgresapp.com](http://postgresapp.com/)
- [PostgreSQL full documentation](http://www.postgresql.org/docs/9.3/interactive/)
- Run `psql`


#### Run the application
- In the root folder of the repo:
`activator run`
- In a browser, open localhost:9000. If no folder for conf/evolutions/default exists, do not worry. On first request in browser, slick will automatically inspect the models, and generate a 1.sql file in conf/evolutions/default. This initial file is a complete schema of the application.

#### Development
##### Common database tasks
- If you need to connect to the database to inspect it or run sql:
`\c iParty-seed;`

- To view users created in the user table using psql:
1. Open psql, connect to the database:
`\c iParty-seed;`
2. View user table data:
`SELECT * FROM "nightclub";`

