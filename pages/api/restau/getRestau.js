import connectToDatabase from '../../../lib/mongodb';
import Restaurant from '../../../lib/models/restaurant';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log('get paticula restau');

   let id=req.body.id;
    if(id){
      try{
        await connectToDatabase();
        Restaurant.findById(id).then(
          result=>{
            console.log(result)
            res.status(200).send(result)
          }
        )
      }
      catch(e){
        console.log(e);
        res.status(500).send(e)
      }
    }
    else{
      res.send({})
    }
   
  }
  