const post = (model) => async(req,res)=>{
    try {
   
       const items= await model.create(req.body);
       return res.status(201).send(items)
        
    } catch (err) {
        return res.status(500).send(err.message);
    }
   };
   
   
   const getAll = (model) => async(req,res)=>{
       try {
      
          const items= await model.find().lean().exec();
   
          return res.status(201).send(items)
           
       } catch (err) {
           return res.status(500).send(err.message);
       }
   };
   
   const getOne = (model) => async(req,res)=>{
       try {
      
          const items= await model.findById(req.params.id).lean().exec();
   
          return res.status(201).send(items)
           
       } catch (err) {
           return res.status(500).send(err.message);
       }
   };
   
   const updateOne = (model) => async(req,res)=>{
       try {
      
          const items= await model.findByIdAndUpadte(req.params.id, req.body ,{new:true}).lean().exec();
   
          return res.status(201).send(items)
           
       } catch (err) {
           return res.status(500).send(err.message);
       }
   };
   
   const deleteOne = (model) => async(req,res)=>{
       try {
      
          const items= await model.findByIdAndDelete(req.params.id).lean().exec();
   
          return res.status(201).send(items)
           
       } catch (err) {
           return res.status(500).send(err.message);
       }
   };
   
   
   module.exports=(model)=>{
       return {
           post:post(model),
           getAll: getAll(model),
           getOne: getOne(model),
           updateOne:updateOne(model),
           deleteOne:deleteOne(model)
       }
   };