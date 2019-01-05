import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
import { signUp } from '../actions/authActions';
import { fetchState } from '../actions';
export class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
			email:'',
			name:'',
			lastname:'',
			phone:null,
			likedCategory : {
				electronik:true,
				other:true,
				mobile:true,
				furniture:true,
				car:true,
				fashion:true,
				bike:true,
				pet:true,
				toy:true,
				book:true,
				service:true,
				sports:true,
				garden:true
			},
			state_id:"1",
			city_id:"43",
			liked_category_id:"1"
        }
    }
    componentDidMount = () => {
		this.props.getCategories();
		this.props.fetchState();
    }
    
    handleSubmit = (e) => {
		e.preventDefault();
        console.log(this.state);
		//axios.post()
		console.log(this.state.likedCategory);
		this.props.signUp(this.state);
		
    }
    handleChange = (e) => {
		console.log(this.state);
        this.setState({
            [e.target.id] : (e.target.value)
        })
	}
	
	checkBoxChange = (e) => {
		var likedCategory = {...this.state.likedCategory}
		likedCategory[e.target.id] = !this.state.likedCategory[e.target.id]
		this.setState({
			likedCategory
		})
		console.log(this.state.likedCategory);

	}
  render() {
	  console.log(this.props)
    return (
            <div className="sign-in-wrapper">
				<div className="graphs">
					<div className="sign-up">
						<h1>Üyelik Oluştur</h1>
						<p className="creating">Ücretsiz bir şekilde kullanmadığınız Eşyaları başka eşyalarla takaslamak için üye olunuz</p>

						<h2>Kişisel Bilgiler</h2>

						<div className="sign-u">
							<div className="sign-up1">
								<h4>Email Address* :</h4>
							</div>
							<div className="sign-up2">
								<form>
									<input type="text" id="email" onChange={this.handleChange}/>
								</form>
							</div>
							<div className="clearfix"> </div>
						</div>

                        <div className="sign-u">
							<div className="sign-up1">
								<h4>Adınız :</h4>
							</div>
							<div className="sign-up2">
								<form>
									<input type="text" id="name" onChange={this.handleChange}/>
								</form>
							</div>
							<div className="clearfix"> </div>
						</div>

                        <div className="sign-u">
							<div className="sign-up1">
								<h4>SoyAdınız :</h4>
							</div>
							<div className="sign-up2">
								<form>
									<input type="text" id="lastname" onChange={this.handleChange}/>
								</form>
							</div>
							<div className="clearfix"> </div>
						</div>

						<div className="sign-u">
							<div className="sign-up1">
								<h4>Şifre :</h4>
							</div>
							<div className="sign-up2">
								<form>
									<input type="text" id="password" required=" " onChange={this.handleChange}/>
								</form>
							</div>
							<div className="clearfix"> </div>
						</div>

                        <div className="sign-u">
							<div className="sign-up1">
								<h4>Telefon :</h4>
							</div>
							<div className="sign-up2">
								<form>
									<input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange}/>
								</form>
								<span className="note">Başında Sıfır Olmadan Giriniz </span>
							</div>
							<div className="clearfix"> </div>
						</div>						

						<br />
						<h2>Adres Bilgileri</h2>

						<div className="sign-u">
							<div className="sign-up1">
								<h4>İl :</h4>
							</div>
							<div className="sign-up2">
								<form>
								<select className="show-tick form-control" id="il" onChange={this.handleChange}>
									<option>istanbul</option>
									<option>ankara</option>
									<option>Bursa</option>
									<option>Balıkesir</option>
									<option>Çanakkale</option>
									<option>Denver</option>
								</select>
								</form>
							</div>
							<div className="clearfix"> </div>
						</div>

						<div className="sign-u">
							<div className="sign-up1">
								<h4>İlçe :</h4>
							</div>
							<div className="sign-up2">
								<form>
								<select className="show-tick form-control" id="ilce" onChange={this.handleChange}>
									<option>Birmingham</option>
									<option>Anchorage</option>
									<option>Phoenix</option>
									<option>Little Rock</option>
									<option>Los Angeles</option>
									<option>Denver</option>
								</select>
								</form>
							</div>
							<div className="clearfix"> </div>
						</div>

						<br/>
						<h2>İlgini Çeken Kategoriler</h2>
						<div className="row">
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="electronik" type="checkbox" defaultChecked  onChange={this.checkBoxChange}/>Elektronik</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="mobile" type="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Telefon</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="furniture" type="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Ev Eşyası</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="car" type="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Araba</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="fashion" type="checkbox" name="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Kıyafet</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="bike" type="checkbox" name="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Bisiklet</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="pet" type="checkbox" name="checkbox" defaultChecked='false'onChange={this.checkBoxChange} />Evcil Hayvan</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="toy" type="checkbox" name="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Oyuncak & Hobi</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="book" type="checkbox" name="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Kitap</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="service" type="checkbox" name="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Hizmet</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="sports" type="checkbox" name="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Spor</label>
								</form>
							</div>
							<div className="col-md-4">
								<form>
									<label className="checkbox"><input id="garden" type="checkbox" name="checkbox" defaultChecked='false' onChange={this.checkBoxChange}/>Bitki & Bahçe</label>
								</form>
							</div>
						</div>
						<div className="sign-u">
							<div className="clearfix"> </div>
						</div>

						<div className="sub_home">
							<div className="sub_home_left">
								<button className="btn btn-success" onClick={this.handleSubmit}>Oluştur</button>
							</div>

							<div className="sub_home_right">
								<p>Geri Dön <Link to="/">Anasayfa</Link></p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
			</div>
    )
  }
}
const mapStateToProps = (state) => {
	return{
		categories:state.categories,
		states:state.loca
	}
}
function mapDispachToProps (dispatch) {
	return({
		fetchState: () => dispatch(fetchState()),
		signUp: (user) => dispatch(signUp(user)),
		getCategories: () => dispatch(fetchCategories())
	})
}
export default connect(mapStateToProps, mapDispachToProps)(SignUp);


