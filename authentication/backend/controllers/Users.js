import User from'../models/UserModel.js';
import argon2 from 'argon2';

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where: {
                uuid: req.params.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createdUser = async(req, res) => {
    console.log(req.body);
    const {name, email, password, confPassword, role} = req.body;
    console.log(password);

    if(password !== confPassword) return res.status(400).json({msg: `password dan confirm password tidak cocok`});

    const hashPassword = await argon2.hash(password);

    try {
        await User.create({
            name: name,
            email: email,
            password: password,
            role: role,
        })
        res.status(201).json({mgs: `register berhasil`});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const updatedUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}