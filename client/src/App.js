import { Component } from 'react';
import { Route, Link, Navlink, Redirect, Switch, Router } from 'react-router-dom';

import * as postService from './services/postServices';

import style from './App.module.css';
import Header from './components/Header/';
import Menu from './components/Menu/';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main/';

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />
//       <div className={style.container}>
//         <Menu />

//         <Main />
//       </div>
//     </div>
//   );
// }

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      selectedPost: null
    }
  }

  componentDidMount() {
    postService.getAll()
      .then((posts) => {
        this.setState({ posts })
      })
  }

  onMenuItemClick(id) {
    this.setState(({ selectedPost: id }));
  }

  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      return [this.state.posts.find(x => x.id == this.state.selectedPost)]
    }
  }

  render() {
    return (
      <div className={style.app}>
        <Header />

        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick.bind(this)} />

          <Switch>
            <Route path='/' exact>
              <Main posts={this.getPosts()} />
            </Route>
            <Route path='/about/:name' component={About} />
            <Route path='/contact' component={Contact} />
            <Route render={() => <h1>Error Page</h1> } />
          </Switch>

        </div>
      </div>
    )
  }
}

export default App;
