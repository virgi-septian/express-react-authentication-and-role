import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() =>{
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        if(error.response){
          setMsg(error.response.data.msg);
        }
      }
    }
    getProductById();
  }, [id])
  
  const updateProducts =  async(e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`,{
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
      <h3 className='subtitle'>Update Product</h3>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form onSubmit={updateProducts}>
            <p className='has-text-centered'>{msg}</p>
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