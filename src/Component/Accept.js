import React, { Component } from 'react'
import { createForm } from 'rc-form';
// import { Descriptions } from 'antd'
import { SearchBar, WhiteSpace, List, TextareaItem, Card, Flex, WingBlank, Button, Toast, Modal, InputItem} from 'antd-mobile';
import CardBody from 'antd-mobile/lib/card/CardBody';
import AcceptPic from '../asset/img/accept2.png';
import AcceptConfirm from './AcceptConfirm.js';
const prompt = Modal.prompt;
const alert = Modal.alert;
export default class Accept extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardsn: '',
      receivingAddress: '',
      amount: '50',
      coinType: 'USDT-ERC20',
      orderTime: null,
      orderDate: null,
      isSubmitted: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }



  handleClick() {
    const cardsn = this.state.cardsn.replace(/\s*/g, "");  //输入是否为空
    // const receivingAddress = this.state.receivingAddress.replace(/\s*/g, "");
    if (cardsn == '') {
      return (
        Toast.fail('Invalid serial number', 0.8)
      )
    }
    else {
      Toast.loading('Loading...', 0.8);
      var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        httpRequest.withCredentials = true;
        var site = '/query'+'?'+'serial='+cardsn
        httpRequest.open('GET', '/status', true); 
        httpRequest.setRequestHeader("Content-type","application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
        
        httpRequest.send({"serial":{cardsn}});
       
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = () => {//请求后的回调接口，可将请求成功后要执行的程序写在其中
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                var json = httpRequest.responseText;//获取到服务端返回的数据
                console.log(JSON.parse(json).data.address);
                var paymentAddress = JSON.parse(json).data.address;
                this.setState({paymentAddress})
                // console.log(this.state.paymentAddress)
            }
        // this.setState({paymentAddress})
        };

      this.setState({ cardsn })
      // this.setState({ receivingAddress })
      setTimeout(() => {
        // const email = this.refs.content
        const isSubmitted = true
        // console.log({ isSubmitted })
        this.setState({ isSubmitted })

      }, 1000);

    }

    // console.log(this.state.isSubmitted)

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

  handleAcceptMore = () => {
    this.setState({ isSubmitted: false })
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
    // const isSubmitted=this.state.isSubmitted
    var date = new Date()
    const msg = {
      cardsn: this.state.cardsn,
      receivingAddress: this.state.receivingAddress,
      amount: this.state.amount,
      coinType: this.state.coinType,
      year: date.getFullYear(),
      month: date.getMonth(),
      orderDate: this.getNowFormatDate(),
      orderTime: this.getNowFormatTime()
    }
    return (
      <div>
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
        <WingBlank>
          {this.state.isSubmitted ? <AcceptConfirm goAcceptMore={this.handleAcceptMore} {...msg} /> :

            <Card>
              {/* <CardHeader title="Accept GiftCard"></CardHeader> */}
              <CardBody style={{ textAlign: 'center' }}>
                <img src={AcceptPic} style={{ width: '50%' }} />
                <h3>Accept GiftCard</h3>
                <List >
                  {/* <InputItem
                    clear
                    title="Card SN"
                    placeholder="Giftcard serial number"
                    value={this.state.cardsn}
                    onChange={(cardsn) => { this.setState({ cardsn }) }}
                  >Card SN</ InputItem> */}
                  <TextareaItem
                    clear
                    title="Card SN"
                    placeholder="Giftcard serial number"
                    value={this.state.cardsn}
                    onChange={(cardsn) => { this.setState({ cardsn }) }}
                    autoHeight
                    labelNumber={5}
                  />
                  {/* <TextareaItem
                  clear
                  title="Address"

                  placeholder="Receiving address"
                  ref={input => this.input = input}
                  value={this.state.receivingAddress}
                  onChange={(receivingAddress) => { this.setState({ receivingAddress }) }}
                /> */}
                </List>
                <WhiteSpace />
                <Button
                  size='small' type='ghost'
                  //  onClick={this.handleClick}
                  onClick={this.handleClick}
                >Submit</Button>
              </CardBody>
            </Card>}
        </WingBlank>
      </div>

    )
  }
}
