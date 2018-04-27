import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Body, Text, Container, Content, Toast, Icon, Left, Right, Button, Title, Header, Picker, Form, Input } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      selected1: undefined,
      selected2: undefined,
      selected3: undefined
    };
  }

  btnIncrement() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }
  btnDecrement() {

    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }

  }

  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  onValueChange3(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 60, backgroundColor: '#E53935' }}>
          <View style={{ position: 'absolute', bottom: 0 }}>
            <Text style={{ color: 'white', fontSize: 18, padding: 10 }}><Icon style={{ color: "white" }} name="md-arrow-back" />    One Potato Two Potato (OPTP)</Text>
          </View>
        </View>
        <Container>
          <Content padder>
            <Text style={{ color: '#E53935', fontSize: 20, fontWeight: 'bold', paddingLeft: 12, paddingTop: 10 }}>Order Detail</Text>
            <Card>
              <CardItem bordered>
                <Left>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Chicken Tikka</Text>
                </Left>
                <Body>
                  <CardItem>
                    <View style={{ flexDirection: 'row' }}>
                      <Button small transparent onPress={() => this.btnDecrement()} ><Icon style={{ color: '#E53953' }} name='md-remove' /></Button>
                      <Text>{this.state.quantity}</Text>
                      <Button small transparent onPress={() => this.btnIncrement()} ><Icon style={{ color: 'green' }} name='md-add' /></Button>
                    </View>
                  </CardItem>
                </Body>
                <Right>
                  <CardItem style={{ marginRight: -35 }}>
                    <Text style={{ fontSize: 14 }}>RS 890</Text>
                    <Button small transparent><Icon style={{ color: 'red' }} name='md-close' /></Button>
                  </CardItem>
                </Right>
              </CardItem>
              <CardItem>
                <Text style={{ color: '#E53935', fontSize: 15, fontWeight: 'bold' }}>Sidelines</Text>
              </CardItem>
              <CardItem style={{ marginLeft: 8, marginTop: -14 }}>
                <Text style={{ fontSize: 14 }}>Nuggets</Text>
                <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }} >
                  <Text style={{ fontSize: 14 }}>RS 890</Text>
                  <Button small transparent><Icon style={{ color: 'red' }} name='md-close' /></Button>
                </View>
              </CardItem>

              <CardItem style={{ marginLeft: 8, marginTop: -13 }}>
                <Text style={{ fontSize: 14 }}>Coke</Text>
                <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }} >
                  <Text style={{ fontSize: 14 }}>RS 200</Text>
                  <Button small transparent><Icon style={{ color: 'red' }} name='md-close' /></Button>
                </View>
              </CardItem>

            </Card>

            <Card style={{ marginTop: -2 }}>

              <CardItem bordered style={{ marginLeft: 8 }}>
                <Body>
                  <Text style={{ fontSize: 14 }}>Delivery Charges</Text>
                  <Text style={{ fontSize: 14 }}>GST</Text>
                </Body>
                <Right>
                  <Text style={{ fontSize: 14 }}>RS 00 </Text>
                  <Text style={{ fontSize: 14 }}>RS 00 </Text>
                </Right>
              </CardItem>
              <CardItem bordered style={{ marginLeft: 8 }}>
                <Body>
                  <Text style={{ fontSize: 14 }}>Order Type</Text>
                  <Text style={{ fontSize: 14 }}>Payment Method</Text>
                </Body>
                <Right>
                  <Picker
                    mode="dropdown"
                    placeholderStyle={{ color: '#E53935', fontSize: 12 }}
                    style={{ width: 120, height: 18, marginTop: -7, marginRight: -20 }}
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange1.bind(this)}
                  >
                    <Picker.Item label="Dine In" value="key0" />
                    <Picker.Item label="Delivery" value="key1" />
                    <Picker.Item label="Take Away" value="key2" />
                  </Picker>

                  <Picker
                    mode="dropdown"
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#E53935", fontSize: 12 }}
                    style={{ width: 120, height: 18, marginTop: 2, marginRight: -20 }}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Cash" value="key0" />
                    <Picker.Item label="Credit Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                  </Picker>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>SubTotal</Text>
                    <Button small transparent style={{ marginLeft: -15, marginTop: -4 }}><Text style={{ fontSize: 10, color: '#E35935' }}>Want to Redeem points?</Text></Button>
                  </Body>
                </Left>
                <Right>
                  <Text style={{ fontWeight: 'bold', marginTop: -23 }}>RS 1880</Text>
                </Right>
              </CardItem>
              <CardItem style={{ marginTop: -8 }}>
                <Text style={{ color: '#E53935', fontSize: 14, fontWeight: 'bold' }}>Special Instruction</Text>
                <Text style={{ color: '#9199a5', fontSize: 14 }}> (Optional)</Text>
              </CardItem>
              <CardItem>
                <Input style={{ backgroundColor: "#F5F5F5", height: 38, fontSize: 15, marginTop: -15 }} placeholder="Click to Add" placeholderTextColor="#9199a5"></Input>
              </CardItem>
            </Card>
            <Text style={{ color: '#E53935', fontSize: 20, fontWeight: 'bold', paddingLeft: 12, paddingTop: 10 }}>Contact Detail</Text>
            <Card>
              <CardItem style={{ marginLeft: 8, marginTop: 0 }}>
                <Text style={{ fontSize: 14 }}>Name</Text>
                <View style={{ flexDirection: 'row', position: 'absolute', right: 15 }} >
                  <Text style={{ fontSize: 14 }}>Ricky Ponting</Text>
                </View>
              </CardItem>

              <CardItem style={{ marginLeft: 8, marginTop: -10 }}>
                <Text style={{ fontSize: 14 }}>Contact</Text>
                <View style={{ flexDirection: 'row', position: 'absolute', right: 15 }} >
                  <Text style={{ fontSize: 14 }}>03330303000</Text>
                </View>
              </CardItem>

              <CardItem style={{ marginLeft: 8, marginTop: -10 }}>
                <Text style={{ fontSize: 14 }}>Address</Text>
                <View style={{ flexDirection: 'row', position: 'absolute', right: 15 }} >
                <Button small transparent ><Icon style={{ color: 'green' }} name='md-add' /></Button>
                  <Picker
                    mode="dropdown"
                    placeholderStyle={{ fontSize: 12 }}
                    style={{ width: 115, height: 18, marginTop: 0, marginRight: -20 }}
                    selectedValue={this.state.selected3}
                    onValueChange={this.onValueChange3.bind(this)}
                  >
                    <Picker.Item label="Home" value="key0" />
                  </Picker>                  
                </View>
              </CardItem>

            </Card>
            <Button full style={{ marginTop: 5, backgroundColor: "#E53935" }}><Icon style={{ marginLeft: 10 }} name="md-exit" /><Text style={{ marginLeft: -10 }}>Place Order</Text><Text style={{ marginLeft: 90 }}>RS 1880</Text></Button>
            <Text style={{ marginTop: 2, fontSize: 10, alignSelf: 'center' }}>By placing the order with Fikifoo, you agree to our Terms & Conditions!</Text>
          </Content>
        </Container>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
