import React, { Component } from 'react';
import { Card, WhiteSpace, WingBlank, List, InputItem, Button, Modal, Toast, NavBar, Radio, Flex } from 'antd-mobile';
// import {ExclamationCircleTwoTone} from '@ant-design/icons';
import TextField from '@material-ui/core/TextField';
import Payment from './Payment.js'
import Input from './Input.js'
import UserIcon from '../asset/img/user.svg';
import LogOut from '../asset/img/logout.svg';
import BuyPic from '../asset/img/buy2.png';
import './Buy.less'

// import { district, provinceLite } from 'antd-mobile-demo-data';



//弹窗
const RadioItem = Radio.RadioItem;
const prompt = Modal.prompt;
const alert = Modal.alert;
const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);


class Buy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            userType: 'individual',
            isLogin: false,
            isAgree: true,
            paymentAddress: ''
        }
    }

    handleUserTypeChange = (event) => {
        this.setState({ userType: event.target.value })
    }

    showEmailAddress = (event) => {
        this.props.showEmailAddress(event)
    }
    // onChangeEmail = (event) => {
    //     var email = event.target.value
    //     this.setState({ email })
    // }

    componentDidMount = () => {
        console.log(this.state.isAgree)
    }
    handleLogout = () => {
        Toast.loading('Loading...', 0.8);
        setTimeout(() => { // loading画面，跳转时间
            this.setState({ isLogin: false, email: '' })
        }, 1000);
    }
    handleLogin = () => {
        this.props.handleLogin()
    }
    handleClick = () => {
        var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        var paymentAddress = '';
        httpRequest.withCredentials = true;
        httpRequest.open('POST', '/deposit', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
        httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
        httpRequest.send(JSON.stringify(
            {
                "email": this.state.email,
                "coinType": "USDT_ERC20"
            }
        ));//发送请求 将json写入send中
        console.log()
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = () => {//请求后的回调接口，可将请求成功后要执行的程序写在其中
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                var json = httpRequest.responseText;//获取到服务端返回的数据
                console.log(JSON.parse(json).data.address);
                var paymentAddress = JSON.parse(json).data.address;
                this.setState({ paymentAddress })
                // console.log(this.state.paymentAddress)
            }
            // this.setState({paymentAddress})
        };

        const email = this.state.email.toLowerCase().replace(/\s*/g, "");
        console.log(email)
        var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        if (!reg.test(email)) {
            return (
                Toast.info('Email format incorret', 0.8),
                this.setState({ email: '' })
            )
        }
        else if (!this.state.isAgree) {
            return (
                Toast.info('Check the agreement first', 0.8)
            )
        }
        else {
            Modal.alert('Confirmation', 'Are you sure?', [
                { text: 'No' },
                {
                    text: 'Yes', onPress: () => {
                        Toast.loading('Loading...', 0.8)
                        setTimeout(() => { // loading画面，跳转时间
                            const isLogin = true;
                            this.props.handleLogin();
                            this.setState({ isLogin })
                        }, 1000)
                    }
                }
            ])
        }
    }
    render() {
        const { email } = this.state;
        const { isLogin } = this.state;
        const { isAgree } = this.state;
        const msg = {
            userType: this.state.userType,
            paymentAddress: this.state.paymentAddress
        }
        return (
            <div style={{ height: '100%', 
            backgroundColor: '#2b3137',
            minHeight: document.documentElement.clientHeight-60
            }}>
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WingBlank>
                    {!(this.props.isLogin && isAgree) ?
                        <Flex justify='center' >
                            <Card style={{maxWidth:400}}>
                                <Card.Header
                                    title="User Type:"
                                    className='font'
                                    // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<Flex justify='end'>
                                        <select className='font' style={{ borderColor: '#ccc', borderRadius: '4px' }} onChange={this.handleUserTypeChange}>
                                            <option value="individual" defaultValue>Individual</option>
                                            <option value="retailor">Retailor</option>
                                        </select>
                                    </Flex>}
                                />
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <img src={BuyPic} style={{ width: '50%' }} />
                                    <h3 className='font'>Buy GiftCard</h3>
                                    <div style={{ textAlign: 'left' }}>
                                        <text className='font'>Email address</text><text style={{color:'red'}}>*</text><br />
                                        <WhiteSpace />
                                        <Input  onChange={(event) => {
                                            var email = event.target.value
                                            this.setState({ email });this.showEmailAddress(email)
                                        }} />
                                    </div>
                                    <div style={{ textAlign: "left" }}>
                                    </div>


                                    <WhiteSpace />
                                    <div style={{ textAlign: "left" }}>
                                        <text className='font' style={{ width: '100%', fontSize: 12, lineHeight: 1.5 }}>
                                            Make sure the email address is correct. We’ll send you account related emails.
                                    <a className='a'>Learn more</a></text>
                                    </div>
                                    <WhiteSpace />
                                    <Button
                                        style={{ backgroundColor: '#2ebc4f', color: 'white', border: '0px', fontWeight: 500, fontSize: 14 }}
                                        onClick={
                                            this.handleClick
                                        }
                                    >Confirm
                                    </Button>
                                    <WhiteSpace />
                                    {/* <div style={{ textAlign: "left" }}>
                                        <text className='font' style={{ width: '100%', fontSize: 12, lineHeight: 1.5 }}>
                                            By clicking “Confirm”, you agree to our
                                    <a className='a'>Terms of Service</a>
                                    and
                                    <a className='a'>Privacy Statement</a>
                                    . We’ll occasionally send you account related emails.</text>
                                    </div> */}
                                </Card.Body>
                            </Card></Flex> : <Payment  {...msg} />}
                    <WhiteSpace />
                    <WhiteSpace />
                    <div style={{textAlign:'center'}}><a style={{color:'white'}}>How to use?</a></div>
                    </WingBlank>
            </div>
        )
    }
}
export default Buy

