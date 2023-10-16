import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  updateUsername = e => {
    this.setState({username: e.target.value})
  }

  updatePassword = e => {
    this.setState({password: e.target.value})
  }

  onSuccessFullLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSuccessFullLogin()
      this.setState({error: '', username: '', password: ''})
    } else {
      this.setState({error: 'invalid details', username: '', password: ''})
    }
  }

  render() {
    const {username, password, error} = this.state
    console.log(username, password)
    return (
      <div className="main-login-container">
        <h1>Login</h1>
        <div>
          <img
            className="nxt-trends-text"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <br />
          <img
            className="website-logo"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
        </div>
        <form className="form-container" onSubmit={this.submitForm}>
          <label htmlFor="username">USERNAME</label>
          <input
            required
            placeholder="Username"
            onChange={this.updateUsername}
            type="text"
            id="username"
          />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <input
            required
            placeholder="Password"
            onChange={this.updatePassword}
            type="password"
            id="password"
          />
          <button type="submit">Login</button>
          <p>{error}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
