import React, {useState} from 'react'


const AddUserForm = props => {

	const initState = {name:'',email:''}
	const [user, setUser] = useState(initState)


	const handleInputChanged = event => {
		const {name,value} = event.currentTarget
		setUser({...user,[name]:value})
	}


	const handleSubmit = event => {
		event.preventDefault()
		props.addUser(user)
		setUser(initState)
	}


	return(
		<div>
			<h3>add user</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name:</label>
					<input name="name" value={user.name} onChange={handleInputChanged} />
				</div>
				<div className="form-group">
					<label>Email:</label>
					<input name="email" value={user.email} onChange={handleInputChanged} />
				</div>
				<button className="btn btn-ok">Add User</button>
			</form>
		</div>

	)
}

export {AddUserForm}