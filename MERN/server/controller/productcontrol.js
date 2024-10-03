const Product = require('../models/products.js');

const getProducts = async  (req,res)=>{
        try {
            const products = await Product.find({});
            res.status(200).json(products);
            
         } catch (error) {
            res.status(500).json({message:error.message})
         }
};
const getProduct = async  (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
     } catch (error) {
        res.status(500).json({message:error.message})
     }
};

const createproduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({message:error.message});
      }
}

const updateproduct = async(req,res)=>{
    try {
        const { id } = req.params;
        
        // Update the product and return the updated document
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,        // Return the updated product
            runValidators: true // Validate the updates
        });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteproduct = async(req,res)=>{
    try {
        const { id } = req.params;
        
        // Update the product and return the updated document
        const DeleteProduct = await Product.findByIdAndDelete(id, req.body, {
            new: true,        // Return the updated product
            runValidators: true // Validate the updates
        });

        if (!DeleteProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({message:"Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={
    getProducts,
    getProduct,
    createproduct,
    updateproduct,deleteproduct,
}