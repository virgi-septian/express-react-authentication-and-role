import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const saveProducts =  async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products',{
        name: name,
        price: price,
      });

      navigate('/products')
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  } 
  return (
    <div>
      <h1 className='title'>Products</h1>
      <h3 className='subtitle'>Add New Product</h3>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form onSubmit={saveProducts}>
            <p className='has-text-center'>{msg}</p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input' placeholder='Name' />
              </div>
            </div>

            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='input' placeholder='price' />
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

export default FormAddUser