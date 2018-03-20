# Custom React Boilerplate by Jayne 

![](./header.png)

## purpose of this project
Not using a big react boilerplate, implement routing, web serving, redux-pattern, code-splitting, etc by myself based on `start-react-app`

inspired by [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

continuously adding new features and packages 
## change log

- 2018-02-28 : first start of this project with `start-react-app` package   
- 2018-03-01 :  `react-router` / `react-router-dom`
- 2018-03-14 : `redux` /`react-redux`  and `immutable`
- 2018-03-14 : use `prop-types` for type checking  
- 2018-03-14 : use `react-loadable` for simple code-splitting
- 2018-03-15 : use `reselect` for constructing structured selector


#### on plan ... 
- 2018-xx-xx :  `redux-saga` (redux middleware who manage side-effects) 
- 2018-xx-xx : `styled-component`
- 2018-xx-xx : [`react-injectable-reducer`](https://www.npmjs.com/package/redux-injectable-reducer)

 
### 2018-02-28 : first start of this project with `start-react-app` package

#### install 
```$xslt
npm install -g create-react-app
create-react-app myapp 
cd ./myapp
```
#### `webpack-dev-server` activate
```$xslt
npm start
```
#### compile with `webpack` and `babel` 
```
npm build 
```
#### node package `serve` : static server
```$xslt
npm install -g serve
serve -s ./build
```

### 2018-03-01 : applied `react-router-dom`
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


### 2018-03-14  : `redux` /`react-redux`  and `immutable`  

`redux` is state managing library. We can use  `redux` with react by using `react-redux` package.

#### reference
- https://deminoth.github.io/redux/

#### required package
- immutable
- redux
- react-redux 
- redux-immutable
#### about immutable
##### why using immutable (with redux) ? 
- https://deminoth.github.io/redux/recipes/UsingImmutableJS.html

##### how to use immutable
- `immutable` official doc : https://facebook.github.io/immutable-js/ 
- `redux-immutable` gitgub doc : https://github.com/gajus/redux-immutable


### 2018-03-14 : use `prop-types` for type checking

#### reference
- npm info : https://www.npmjs.com/package/prop-types 
- react doc : https://reactjs.org/docs/typechecking-with-proptypes.html

#### install 
```angular2html
npm install --save prop-types 
```
#### use 
```angular2html
import PropTypes from 'prop-types'; // ES6
var PropTypes = require('prop-types'); // ES5 with npm
```

### 2018-03-14 : use `react-loadable` for simple code-splitting

`react-loadable` is a yarn package to make code-splitting super simple 

#### reference
- https://github.com/jamiebuilds/react-loadable

#### install in CLI
```angular2html
yarn add react-loadable
```

#### code explaination
This package make you available to do component-based code splitting.
The only thing you have to do is wrap your component (especially container component) with Loadable, like the code below.  

```angular2html
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
```

### - 2018-03-15 : use `reselect` for constructing structured selector

#### reference 
- github doc : https://github.com/reactjs/reselect

#### installation 
```angular2html
npm install --save reselect
```

#### major function 1 `createSelector`

1. easily wrap a selector and make more specific selector
```angular2html
const getTodo = (state)=> state.get(todo) ;

const getFilter = createSelector(
    getTodo,
    (todo)=>todo.filter
);
```
2. easily wrap two or more selectors and make some new selection
```angular2html
const getFilteredList = createSelector(
    [getList, getFilter],
    (list, filter)=> {
        switch(filter) {
            case 'ALL' :
                return list;
            default :
                return list;
        }
    }
) ;
```

#### major function 2 `createStructuredSelector`

make final composed selector 

```angular2html
const selector = createStructuredSelector({
        filteredList: getFilteredList,
    });

//same code 
const selector = createSelector(
    getFilteredList,
    (result) => {filteredList : result }
);
```
### 2018-xx-xx (plan) :  `redux-saga` (redux middleware who manage side-effects)

#### reference
- https://redux-saga.js.org
- http://meetup.toast.com/posts/136


### implement server using `express`

#### reference 
- http://developmentholic.blogspot.kr/2017/02/react-08-create-react-app-express.html
