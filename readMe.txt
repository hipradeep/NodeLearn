
::To ignore node_modules form push to server 
git rm -r --cached --ignore-unmatch node_modules

:: to igore folder files, add in .gitignore
/node_modules/*

:: Install dependencies
        > npm i express
        > npm i nodemon
        > npm install -D nodemon
        > npm i ejs 

 Remove :  "type":"module", from package.json for es6

--------------------Modules-----------------

        1. http           -> nodemon .\_httpModules\index.js
        2. fs             -> nodemon .\_fsModules\index.js	
        3. formdata       -> node .\_formdata\app_es6.js
                          -> node .\_formdata\app.js
        4. sql            -> \_sql> node .\connectDB.js OR
                          -> node .\_sql\connectDB.js
                          