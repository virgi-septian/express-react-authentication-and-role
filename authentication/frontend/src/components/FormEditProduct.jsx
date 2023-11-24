import React from 'react'

const FormAddUser = () => {
  return (
    <div>
      <h1 className='title'>Products</h1>
      <h3 className='subtitle'>Update Product</h3>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" className='input' placeholder='Name' />
              </div>
            </div>

            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input type="number" className='input' placeholder='price' />
              </div>
            </div>

            <div className="field">
              <div className="control">

              <button className='button is-success'>Save</button>
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