import React, { Component } from 'react'
import { WingBlank, Card, Button, Toast, Modal, List, Flex, WhiteSpace, TextareaItem } from 'antd-mobile'
import CardBody from 'antd-mobile/lib/card/CardBody';
import { createForm } from 'rc-form';
import CardHeader from 'antd-mobile/lib/card/CardHeader';
import usdt from '../asset/img/usdt.png';
import AcceptResult from './AcceptResult.js'
import btc from '../asset/img/btc.png'
const prompt = Modal.prompt;
const alert = Modal.alert;

export default class AcceptConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardsn: null,
            receivingAddress: null,
            amount: null,
            coinType: null,
            isConfirm: false,
            orderTime: null,
            orderDate: null,
            cardState: 'available',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    

    handleAcceptMore = () =>{
        this.props.goAcceptMore()
        this.setState({isConfirm:false})
    }

    handleClick() {
        const receivingAddress = this.state.receivingAddress.replace(/\s*/g, "");  //输入是否为空
        if (receivingAddress == '') {
            return (
                Toast.fail('Invalid serial number', 0.8)
            )
        }
        else {
            Toast.loading('Loading...', 0.8);
            setTimeout(() => {
                const isConfirm = !this.state.isConfirm
                const orderTime = new Date()
                this.setState({ isConfirm })
                this.setState({ orderTime })
            }, 1000);
        }
    }


    render() {
        const msg = {
            cardsn: this.props.cardsn,
            receivingAddress: this.state.receivingAddress,
            amount: this.props.amount,
            coinType: this.props.coinType,
            orderTime: this.props.orderTime,
            orderDate: this.props.orderDate,
        }
        return (
            <div>
                {this.state.isConfirm ? <AcceptResult   goAcceptMore={this.handleAcceptMore}   {...msg} /> :
                    <Card full>
                        <CardBody>

                            <div style={{ textAlign: 'center' }}>
                                <h3>Receipt confirmation</h3>
                            </div>
                            {/* <hr></hr> */}
                            <Flex>
                                <div><ul style={{ listStyle: 'none', textAlign: "right", paddingLeft: 10, lineHeight: 2 }}>
                                    {/* <li>Address:</li> */}
                                    <li>Value:</li>
                                    <li>CoinType:</li>
                                    <li>CardSN:</li>
                                </ul></div>
                                <div><ul style={{ listStyle: 'none', textAlign: "left", paddingLeft: 25, lineHeight: 2 }}>
                                    {/* <li>{this.props.receivingAddress}</li> */}
                                    <li>{this.props.amount}</li>
                                    <li>
                                        {/* <img src={usdt} style={{ width: 16, height: 16 }} /> */}
                                        {this.props.coinType}</li>
                                    <li>{this.props.cardsn}</li>
                                </ul></div>
                            </Flex>
                            {/* <hr></hr> */}
                            <List>
                                <TextareaItem
                                    clear
                                    title="Receiver"
                                    placeholder="Receiving address"
                                    // ref={input => this.input = input}
                                    value={this.state.receivingAddress}
                                    onChange={(receivingAddress) => { this.setState({ receivingAddress }) }}
                                />
                            </List>
                            <Button
                                size='small'
                                type='ghost'
                                onClick={() =>
                                    alert('Confirmation', 'Are you sure?', [
                                        { text: 'No' },
                                        { text: 'Yes', onPress: this.handleClick },
                                    ])
                                }>Confirm</Button>
                        </CardBody>
                    </Card>
                }

            </div>
        )
    }
}
