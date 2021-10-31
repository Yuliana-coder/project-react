import { Layout, Menu, Typography } from 'antd';
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import { Homepage } from "./components/homepage"
import { Aboutpage } from "./components/aboutpage"
import React from "react";

const { Header, Content, Footer } = Layout;

class App extends React.Component { 

  render() {
    const routs = {
      '/' : '1',
      '/about': '2'
    }

    return <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.props.location.pathname && routs[this.props.location.pathname] ? routs[this.props.location.pathname] : '1']}>
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
