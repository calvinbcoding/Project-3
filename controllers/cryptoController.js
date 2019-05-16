const express = require('express');
const router  = express.Router();
const cryptoCurencies  = require('../models/bpiSchema');
const BPI    = require('../models/bpiSchema');


//Index
// Next we set up the Routere

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized

// Creating the index route
// index route should show all the fruits
 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all')
     try  {

      const allBPIs = await BPI.find();

      // This is the response to react
      res.json({
        status: 200,
        data: allBPIs
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    const createdBPI = await BPI.create(req.body);
    console.log('?')
    res.json({
      status: 200,
      data: createdBPI
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





router.get('/:id', async (req, res, next) => {


     try  {

        const foundBPI = await BPI.findById(req.params.id);
        res.json({
          status: 200,
          data: foundBPI
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedBPI = await BPI.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedBPI
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedBPI = await BPI.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedBPI
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
