var nd=require('needle')
var url="https://en.wikipedia.org/wiki/Music"
nd.get(url,(err,response,body) => {
    if(err)
    console.log(err)
    else
    console.log(body)
})