import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import { Result, Icon, Card, List, InputItem, NoticeBar, Toast, Button, WhiteSpace, Flex } from 'antd-mobile';
import './PaymentResult.css';
import CardBody from 'antd-mobile/lib/card/CardBody';
import CardHeader from 'antd-mobile/lib/card/CardHeader';
// import './AcceptResult.less'

// const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
// const Item = List.Item;
export default class AcceotResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardsn: null,
            receivingAddress: null,
            amount: null,
            coinType: null,
            orderTime: null,
            orderDate: null
        }
        this.handleCopy = this.handleCopy.bind(this)

    }
    handleAcceptMore = () => {
        this.props.goAcceptMore()
    }

    handleCopy = () => {
        const cardPassword = this.state.cardPassword
        // console.log(paymentaddress)
        // const address = toString(paymentaddress)
        copy(cardPassword)
        Toast.info('Copy Successfully', 1);
    }

    render() {
        return (
            <div >
                <div className="result-example">
                    <div className="sub-title">
                        {/* <NoticeBar
                            marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                            Notice : The gift card information has been sent to your mailbox
                        </NoticeBar> */}
                        <Card>
                            {/* <CardHeader title='Receipt Details' ></CardHeader> */}
                            <CardBody>
                                <Result
                                    img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6', width: 60, height: 60 }} />}
                                    title="Acception Successful"
                                    message={<div>
                                        <h5>{this.props.orderDate}&nbsp;&nbsp;{this.props.orderTime}</h5>
                                        <h5>{this.props.amount}&nbsp;{this.props.coinType}</h5>
                                    </div>}
                                />

                                <Flex>
                                    <div><ul style={{ listStyle: 'none', textAlign: "right", paddingLeft: 10, lineHeight: 2 }}>
                                        {/* <li>Address:</li> */}
                                        <li>Value:</li>
                                        <li>CardSN:</li>
                                        <li>Receiver</li>
                                    </ul></div>
                                    <div><ul style={{ listStyle: 'none', textAlign: "left", paddingLeft: 25, lineHeight: 2 }}>
                                        {/* <li>{this.props.receivingAddress}</li> */}
                                        <li>{this.props.amount}&nbsp;{this.props.coinType}</li>
                                        <li>{this.props.cardsn}</li>
                                        <li>{this.props.receivingAddress}</li>
                                    </ul></div>
                                </Flex>
                                {/* <List>
                                    <InputItem
                                        style={{ fontSize: 14 }}
                                        // onClick={this.handleCopy}
                                        value={this.props.cardsn}
                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>CardSN :</text></InputItem>
                                    <InputItem
                                        style={{ fontSize: 14 }}
                                        // onClick={this.handleCopy}
                                        value={this.props.coinType}
                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>CoinType :</text></InputItem>
                                    <InputItem
                                        style={{ fontSize: 14 }}
                                        // onClick={this.handleCopy}
                                        value={this.props.amount}
                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>Value :</text></InputItem>
                                    <InputItem
                                        style={{ fontSize: 14 }}
                                        // onClick={this.handleCopy}
                                        value={this.props.receivingAddress}
                                        editable={false}
                                    ><text style={{ fontSize: 14 }}>Receiver :</text></InputItem>
                                </List> */}
                                <Button type='primary' size='small' onClick={this.handleAcceptMore}>Accept more</Button>
                            </CardBody>
                        </Card>
                        {/* <a to='/howtouse' >How to use?</a> */}

                    </div>
                </div>
            </div>
        )
    }
}

