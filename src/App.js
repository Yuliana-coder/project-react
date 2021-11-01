import { Layout, Menu, Typography } from 'antd';
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import { Homepage } from "./components/homepage"
import { Aboutpage } from "./components/aboutpage"
import React from "react";

const { Header, Content, Footer } = Layout;

class App extends React.Component { 

  render() {
    const routes = {
      '/' : '1',
      '/about': '2'
    }

    let selectedKye = ['1'];

    if(this.props.location.pathname && routes[this.props.location.pathname]) {
      selectedKye = [routes[this.props.location.pathname]];
    }

    return <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKye}>
          <Menu.Item key="1">
            <Link to="/">
              Главная
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">
              О нас
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="main-container">
          <Switch>
            <Route path='/about'>
              <Aboutpage />
            </Route>
            <Route path='/'>
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Homework React</Footer>
  </Layout>
  };
}

export default withRouter(App);
