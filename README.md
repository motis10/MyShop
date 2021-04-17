# My Shop

### Final project shopping cart app for web application course.

### Table of contents:

-   [General Info](#General-Info)
-   [Quick Start](#Quick-Start)
-   [Technologies](#technologies)

<br>

---

## General Info

### Final project shopping cart app for web application course. Online Shop with few models for Web application course This repo is split into few folders:

-   Scraper
-   Backend (nodejs)
-   Frontend (react)

<br>

---

## Quick Start

### Install server dependencies

-   Make sure run it from the root project: ` C:\Users\fybish\Desktop\MyShop\`

```bash
npm install
```

### Install client dependencies

-   ` C:\Users\fybish\Desktop\MyShop\frontend`

```bash
cd frontend
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

<br>

---

## Technologies:

#### <b>Backend: Node Express </b>

The server is starting http server (5000) and websocket server (7000)
We have few models:

-   User
-   Product
-   Orders

*   All models are using mongodb scheme
*   For each model we create a route and controller, in addition we are using middleware to watch and grant permission to our api.

#### <b>Frontend: React Redux </b>

Search bar using 3 filters:
![search bar](https://user-images.githubusercontent.com/2521330/115066105-b8d4da00-9ef7-11eb-90db-c07127ba05d4.png)

List of all products:
![list products](https://user-images.githubusercontent.com/2521330/115066100-b7a3ad00-9ef7-11eb-9a9f-854718e7faa0.png)

Websocket server and client communicate, counter is change in client for every user that enter to the website
![websocket online users](https://user-images.githubusercontent.com/2521330/115066098-b7a3ad00-9ef7-11eb-8b65-a91459beeebd.png)

Groupby query through mongodb + Search bar for names and 2 filters
![groupby with user table search with filters](https://user-images.githubusercontent.com/2521330/115066091-b6728000-9ef7-11eb-90e4-b1f8a2c24130.png)

D3.js graph showing orders price by day
![orders with d3 graph](https://user-images.githubusercontent.com/2521330/115066092-b70b1680-9ef7-11eb-9f3e-6bffb33851ab.png)

---

<br>

## Made By:

# Moti Stein, Ron Fybish, Zahi Zur
