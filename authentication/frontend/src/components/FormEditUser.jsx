import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() =>{
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if(error.response){
          setMsg(error.response.data.msg);
        }
      }
    }

    getUserById();
  }, [id])

  const updateUsers =  async(e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`,{
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });

      navigate('/users')
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  } 
  return (
    <div>
      <h1 className='title'>Users</h1>
      <h3 className='subtitle'>Update User</h3>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form onSubmit={updateUsers}>
            <p className='has-text-centered'>{msg}</p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" className='input' value={name} onChange={(e) => setName(e.target.value)}  placeholder='Name' />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='input' placeholder='Email' />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='****' />
              </div>
            </div>

            <div className="field">
              <label className="label">Confirmation Password</label>
              <div className="control">
                <input type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} className='input' placeholder='****' />
              </div>
            </div>

            <div className="field">
              <label className="label">Role</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">

              <button type='sumbit' className='button is-success'>Save</button>
              </div>
            </div>
            
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditUser