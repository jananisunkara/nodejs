 var fs=require('fs')
 fs.readFile("./text.txt","utf8",function(err,data){
     if(err)
     console.log("error in reading file");
     else
     console.log(data);
 })
 var os=require('os')
 console.log(os.hostname());
 console.log(os.totalmem());
 var cowsay=require('cowsay')
 console.log(cowsay.say({text:"example text",e:"%%",T:"&&"}))
var calci=require('./calci')
 console.log(calci.add(8,5));
 console.log(calci.sub(8,5));
 console.log(calci.mul(8,5));
 calci.div(8,0,(err,result)=>{
     if(err)
     console.log(err);
     else
     console.log(result);

 });
    var book={title:"core java",author:"Herbert shield",price:500,publisher:"Tata Mcgrills"};
    var jsonbook=JSON.stringify(book);
    console.log(jsonbook);
    var bookobj=JSON.parse(jsonbook);
    for(ele in bookobj)
    console.log(ele+"."+bookobj[ele]);
  const chalk=require("chalk");
  console.log(chalk.green('Hello World!'));
  const log=console.log;
 //combine styled and normal strings
  log(chalk.green('Hello')+'World'+chalk.red('!'));
  //compose multiple styles using the chainable API
 log(chalk.green.bgred.bold('Hello World!'));
  //Pass in multiple arguments
  log(chalk.green('Hello','World!','Foo','bar','biz','baz'));
  //nest styles
  log(chalk.rede('Hello',chalk.underline.bgblue('World')+'!'));
  //Nest styles of the same type even(color,underline,background)
  log(chalk.green('I am a green line'+chalk.blue.underline.bold('with a blue substring')+'that becomes green again!'));
  //ES2015 template literal
  log('
  CPU: ${chalk.red(90%))
  log(chalk.rgb(123,45,67).underline('Underlined reddish colour'));
  log(chalk.hex('#DEADED').bold('Bold gray!'));
  const error=chalk.bold.red;
  const warning=chalk.hex('#FFA500');
  console.log(error('Error!'));
  console.log(warning('Warning!'));
  const name='Janani';
  console.log(chalk.green('Hello %s'),name);


