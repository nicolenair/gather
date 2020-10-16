# Gather

![alt text](https://github.com/nicolenair/gather/blob/master/Screen Shot 2020-10-17 at 04.20.10.png?raw=true)

This website was produced by a team of students from Minerva Schools at KGI. Chris Hagan designed the site, Qiusu Wang was our project manager, Alexander Wu coded up the frontend, and I, Nicole Nair wrote the backend. It is an all-in-one design feedback platform, which allows freelance designers and clients to collaborate without the inconvenience of switching between various media (email, IM, etc.). Freelancers simply upload their designs, and clients can comment directly on the photo. 


This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

____________________________________________________________________________________________________________________________________________________________________

## Instructions

If you would like to try using our product, follow the instructions below:

In your terminal, run:

```
git clone https://github.com/nicolenair/gather
cd gather
touch .env

```

In your new .env file, input the following information:

```
TURBO_ENV=dev
TURBO_CDN=
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=
MONGODB_URI=
PROD_MONGODB_URI=
GOOGLE_SIGNIN=
ID_AWS=
SEC_AWS=
TURBO_API_KEY=
TURBO_APP_SLUG=
TMP_DIR=/tmp

```
This file requires a TURBO_APP_ID and SESSION_SECRET keys, which you can get for free on https://www.turbo360.co. You will also need an AWS API key & secret (we only use this to upload S3 files), as well as a free MongoDB URI (which you can either get locally or via MongoDB Atlas). We use Google Sign-In for authentication, so do obtain a free client ID. 

If you are new to AWS, please read up on S3 best practices here: https://docs.aws.amazon.com/AmazonS3/latest/dev/security-best-practices.html

Then run npm install from the root directory:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```

