import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './Home';
import Classes from './Classes';
import Students from './Students';
import Notes from './Notes';

const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

const { Header, Content, Footer } = Layout;

const home = () => (
  <Home />
)

const classes = () => (
  <Classes />
)

const students = () => (
  <Students />
)

const notes = () => (
  <Notes />
)

export default class App extends Component {

  render() {
    return (

      <Router>
        <Layout className="layout">
          <Header>
            <div>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]} style={{ lineHeight: '64px' }}>
                <Menu.Item key="/">
                  <Link to="/">
                    <Icon type="home" />
                    Home
                </Link>
                </Menu.Item>
                <Menu.Item key="/classes">
                  <Link to="/classes">
                    <Icon type="team" />
                    My classes
                </Link>
                </Menu.Item>
                <Menu.Item key="/students">
                  <Link to="/students">
                    <Icon type="user" />
                    My students
                </Link>
                </Menu.Item>
                <Menu.Item key="/notes">
                  <Link to="/notes">
                    <Icon type="pie-chart" />
                    Notes
                </Link>
                </Menu.Item>
              </Menu>
            </div>
          </Header>
          <Layout>
            <Content style={{ padding: '0 50px', margin: '50px 0 0 0' }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Route exact path="/" component={home} />
                <Route path="/classes" component={classes} />
                <Route path="/students" component={students} />
                <Route path="/notes" component={notes} />
              </div>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
            @Hétic
      </Footer>
        </Layout>
      </Router>
    )
  }
}