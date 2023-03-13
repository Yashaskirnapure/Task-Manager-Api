const asyncWrapper = (func) => {
    return async (req, res, handle) => {
        try{
            await func(req, res, handle);
        }catch(err){
            handle(err);
        }
   }
}
module.exports = {asyncWrapper};