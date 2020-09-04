import React, { Component } from 'react';
import {Card,  Flex, Toast, Button,WhiteSpace} from 'antd-mobile';
import CardBody from 'antd-mobile/lib/card/CardBody';
import QRCode from 'qrcode.react';
import usdt from "../asset/img/TetherLogo.png"
import copy from 'copy-to-clipboard';
import PaymentResult from './PaymentResult.js';
import './Payment.less'
function showToast() {
  Toast.info('Copy Successfully', 1);
}
class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      selected: '',
      paymentAddress: '1kbuikub1908habc98ba32',
      isPaymentSuccessful: false,
      orderTime: null,
      orderDate: null,
      coinType: 'USDT-TRON',
      denomination: '20'
    }
    this.handleBuyMore=this.handleBuyMore.bind(this)
  }

  componentDidMount(){ 
    console.log(this.props)
    this.setState({paymentAddress:this.props.paymentAddress})
  }

  onSelectCoinType = (e) =>{
    this.setState({coinType:e.target.value});
  }
  onSelectDenomination = (e) =>{
    this.setState({denomination:e.target.value});
  }

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    })

      ;
  };
  handleCopy = () => {
    const paymentAddress = this.state.paymentAddress
    console.log(paymentAddress)
    copy(paymentAddress)
    showToast()
  }

  handleBuyMore (){
    this.setState({ isPaymentSuccessful: false })
  }


  getNowFormatDate() {
    var day = new Date();
    var CurrentDate = "";
    //初始化时间
    //Year       = day.getYear();//有火狐下2008年显示108的bug
    var Year = day.getFullYear();//ie火狐下都可以
    var Month = day.getMonth() + 1;
    var Day = day.getDate();
    CurrentDate += Year + "/";
    if (Month >= 10) {
      CurrentDate += Month + "/";
    }
    else {
      CurrentDate += "0" + Month + "/";
    }
    if (Day >= 10) {
      CurrentDate += Day;
    }
    else {
      CurrentDate += "0" + Day + ' ';
    }
    return (CurrentDate);
  }
  getNowFormatTime() {
    var day = new Date();
    var CurrentTime = "";
    var Hours = day.getHours();
    var Minutes = day.getMinutes();
    var Seconds = day.getSeconds();
    if (Hours >= 10) {
      CurrentTime += Hours + ":";
    }
    else {
      CurrentTime += "0" + Hours + ":";
    }
    if (Minutes >= 10) {
      CurrentTime += Minutes + ":";
    }
    else {
      CurrentTime += "0" + Minutes + ":";
    }
    if (Seconds >= 10) {
      CurrentTime += Seconds;
    }
    else {
      CurrentTime += "0" + Seconds;
    }
    return (CurrentTime);
  }

  render() {
    const msg = {
      paymentAddress: this.state.paymentAddress,
      userType: this.props.userType,
      orderDate: this.getNowFormatDate(),
      orderTime: this.getNowFormatTime(),
    }

    return (
      <div>
        {/* <WingBlank> */}
        {!this.state.isPaymentSuccessful ?
          <div>
            {/* <NoticeBar
              marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
              Notice : A gift card with the corresponding value will be issued after your transaction
          </NoticeBar> */}
            {/* <NavLink to="/buy">Buy</NavLink> */}
            <Card>
              <Card.Header
                title="Coin Type:"
                extra={<Flex justify='end'>
                  <select style={{ borderColor: '#ccc', borderRadius: '4px' }}  
                  onChange={this.onSelectCoinType} >
                    <option value="USDT-TRON" defaultValue>USDT-TRON</option>
                    <option value="USDT-ERC20">USDT-ERC20</option>
                    <option value="BTC" >Bitcoin</option>
                    
                  </select>
                </Flex>}
              />
              {this.props.userType == 'retailor' ? <Card.Header
                title="Denomination:"
                extra={<Flex justify='end'>
                  <select style={{ borderColor: '#ccc', borderRadius: '4px' }}  
                  onChange={this.onSelectDenomination} >
                    <option value="20" defaultValue>20&nbsp;USDT</option>
                    <option value="50">50&nbsp;USDT</option>
                    <option value="100" >100&nbsp;USDT</option>
                    <option value="200" >200&nbsp;USDT</option>
                    
                  </select>
                </Flex>}
              />:''}
              
              
              <CardBody>
                <Flex justify='center'>
                  <img src={usdt} style={{ width: 100, paddingTop: 30, paddingBottom: 30 }} /></Flex>
                <Flex justify='center'><QRCode value={this.props.paymentAddress} renderAs='svg' size={150} onClick={this.handleCopy}></QRCode></Flex>
                <div style={{ textAlign: 'center'}}>
                  <WhiteSpace />
                  <h3>Payment Address</h3>
                  <WhiteSpace />
                  <text className='address' >{this.props.paymentAddress}</text></div>
                <Flex justify='center'>
                  <Button size='small' type='ghost' onClick={this.handleCopy} style={{ width: '200px' }}>Copy</Button>
                  {/* <Button onClick={()=>{console.log(this.state.coinType),console.log(this.state.denomination)}}>123</Button> */}
                  </Flex>
              </CardBody>

            </Card>
          </div> : <PaymentResult  
          goBuyMore={this.handleBuyMore} 
          {...msg} />} 
       
      </div>
    )
  }
}
export default Payment

