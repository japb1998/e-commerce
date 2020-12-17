const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const category = await Category.findAll({
    include: {model:Product}
  });

  return res.status(200).json(category)
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id,{include:{model:Product}}).then((category)=>{

    res.status(200).json(category);
  })
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new catery
  const newCat=  await Category.create({
    category_name: req.body.category_name
  })
    return res.json(newCat)
 
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const upCat = await Category.update({
    category_name: req.body.category_name
  },{
    where:{
      id: req.params.id
    }
  })
  return res.json(
    {
id:req.params.id,
category_name: req.body.category_name
  })
});



router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
const delCat = await Category.destroy({where:{ id: req.params.id} });


return res.send(`Category destroyed ID:${req.params.id}`)


});

module.exports = router;
