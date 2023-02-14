// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  }

  sendToHomePage = () => {
    const {history} = this.props
    console.log(this.props)
    history.replace('/')
  }

  showErrorMsg = errorMsg => {
    this.setState({
      isError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    this.setState({
      username: '',
      password: '',
    })
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    console.log(response)
    if (response.ok === true) {
      this.sendToHomePage()
    } else {
      this.showErrorMsg(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
      isError: false,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
      isError: false,
    })
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="label-style" htmlFor="password">
          PASSWORD
        </label>
        <input
          placeholder="password"
          className="input-style"
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="label-style" htmlFor="username">
          USERNAME
        </label>
        <input
          placeholder="username"
          value={username}
          className="input-style"
          type="text"
          id="username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {isError, errorMsg} = this.state
    return (
      <div className="login-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />

        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="app-img"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {this.renderUsername()}
            {this.renderPassword()}
            <button type="submit" className="button">
              Login
            </button>
            <div>
              {isError ? <p className="error-msg">*{errorMsg}</p> : null}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
