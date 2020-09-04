import React, { Component } from 'react';
import { Button,  WhiteSpace, WingBlank,  Flex} from 'antd-mobile';
// import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import FeatureCard from './FeatureCard.js'
// import MyNavBar from './MyNavBar.js';
import giftcard from '../asset/img/giftcard3.png';
import Background from '../asset/img/bg.jpg';
import fast from '../asset/img/fast.svg';
import safe from '../asset/img/safe.svg';
import puzzle from '../asset/img/puzzle.svg' ;
import convenient from '../asset/img/convenient.svg';
import './HomePage.less'
import 'fontsource-roboto';


// const data = [
//     {icon: `url(${fast})`,text:'Fast'},
//     {icon: `url(${safe})`,text:'Safe'},
//     {icon: `url(${convenient})`,text:'Convenient'}
// ]


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardsn: null
        }
        this.onChange = this.onChange.bind(this)
        this.onGoBuy = this.onGoBuy.bind(this)
        this.onGoAccpet = this.onGoAccpet.bind(this)
    }


    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }


    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    onChange = (cardsn) => {
        this.setState({ cardsn });
    };
    clear = () => {
        this.setState({ value: '' });
    };

    onGoBuy(){
        this.props.goBuy()
    }

    onGoAccpet(){
        this.props.goAccept()
    }


    render() {

        return (
            <div style={{
                height: '100%',
                // background: `url(${Background})`
                
            }}>
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                {/* <SearchBar placeholder='Search CardNumber' onSubmit={this.onChange} ></SearchBar> */}
                <WingBlank>
                    <h1 className='font' style={{ fontSize: 48 }}>BitPass GiftCard</h1>
                    <h2 className='font'  style={{ fontSize: 26 }}>Easiest way to pay cryptocurrency</h2>
                    <WhiteSpace />
                </WingBlank>
                    <Flex >
                        
                        
                        <div style={{paddingRight:10}}>
                        <FeatureCard  iconType={fast} title='Fast' description='Instant Arrival' /><br/>
                        <FeatureCard  iconType={safe} title='Safe' description='Multiple Protection' /><br/>
                        <FeatureCard  iconType={puzzle} title='Customizable' description='Custom denomination' /><br/>
                        <FeatureCard  iconType={convenient} title='Easy' description='No registration' />
                        </div>
                        
                        <img src={giftcard} style={{ width: 140,marginLeft:'0',paddingLeft:'0'}} />
                        
                        
                        {/* <Flex.Item><img src={giftcard} style={{ width: '180'}} /></Flex.Item> */}
                        
                    </Flex>
                    <WhiteSpace />
                    <WingBlank>
                        <Flex justify='center' >
                        <Flex.Item>
                            <Button  className='fontRoboto' type='primary' style={{ width: '100%' }} size='large' onClick={this.onGoBuy}>Buy Now</Button>
                        </Flex.Item>
                        <Flex.Item>
                            <Button  className='fontRoboto' type='ghost' style={{ width: '100%' }} size='large' onClick={this.onGoAccpet}>Accept Now</Button>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace  />
                    <WhiteSpace  />
                    <Flex justify='center'>
                        <a>How to use?</a>
                    </Flex>
                    </WingBlank>
            </div>
        )
    }
}
export default HomePage

