# Deployment to IBM Cloud Foundry

## SingUp

```
https://ibm.com/academic
```

## Login

```
https://cloud.ibm.com/login
```

## Download Cloud Foundry CLI

```
https://github.com/cloudfoundry/cli/releases
```

## Unset Cloud Foundry API

```
$ cf api https://api.run.pivotal.io --unset
$ cf api https://api.us-south.cf.cloud.ibm.com --unset
```

## Login to IBM Cloud Foundry

```
$ cf login
API endpoint: https://api.us-south.cf.cloud.ibm.com
Email: pcsiebau@upc.edu.pe
Password: YourStrongPasswordHere
```

## Cloud Foundry Spaces

```
$ cf spaces
$ cf create-space <space-name>
$ cf target -s <space-name>
```

## Generate Prod Build

```
$ npm run build
```

## Deploy App

```
$ cd dist
$ cf push --no-start
$ cf set-env <app-name> MYSQL_UPC_BANKING_NEST_URL mysql://{user}:{password}@{host}:{port}/{database}
$ cf restage <app-name>
$ cf env <app-name>
$ cf start <app-name>
# if your application is not listening on 8080 then the health check will fail.
```

## List Apps

```
cf apps
```

## Scale Out

```
cf scale <app-name> -i 3
```

## Scale Up

```
cf scale <app-name> -m 2G
cf scale <app-name> -k 2G
```

## Delete App

```
cf delete <app-name> -r
```
