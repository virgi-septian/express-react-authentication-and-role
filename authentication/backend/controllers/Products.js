import Product from'../models/ProductModel.js';
import User from '../models/UserModel.js';
import { Op } from 'sequelize';

export const getProducts = async(req, res) => {
  try {
    let response;
    if(req.role === 'admin'){
      response = await Product.findAll({
        attributes: ['uuid', 'name', 'price'],
        include: [{
          model: User,
          attributes: ['name', 'email'],
        }]
      });
    }else{
      response = await Product.findAll({
        attributes: ['uuid', 'name', 'price'],
        where: {
          userId: req.userId
        },
        include: [{
          model: User,
          attributes: ['name', 'email'],
        }]
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({msg: error.message});
  }
}

export const getProductById = async(req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id
      }
    })

    if(!product) res.status(404).json({msg: `Data tidak ditemukan`})


    let response;
    if(req.role === 'admin'){
      response = await Product.findOne({
        attributes: ['uuid', 'name', 'price'],
        where: {
          id: product.id
        },
        include: [{
          model: User,
          attributes: ['name', 'email'],
        }]
      });
    }else{
      response = await Product.findOne({
        attributes: ['uuid', 'name', 'price'],
        where: {
          [Op.and] : [
            {id : product.id},
            {userId: req.userId}
          ],
        },
        include: [{
          model: User,
          attributes: ['name', 'email'],
        }]
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({msg: error.message});
  }
}

export const createdProduct = async(req, res) => {
  const {name, price} = req.body;
  try {
    await Product.create({
      name: name,
      price: price,
      userId: req.userId,
    })    
    res.status(201).json({msg: `Product created`})
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}

export const updatedProduct = async(req, res) => {
  
  const product = await Product.findOne({
    where: {
      uuid: req.params.id
    }
  })

  if(!product) res.status(404).json({msg: `Data tidak ditemukan`});
  
  const {name, price} = req.body;
  
  try { 
    if(req.role === 'admin'){
      await Product.update(
        {
          name: name,
          price: price,
        },
        {
          where:{
            [Op.and] : [
              {id : product.id},
            ],
          }
        }
      );
    }else{
      await Product.update(
        {
          name: name,
          price: price,
        },
        {
          where:{
            [Op.and] : [
              {id : product.id},
              {userId: req.userId},
            ],
          }
        }
      );
    } 
    res.status(200).json({msg: 'Data updated !'});
    console.log(req.uuid);
  } catch (error) {
    res.status(500).json({msg:error.message})
  }

}

export const deleteProduct = async(req, res) => {
  const product = await Product.findOne({
    where:{
      uuid: req.params.id
    }
  });

  console.log(req.role);
  if(!product) res.status(404).json({msg: 'Data tidak ditemukan !'});
  try {
    if(req.role === 'admin'){
      await Product.destroy(
        {
          where:{
            id : product.id,
          }
        }
      );
    }else{
      await Product.destroy(
        {
          where:{
            [Op.and] : [
              {id : product.id},
              {userId: req.userId}
            ],
          }
        }
      );
    } 
    res.status(200).json({msg: 'Data deleted !'})
  } catch (error) {
    res.status(500),json({msg: error.message});
  }
}  