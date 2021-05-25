           ------------------------------------
          --------------------------------------
         ----------------------------------------
        -- -- -- --- THE SOLAR SYSTEM --- -- -- --
         ----------------------------------------
         ----------------------------------------
     
     
A full-stack application made with GraphQL !

Τhis is a web site is about the solar system and presents some basic information about it.

By the tehnichal side there are three parts. The Mysql database, the Express server and the client-side.

In to the database are the information for the 8 planets.
Then the apollo-server, through sequalize queries the data and GraphQL resolves them to the client.

In the client side I am not using any framework but working from scratch to fetch the data, 
resolve them through the DOM in the browser and using CSS to create a beautiful layout!

This way the back-end (Express server) becomes an API that the front staτic files 
independently fetches the data from.
