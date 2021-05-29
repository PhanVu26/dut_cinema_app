import React,{ Component } from 'react';
import {Container, Content, Text, Form, Item, Label, Input, Button, View} from 'native-base';

class PayTicket extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Container >
              <Content padder >
                <Form style = {{color:'black',paddingTop:10}}>
                  <Item stackedLabel>
                    <Label style = {{color:'black'}}>Họ tên chủ tài khoản</Label>
                    <Input
                      type="text"
                      autoCapitalize="none"
                    />
                  </Item>
                  <Item stackedLabel>
                    <Label style = {{color:'black'}}>Số tài khoản</Label>
                    <Input
                      type="text"
                      autoCapitalize="none"
                    />
                  </Item>
                  <Item stackedLabel>
                    <Label style = {{color:'black'}}>Số tiền thanh toán</Label>
                    <Input
                      type="text"
                      autoCapitalize="none"
                      disabled ='true'
                    />
                  </Item>
                  <View style={{ flex: 1, height: 20 }} />
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flex: 0.2
                  }}>
                  <Button style={{ paddingLeft:10}}>
                    <Text>đặt</Text>
                  </Button>
                  <Button style={{ paddingLeft:10}}>
                    <Text>mua</Text>
                  </Button>
                  <Button style={{ paddingLeft:10}}>
                    <Text>Hủy</Text>
                  </Button>
                  </View>
                </Form>
              </Content>
            </Container>
        );
    }
};
export default PayTicket;