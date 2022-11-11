import Product from "../models/ProductModel.js";
import Users from "../models/UserModel.js";


export const getProduct = async(req, res) => {
    try {
        let response;
        if (req.role === 'admin') {
            response = await Product.findAll({
                include: [{
                    model: Users
                }]
            });
        } else {
            response = await Product.findAll({
                where: {
                    userId: req.userId
                },
                include: [{
                    model: Users
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductId = (req, res) => {

}
export const addProduct = (req, res) => {

}
export const updateProduct = (req, res) => {

}
export const deleteProduct = (req, res) => {

}



