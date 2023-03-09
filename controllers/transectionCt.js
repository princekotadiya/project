const transectionModel = require("../models/transectionModel")

const getAllTransection = async (req,res) => {
   try{
    const transection = await transectionModel.find({userid:req.body.userid});
        res.status(200).json( transection );

   } catch (error) {
    console.log(error);
    res.status(500).json(error);
   }
};

const AddTransection = async(req,res) => {
    try{
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send('Transection Created');

    }catch (error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {getAllTransection,AddTransection}