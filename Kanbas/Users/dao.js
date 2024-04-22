import model from "./model.js";

export const createUser = async(user) =>  {
  const newUser = await model.create(user);
    return model.create(user);
  }  
   
    

 
  export const findAllUsers = async() => {
    const documents = await model.find();
    console.log(`all users found in mongodb in dao.js: ${documents}`);
    //convert all _id to string type instead of some string some ObjectId.
    const transformedDocuments = documents.map(doc => {
        const document = doc.toObject(); // Convert Mongoose document to plain object
        document._id = document._id.toString(); // Convert ObjectId to string
        return document;
    });
    return transformedDocuments;

};
    
export const findUserById = async (userId) => await model.findById(userId);
    
export const findUserByUsername = async(username) => await model.findOne({ username: username });
    
export const findUserByCredentials = async (username, password) => await model.findOne({ username:username, password:password});
  
   
export const updateUser = async (userId, user) =>await model.updateOne({ _id: userId }, { $set: user });
      
 
export const deleteUser = async (userId) => await model.deleteOne({ _id: userId }); 
   
export const findUsersByRole = async (role) =>await model.find({role:role});