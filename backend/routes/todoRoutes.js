const express=require('express')



router.get(),async(req,res)=>{
    const todos=await find()
};

router.post('/addnew'),async()=>{
    const todos=await find(req,res)
    console.log('data added successfully');
    
};
router.put('/edit'),async()=>{
    const todos=await findbyId(req.body)
   console.log('data edited successfully')
};
router.delete('/delete'),async()=>{
const todos=await findbyId(req.body)
console.log('data deleted successfully')
}