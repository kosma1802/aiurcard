import React, { Component } from 'react';
import { SearchBar, WhiteSpace, List, TextareaItem, Card, Flex, WingBlank, Button, Toast, Modal,InputItem } from 'antd-mobile'
import CardHeader from 'antd-mobile/lib/card/CardHeader';
import CardBody from 'antd-mobile/lib/card/CardBody';
import SearchPic from '../asset/img/search2.png'

const prompt = Modal.prompt;
const alert = Modal.alert;


export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardNumber : '',
            isNumberCorrect : false
        }
        
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {

        const cardNumber = this.state.cardNumber.replace(/\s*/g, "");//去空格
        var reg = /^1[3456789]\d{9}$/;
        if (!reg.test(cardNumber)) {
            return (
                Toast.fail('Email format incorret', 0.8),
                this.setState({ cardNumber: '' })
            )
        }
        else {
            Toast.loading('Loading...', 0.8);

            console.log(cardNumber)
            // this.setState({ email })
            setTimeout(() => { // loading画面，跳转时间
                const isNumberCorrect = true
                console.log({ isNumberCorrect })
                this.setState({ isNumberCorrect})

            }, 1000);
        }

    }

    render() {
        const {cardNumber} = this.state
        return (
            <div>
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace />
                <WingBlank>
                    
                    <Card>
                        <CardBody style={{textAlign:'center'}}>
                            <img src={SearchPic} style={{width:'50%'}} />
                            <h3>Search</h3>
                            <List>
                                    <InputItem
                                        clear
                                        placeholder="Card serial number..."
                                        value={cardNumber}
                                        onChange={(cardNumber) => { this.setState({ cardNumber }) }}
                                    >Card SN</InputItem>
                                </List>
                                <WhiteSpace></WhiteSpace>
                                
                                <Button
                                    size='small' type='ghost'
                                    onClick={() =>
                                        alert('Confirmation', 'Are you sure?', [
                                            { text: 'No' },
                                            { text: 'Yes', onPress: this.handleClick },
                                        ])
                                    }
                                >
                                    Confirm
                            </Button>
                        </CardBody>

                    </Card>
                </WingBlank>
            </div>
        )
    }
}
