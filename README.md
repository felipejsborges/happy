<div align="center">
	<img alt="Happy Logo" src=".github/logo.svg" />
	<img src="/.github/banner.png" alt="banner" />
</div>

<div align="center">
	<h1>happy</h1>
</div>

<div align="center">
	<h3>Description 🚪</h3>
</div>

<p>  
	Happy is a project that was developed during **Next Level Week**. An online event organized by [Rocketseat](https://rocketseat.com.br/) that aims to **up the career of developers** by challenging them to build a **complete application**. We built an API, a website and a mobile application. October 12th was the **children's day** in Brazil. So we created a website and a mobile application where orphanages could register and inform their location, and instruction to visit the children. So, users can access and **check on the map the registered orphanages** and get details of how to go there and play with the kids.
</p>

<br>

<p align="center">  
	<img alt="issues" src="https://img.shields.io/github/issues/felipejsborges/happy">
	<img alt="forks" src="https://img.shields.io/github/forks/felipejsborges/happy">
	<img alt="stars" src="https://img.shields.io/github/stars/felipejsborges/happy">
	<img alt="license" src="https://img.shields.io/github/license/felipejsborges/happy">
	<!-- version, status da build, status dos testes -->
</p>

<br>

<h4 align="center">   
	<a href="#technologies-">Technologies 🚀</a>		|    
  <a href="#api-">API 📡</a>		|    
	<a href="#website-">Website 🖥️</a>		|    
	<a href="#mobile-app-">Mobile app</a>
</h4>

<hr>

<h3>Technologies 🚀</h3>

- [TypeScript](https://www.typescriptlang.org/docs/home.html) language
- [Node.js](https://nodejs.org/en/docs/) for the API
- [ReactJS](https://reactjs.org/docs/getting-started.html) for the website
- [React Native](https://reactnative.dev/docs/getting-started) and [Expo](https://docs.expo.io/) for the mobile application

<hr>

<div align="center">
	<h3>API 📡</h3>
</div>

<h3>Routes</h3>

- [Download here](https://drive.google.com/file/d/1zpwo4oeFFc7hIjl6sJ_3sssnO63IPDjs/view?usp=sharing), and import it in [Insomnia](https://insomnia.rest/)

<h3>Main libs</h3>

- [Express](https://expressjs.com/) as web application framework
- [Sqlite3](https://www.sqlite.org/docs.html) and [TypeORM](https://typeorm.io/) for database
- [Multer](https://www.npmjs.com/package/multer) to upload images
- [Yup](https://www.npmjs.com/package/yup) for validation

<h3>How to run it on your computer</h3>

- Install [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), then:

```
# clone this repo
$ git clone https://github.com/felipejsborges/happy.git

# go to api folder
$ cd api

# install dependencies
$ yarn

# run migrations
$ yarn typeorm migration:run

# Change to your computer's IP on .env file

# run the server
$ yarn dev
```
<hr>

<div align="center">
	<h3>Website 🖥️</h3>
</div>

<h3>Features</h3>

- Show orphanages in map

<div align="center">
	<img src="/.github/map.gif" alt="map" style="max-width:100%"/>
</div>

- Register new orphanages

<div align="center">
	<img src="/.github/register.gif" alt="register" style="max-width:100%"/>
</div>

- Show details of an orphanage

<div align="center">
	<img src="/.github/details.gif" alt="details" style="max-width:100%"/>
</div>

<h3>Main libs</h3>
 
- [Axios](https://github.com/axios/axios) to consume the API
- [React Leaflet](https://react-leaflet.js.org/docs/en/intro) for [Leaflet](https://leafletjs.com/reference-1.6.0.html) as a React component

<h3>How to run it on your computer</h3>
 
```
# clone this repo
$ git clone https://github.com/felipejsborges/happy.git

# go to web folder
$ cd web

# install dependencies
$ yarn

# Change to your computer's IP on /src/services/api.ts

# run the website
$ yarn start
```
<hr>

<div align="center">
	<h3>Mobile app 📱</h3>
</div>

<h3>Features</h3>

- Show orphanages in map

<div align="center">
	<img src="/.github/map.gif" alt="map" style="max-width:100%"/>
</div>

- Register new orphanages

<div align="center">
	<img src="/.github/register.gif" alt="register" style="max-width:100%"/>
</div>

- Show details of an orphanage

<div align="center">
	<img src="/.github/details.gif" alt="details" style="max-width:100%"/>
</div>

<h3>Main libs</h3>

- [React Navigation](https://reactnavigation.org/docs/getting-started/) for routing and navigation
- [React Native Maps](https://github.com/react-native-community/react-native-maps) to create a map as a component of React Native

<h3>How to run it on your computer</h3>

```
# clone this repo
$ git clone https://github.com/felipejsborges/happy.git

# go to mobile folder
$ cd mobile

# install dependencies
$ yarn

# Change to your computer's IP on mobile/src/services/api.ts

# run the application
$ yarn start
```

<hr>

<span>Feel free to contribute 💪</span>

by Felipe Borges<br>
<a href="https://www.linkedin.com/in/felipejsborges">
	<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/linkedin.svg" alt="LinkedIn">
</a>&nbsp

<a href="https://www.youtube.com/channel/UC6tN_loxPGOP30LWNbJM7rg">
	<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/youtube.svg" alt="YouTube">
</a>&nbsp

<a href="https://wa.me/+55012996477129">
	<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/whatsapp.svg" alt="WhatsApp">
</a>&nbsp

<a href="mailto:felipejsborges@outlook.com">
	<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/mail.svg" alt="E-mail">
</a>
