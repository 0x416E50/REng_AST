const express=require('express');
const router=express.Router();
const {createRule}=require('../controllers/createRule')
const {combineRules}=require('../controllers/combineRule')
const {evaluateRule}=require('../controllers/evaluateRule');
const getAllRules = require('../controllers/rules');


router.post('/create',createRule);  //createRule
router.post('/combine_rules',combineRules); //combineRule
router.post('/eval',evaluateRule);  //evaluateRule
router.get('/getRules',getAllRules) //getAllRules

module.exports=router