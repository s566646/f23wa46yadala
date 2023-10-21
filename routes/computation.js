var express = require('express');
var router = express.Router();

/* GET home page. */

let x;
let y;
router.get('/', function(req, res, next) {
  
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let y1=Math.log2(x,y);
let y2=Math.cosh(y);
let y3=Math.cbrt(x);
  res.send('Math.log2() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.cosh() applied to '+y+' is '+y2+"<br>"+'Math.cbrt()  applied to '+x+' is'+y3); 

}
else{

  x = req.query.x;
  let y1=Math.log2(x,x);
  let y2=Math.cosh(x);
  let y3=Math.cbrt(x);

  res.send('Math.log2() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.cosh() applied to '+y+' is '+y2+"<br>"+'Math.cbrt()  applied to '+x+' is'+y3);
}


  //res.send('Math.cosh() applied to '+x+' is'+y2);
  //res.send('Math.cbrt() applied to ${x} is'+y3);
});

module.exports = router;