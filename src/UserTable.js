import React from 'react'

const UserTable = props => {
		

	const clickDeleteHandle = uid => {
		console.log('deete', uid)
		props.deleteUser(uid)
	}

	const clickEditHandle = user => {
		props.editUser(user)
		//props.setEditRegim(true)
	
	}

	

	return(
	<div>
		<h3>users</h3>
		<table>
			<thead>
			<tr>
				<th>#</th>
				<th>name</th>
				<th>email</th>
				<th>action</th>
			</tr>
			</thead>
			<tbody>
			{
				(props.users.length > 0)? props.users.map(user => 
			<tr key={user.id}>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>
					<button className="btn" onClick={()=> props.editUser(user)}>Edit</button>
					<button className="btn" onClick={()=> clickDeleteHandle(user.id)}>Delete</button>
				</td>
			</tr>)
			:<tr>
				<td colSpan="4">no users</td>
			</tr>
			}
			</tbody>

		</table>
	</div>
	)
}

export {UserTable}