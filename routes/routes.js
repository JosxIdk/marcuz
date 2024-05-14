const { Router } = require("express");
const router = Router();
const fs = require('fs')
const dayjs = require('dayjs')

router.get("/", async (req, res, next) => {
  res.render('index');
});


module.exports = router;