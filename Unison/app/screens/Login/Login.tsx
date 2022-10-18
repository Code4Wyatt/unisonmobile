import React from 'react'
import { Text } from 'react-native';
import { connect } from 'react-redux'

const Login = () => {
  return (
    <Text>Login</Text>
  )
}



const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)