import React from 'react';
import * as Native from 'react-native';
import styled from 'styled-components'
import TextInputMask from 'react-native-text-input-mask'
import { Component } from 'react';

const Layout = {
  Container: styled.View`
    align-items: center;
    justify-content: center;
    padding: 5%;
    height: 100%;
    width: 100%;
  `,
  Card: styled.View`
    elevation: 5;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  `
}

const Formulary = {
  Container: styled.View`
    padding: 5%;
  `,
  Field: styled.View`
    background-color: white;
    border-radius: 5px;
    padding: 2.5%;
  `,
  Title: styled.Text`
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 5%;
  `,
  Label: styled.Text`
    font-weight: bold;
    padding-bottom: 2.5%;
  `,
  Value: styled.Text`
    padding-top: 2.5%;
    padding-bottom: 2.5%;
  `,
  TextInput: styled.TextInput`
    background-color: white;
    elevation: 5;
    border-radius: 5px;
    padding: 2.5%;
  `,
  TextInputMask: styled(TextInputMask)`
    background-color: white;
    elevation: 5;
    border-radius: 5px;
    padding: 2.5%;
  `
}

const Button = {
  Container: styled.TouchableOpacity`
    background-color: cornflowerblue;
    width: 100%;
    padding: 2.5%;
    align-items: center;
    justify-content: center;
  `,
  Label: styled.Text`
    color: white;
    font-weight: bold;
  `,
}

class PayTicket extends Component{
    constructor(props) {
        super(props);
  const [values, setValues] = React.useState({})}
  onChange(field) {
    return function onChangeField(value) {
      setValues(actualValues => ({
        ...actualValues,
        [field.slug]: value
      }))
    }
  }
  RenderField(field) {
    const Input = field.props && field.props.mask !== undefined
      ? Formulary.TextInputMask
      : Formulary.TextInput
    return (
      <Formulary.Field key={field.slug}>
        <Formulary.Label>
          {field.label}
        </Formulary.Label>
        <Input
          onChangeText={onChange(field)}
          defaultValue={values[field.slug]}
          placeholder="Insert value here"
          {...field.props}
        />
        <Formulary.Value>
          Value: {values[field.slug] || 'Empty!'}
        </Formulary.Value>
      </Formulary.Field>
    )
  }
  render(){
  return (
    <Native.KeyboardAvoidingView behavior="padding">
      <Native.StatusBar hidden />
      <Native.ScrollView>
        <Layout.Container>
          <Layout.Card>
            <Formulary.Container>
              <Formulary.Title>
                Formulary Example
              </Formulary.Title>
              {Form.map(RenderField)}
            </Formulary.Container>
            <Button.Container>
              <Button.Label>
                Submit
              </Button.Label>
            </Button.Container>
          </Layout.Card>
        </Layout.Container>
      </Native.ScrollView>
    </Native.KeyboardAvoidingView>
  );}
}
export default PayTicket;