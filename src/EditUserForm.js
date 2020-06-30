import React, {useState, useEffect} from 'react' 

const EditUserForm = props => {
	const [user, setUser] = useState(props.user)
	
	useEffect(()=>{setUser(props.user)},[props]) 

	const handleInputChange = event => {
		const {name, value} = event.currentTarget
        setUser({...user,[name]:value})
	}

	const updateUser = event => {
		event.preventDefault()
		props.updateUser(user)
	}


	return(
		<div>

		<form onSubmit={updateUser}>
			<div>
				<label>Name:</label>
				<input value={user.name} name="name" onChange={handleInputChange}  />
			</div>
			<div>
				<label>Email:</label>
				<input value={user.email} name="email" onChange={handleInputChange} />
			</div>
			<button className="btn btn-ok" type="submit">Update</button>
	
			<button className="btn btn-ok" onClick={() => props.cancelEdit()}>Cancel</button>
		</form>

		</div>
	)
}

export {EditUserForm}