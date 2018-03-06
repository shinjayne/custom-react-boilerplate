#React-study 
## purpose of this project
Not using a big react boilerplate, implement routing, web serving, redux-pattern, etc by myself based on `start-react-app`
## change log

- 2018-02-28 : first start of this project with `start-react-app` package
- 2018-03-01 : applied `react-router-dom`
- 2018-03-05 : implement server using `express`
 
### first start
####
```$xslt
npm install -g create-react-app
create-react-app myapp 
cd ./myapp
```
####
```$xslt
npm start
```
#### 
```
npm build 
```
#### node package `serve` : static server
```$xslt
npm install -g serve
serve -s ./build
```

### applied `react-router-dom`
#### reference
- https://velopert.com/3417
- https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
#### dependancy
1. `yarn` : package manager
2. `react-router-dom` : router js package using in client browser
3. `cross-env` : setting environment variable `NODE_PATH` in various OS . `NODE_PATH` is used loading files along to absolute path.
4. `query-string` : for url query parsing in router `hostname/user/?id=1/?name=jayne`
```$xslt
npm install -g yarn
yarn add react-router-dom
yarn add cross-env --dev
yarn add query-string
``` 
#### `cross-env` script setting in `package.json`
```$xslt
  "scripts": {
    "start": "cross-env NODE_PATH=src && react-scripts start",
    "build": "cross-env NODE_PATH=src && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```


#### choose `react-router-dom` or `react-router-native`
`react-router` package provides core functions for routing in react. 

Both `react-router-dom` and `react-router-native` re-export `react-router`, to be more fit to each environment (browser DOM and native app).

#### choose which Router to use
For browser based project, there are two types of router, `<BrowserRouter>` and `<HashRouter>`.

When you can handle dynamic request with application server, it is always recommended to use `<BrouserRouter>`.

If you have the server which can only serve static files, then you may use `<HashRouter>`.



### implement server using `express`

#### reference 
- http://developmentholic.blogspot.kr/2017/02/react-08-create-react-app-express.html
