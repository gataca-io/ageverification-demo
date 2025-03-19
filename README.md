# Gataca - Legal Age Demo

This project is an example of how you could integrate a simple application with Gataca Vouch.

It consists on a simple react application of a mock video web server that wants to perform age validation, that is served dockerized under an nginx.

The use case demonstrated is that using a single vouch app integration is:

-   First, we will use a nginx-based OIDC client integration to access the website, which is restricted to people over 16 years old. The client we will use is [LUA Resty OpenIDC](https://github.com/zmartzone/lua-resty-openidc)
-   Then, we will use a react-based OIDC client integration to view some of the videos which are restricted to users over 18 years old. The client we will use is [React OIDC Context](https://github.com/authts/react-oidc-context)

## Prerequisites

You will need a vouch client from [Gataca Studio](https://studio.gataca.io) that has configured the following scopes:

```
over16
over18
```

You also will need to configure the following 3 redirect_uris for your integration (prepended by your domain):

```
/adult
/code
/video
```

### Environment variables

You will need to set the following environment variables:

```bash
CLIENT_ID=*******
CLIENT_SECRET=********
IDP_HOST=https://vouch.gataca.io
SERVER_NAME=localhost ##Change to yours
PRIMARY_AGE_SCOPE=**** ##Change
SECONDARY_AGE_SCOPES=**** ##Change
```

## Available Scripts

In the project directory, you can run:

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

As this is not dockerized, only the react-oidc-client will work.

```
docker build -t legal-age-demo .
```

Builds the docker container locally to be able to run it

```
docker run --env-file docker.env --name legalage -p 80:80 legal-age-demo
```

Run the built docker container, providing an environment file with the requested variables.Open [http://localhost](http://localhost) -or the domain selected- to view and test the complete app in the browser.
