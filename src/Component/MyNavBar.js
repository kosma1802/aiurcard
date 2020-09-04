import React, { Component } from 'react';
import { NavBar, Icon,Drawer,Popover,Modal,Toast} from 'antd-mobile';
import HomeIcon from '../asset/img/homepage.svg';
import Language from '../asset/img/language.svg';
import BitpassLogo from '../asset/img/bitpasslogo.png' ;
import user from '../asset/img/user.svg';
import './MyNavBar.less'
const Item = Popover.Item;
const prompt = Modal.prompt;
const alert = Modal.alert;
class MyNavBar extends Component{
  constructor(props){
    super(props)
      this.state = {
        userName : null,
        language : null,
        isLogin: false,
        email:''
      }
    }
  state = {
    visible: false,
    selected: '',
  };
  handleLogout = (opt) => {

    Modal.alert('Confirmation', 'Are you sure?', [
      { text: 'No' },
      {
          text: 'Yes', onPress: () => {
              Toast.loading('Loading...', 0.8)
              setTimeout(() => { // loading画面，跳转时间
                this.props.handleLogout();
              }, 1000)
          }
      }
  ])
    
    
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  handleBackHome = () =>{
    this.props.handleBackHome();
  }
    render(){
      const email=this.props.email
      // .toLowerCase()
        return(
            <div style={{zIndex:9998}}>
    <NavBar
    style={{zIndex:9999,backgroundColor:'black'}}
    className='navbar'
      mode="dark"
        icon={<div>
          {/* <img src={HomeIcon} style={{width:24,height:24}}/> */}
          <img src={BitpassLogo} style={{width:120}} />
          </div>
      
    }
    
      onLeftClick={
        this.handleBackHome
      }
      rightContent={
        <div>
        <Popover mask={false}
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          visible={this.state.visible}
          overlay={[
            (<Item key="1"  >Logout</Item>)
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-10, 0],
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.handleLogout}
        >
          <div style={{
            height: '100%',
            padding: '0 15px',
            marginRight: '-15px',
            display: 'flex',
            alignItems: 'center',
          }}
          >
           {this.props.isLogin?<div><img src={user}  style={{width:24,height:24}} /></div>:''} 
          </div>
        </Popover></div>
      }
    >
      {/* {this.props.isLogin?<text>{email}</text>:<img src={BitpassLogo} style={{width:120}} />} */}
      </NavBar>
    
    
  </div>
        )
    }
}

export default MyNavBar