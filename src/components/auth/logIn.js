import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login } from "../actions/authActions";
class logIn extends React.Component {

  // componentDidMount = () => {
  //   var headers = {
  //     "Content-Type": "application/json",
  //     "X-Requested-With": "XMLHttpRequest"
  //   };
  //   axios.post('http://localhost:8000/api/auth/login',this.state,{headers:headers}).then((res)=>
  //   console.log(res.data)).catch(err=>console.log(err))
  // }
  onSubmit = formProps => {
    this.props.login(formProps, () => {
      this.props.history.push('/auth/MyProfile');
    });
  }
  render() {
    const { handleSubmit } =this.props;
    console.log(this.props);
    return (
      <div className="graphs">
        <div className="sign-in-form">
          <div className="sign-in-form-top">
            <h1>Giriş</h1>
          </div>
          <div className="signin">
            <div className="signin-rit">
              <span className="checkbox1">
                <label className="checkbox">Şifremi Unuttum</label>
              </span>
              <p>
                <a href="/">Tıkla</a>
              </p>
              <div className="clearfix"> </div>
            </div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="log-input">
                <div className="log-input-left">
                  <label htmlFor="firstName">Email</label>
                  <Field name="email" component="input" type="text" />
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="log-input">
                <div className="log-input-left">
                  <label htmlFor="Password">Password</label>
                  <Field name="password" component="input" type="password" />
                </div>
                <div className="clearfix"> </div>
              </div>
              <button> Login</button>
            </form>
          </div>
          <div className="new_people">
            <h2>Yeni Üyelik</h2>
            <p>
              Eğer üye olmadıysanız, Sizde takaslamaya başlamak için üye
              olabilirsiniz
            </p>
            <Link to="/auth/Register">Üye Ol</Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return({
    auth:state.auth
  })
}

const mapDispatchToProps = dispatch => {
  return {
    login: formProps => dispatch(login(formProps))
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "loginForm"
  })
)(logIn);

/*
 <form>
              <div className="log-input">
                <div className="log-input-left">
                  <input
                    type="text"
                    className="user"
                    value="Your Email"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Your Email';}"
                  />
                </div>
                <span className="checkbox2">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" checked="" />
                    <i> </i>
                  </label>
                </span>
                <div className="clearfix"> </div>
              </div>
              <div className="log-input">
                <div className="log-input-left">
                  <input
                    type="password"
                    className="lock"
                    value="password"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Email address:';}"
                  />
                </div>
                <span className="checkbox2">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" checked="" />
                    <i> </i>
                  </label>
                </span>
                <div className="clearfix"> </div>
              </div>
              <input type="submit" value="Log in" />
            </form>
*/
