const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({include:{model:Product}}).then((tag)=>{
    res.json(tag);
  })
  // be sure to include its associated Product data
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
const findTag = await Tag.findByPk(req.params.id,{include:{model:Product}})

return res.json(findTag)
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  const {tag_name} = req.body;
  Tag.create({tag_name}).then((created)=>{
    res.json(created);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({tag_name : req.body.tag_name},{where:{ id: req.params.id}}).then((update)=>{
res.json(update)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{
    id: req.params.id
  }}).then(()=>{
   res.send('item destroyed')
  }).catch((err)=>{
    if (err) console.error(err)
  })
});

module.exports = router;
