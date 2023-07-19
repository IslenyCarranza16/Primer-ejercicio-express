console.log('hola mundo') // prueba que todo ok

//LLAMAR EXPRESS
const express = require('express');
const morgan = require('morgan');



const app = express();
app.use('/api/movie/expoferia',express.static('public'));

app.use(morgan('common'));
// CONFIGUAR LA PANTALLA DE INICIO para prueba

app.get('/', function(req,res){  
    res.send('PAGINA PRINCIPAL prueba')
})
// para home
app.get('/home', function(req,res){  
    res.send('<h1>Bienvenido al mejor sitio de películas en la región</h1>')
})

app.get('/api/movie', function(req,res){  
    res.send('EL CATÁLOGO DE PELÍCULAS AÚN ESTÁ EN CONSTRUCCIÓN.')
})

app.get('/api/cines', function(req,res){  
    res.send('EL CATÁLOGO DE CINES AÚN ESTÁ EN CONSTRUCCIÓN.')
})


app.get('/api/movie/expoferia', function(req,res, next){  
    res.send(`<h1>GRAN ESTRENO DE LA NUEVA TEMPORADA DE BETTY LA FEA</h1>
    <img src="./imagen.jpg">`);
    
})




//INICIAR SERVIDOR PARA SABER DONDE VA
const port = 3000;
app.listen(port,()=>{
    console.log('SERVIDOR EN EJECUCION EN: ' + `http://localhost:${port}`)
})