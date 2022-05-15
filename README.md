# Node Application to test CI CD for MASS

This a simple node application, which uses git, docker and github actions to deploy a docker image file on ECR and using the image we deploy the application on
EC2 Instance.

## Steps to create the whole Process

# 1. Create a folder in your local machine with the project name of your choice

In my case I have created a folder called node CICD this is where all my code will be crated (You can call it my working directory)

# 2. Initialize the folder with git using the below command using cmd or mac terminal

```powershell
     D:\nodeCICD> git init
```

I am using a windows machine thus D:\nodeCICD is my working directory (This creates a local git framework in your directory )

# 3. Node now initialize the folder with node use the below command

    ```powershell
        D:\nodeCICD> node init

    ````

This creates a package.json fle in your working directory with all node project related dependencies and project attributes.
Next, create a index.js file in the folder which will be the starting point of your node project.

We are using express for our web related work, therefore if you want you can use Express or else use simple http package to achieve the same. Use the below command to install Express. This express dependency will also be included in your dependencies list in the package.json file.

```powershell
     D:\nodeCICD> npm install express
```

You can use the below code in your index.js file:-

```

   const express = require('express')
   const app = express()
   const port = 8080

   app.get('/', (req, res) => {
       res.send('Hello World!')
   })

   app.get('/getData', (req, res) => {
       res.send('Getting Data Routes !!!')
   })

   app.get('/getStore', (req, res) => {
        res.send('Getting Store Routes !!!')
   })

   app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
   })

```

# 4. Create a file named .gtignore will node_modules/ this will ensure that node_modules does not track the changes in the node_modules folder.

# 5. To run the project use the below command

```powershell

    node index.js

```

This will run the project on localhost:8080, you can check it by going into your browser and typing localhost:8080 as well.

# 5. Now to add everything in your git hub repository use the following commands

    ``` powershell
            git add -A
            git commit -sm "Initialize Node Project"
            git checkout -b main
            git remote add origin {Your github repo url}
            git push origin main
    ```
