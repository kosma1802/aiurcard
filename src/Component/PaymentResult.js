import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import { Result, Icon, Card, List, InputItem, NoticeBar, Toast, Button, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
import './PaymentResult.css';
import CardBody from 'antd-mobile/lib/card/CardBody';
import CardHeader from 'antd-mobile/lib/card/CardHeader';

// const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
// const Item = List.Item;
export default class PaymentResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderTime: null,
            orderDate: null,
            cardsn: '12412412413414314',
            coinType: 'USDT-ERC20',
            amount: '50'

        }
        this.handleCopy = this.handleCopy.bind(this)
        this.handleBuyMore=this.handleBuyMore.bind(this)
    }
    handleBuyMore  = () =>{
        this.props.goBuyMore()
    }
    download = () => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.state.cardsn));
        element.setAttribute('download', 321);
       
        element.style.display = 'none';
        document.body.appendChild(element);
       
        element.click();
       
        document.body.removeChild(element);
      }
      
    //   download = (filename, text) => {
    //     var element = document.createElement('a');
    //     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    //     element.setAttribute('download', filename);
       
    //     element.style.display = 'none';
    //     document.body.appendChild(element);
       
    //     element.click();
       
    //     document.body.removeChild(element);
    //   }



    handleCopy = () => {
        const cardsn = this.state.cardsn
        copy(cardsn)
        Toast.info('Copy Successfully', 1);
    }

    render() {
        return (
            <div >
                <div className="result-example">
                    <div className="sub-title">
                        <Card >
                            {/* <CardHeader title='Payment Result' ></CardHeader> */}
                            <CardBody>
                                <Result
                                    img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6', width: 60, height: 60 }} />}
                                    title="Payment Successful"
                                    message={<div>
                                        <h5>{this.props.orderDate}&nbsp;&nbsp;{this.props.orderTime}</h5>
                                    </div>}
                                />
                                <Flex>
                                    <div> <ul style={{ listStyle: 'none', textAlign: "right", paddingLeft: 10, lineHeight: 2 }}>
                                        {/* <li>Address:</li> */}
                                        <li>Value:</li>
                                        {/* <li>CoinType:</li> */}
                                        <li>CardSN:</li>
                                    </ul></div>
                                    <div><ul style={{ listStyle: 'none', textAlign: "left", paddingLeft: 25, lineHeight: 2 }}>
                                        {/* <li>{this.props.receivingAddress}</li> */}
                                        <li ><text>{this.state.amount}</text>&nbsp;&nbsp;&nbsp;<text style={{fontSize:12}}>({this.state.coinType})</text></li>
                                        
                                        <li style={{color:'#33A3F4'}}>{this.state.cardsn}</li>
                                    </ul></div>
                                </Flex>
                                <List
                                // renderHeader={() => 'Gift Card Information'}
                                >
                                    {/* <ListItem>
                                        <div
                                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                        >
                                            Gift Card Information
                                        </div>
                                    </ListItem> */}
                                    {/* <InputItem
                                        style={{ fontSize: 14 }}
                                        onClick={this.handleCopy}
                                        value={this.state.amount}
                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>Amount :</text></InputItem>
                                    <InputItem
                                        style={{ fontSize: 14 }}
                                        onClick={this.handleCopy}
                                        value={this.state.coinType}
                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>CoinType :</text></InputItem>
                                    <InputItem
                                        style={{ fontSize: 14 }}
                                        value={this.state.cardNumber}

                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>Card SN :</text></InputItem> */}
                                    {/* <InputItem
                                        style={{ fontSize: 14 }}
                                        onClick={this.handleCopy}
                                        value={this.state.cardPassword}
                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>Password :</text></InputItem> */}

                                </List>
                            </CardBody>
                            <WingBlank>
                                {this.props.userType=='retailor' ? 
                                <Button type='primary' onClick={this.download} size='small'>Download CardSN File</Button>:
                                 <Button type='primary' onClick={this.handleCopy} size='small'>Copy CardSN</Button>}
                                <WhiteSpace />
                                <Button type='ghost' size='small' 
                                onClick={this.handleBuyMore}
                                >Buy more</Button>
                            </WingBlank>
                        </Card>


                    </div>
                </div>
            </div>
        )
    }
}

