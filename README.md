# DPDK

## First view
<img width="545" alt="Screenshot 2023-04-05 at 22 03 10" src="https://user-images.githubusercontent.com/83282533/230195735-badbe36f-cac5-4220-8fc2-4c0128379f4b.png">

##  Project

This is a Front-end website written with [NextJs](https://nextjs.org/) framework, and [Prismic.io](https://prismic.io/) as headless CMS.

WebSite [inspiration](https://nuxt-starter-prismic-blog.vercel.app/).

## Getting Started

#### Be sure you have installed
- [NodeJs](https://nodejs.org/en/) (14.6.0 or newer)
- [Npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/)

#### Start project
```
$ git clone https://github.com/SantGT5/dpdk.git

$ cd dpdk

$ npm install

$ npm run dev
```
After run project, the following success message appears in the terminal:

<img width="521" alt="Screenshot 2023-04-05 at 22 44 55" src="https://user-images.githubusercontent.com/83282533/230207336-d472aee2-f854-4efa-81dc-50075d31ace5.png">

## Start the slice machine

> **_IMPORTANT:_**  
> Be sure the following port is available:   
> -- 9999   

Start the development server:

```
$ npm run dev
```

To use the slice machine, open a new terminal window and run:

```
$ npm run slicemachine
```
This will start the slice machine on `localhost:9999`.

## Available Scripts

- **`$ npm run dev`** start dev mode

- **`$ npm run build`** build production for production

-  **`$ npm run start`** run build mode (**npm run build** is needed)

- **`$ npm run slicemachine`** local Custom Type and Slice builder

-  **`$ npm run lint`** identifying and reporting problems with your code

-  **`$ npm run prettier:fix`** code formatter

-  **`$ npm run prettier:check`** Find code formatter error
