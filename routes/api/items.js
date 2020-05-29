const express = require("express");
const router = express.Router();
const Items = require("../../models/Item")

const validateItemInput = require("../../validation/item");

router.get("/item", (req, res)=>{
    Items.find({})
      .then(item => {
        res.send(item);
      });
  });

router.post("/item", (req,res) => {
    const { errors, isValid } = validateItemInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
      }

      Items.findOne({ title: req.body.title }).then(item => {
        if (item) {
          return res.status(400).json({ title: "Title already exists" });
        } else {
          const newItem = new Items({
            title: req.body.title,
            author: req.body.author,
            department: req.body.department,
            price: req.body.price
          });

          newItem
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
}});
})

router.put("/item/:id", (req,res) => {
    Items.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(()=>{
        Items.findOne({_id:req.params.id})
            .then(item => {
                res.send(item);
            })
    })
})

router.delete("/item/:id", (req,res) => {
    Items.deleteOne({_id:req.params.id})
    .then(item=>{
        res.send(item);
    })
})


module.exports = router;