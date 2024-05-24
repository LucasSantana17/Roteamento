import express from 'express';
import cors from 'cors'; 
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const routs = express.Router();

app.use(cors());
app.use(routs);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'view')));

routs.get('/teste', (req, res) => { 
    res.status(200).json({msg:'Deus é maravilhoso!!!'})
});

routs.get('/inicio', (req, res) => {
    const filePath = path.join(__dirname,'./view/index.html');

    res.sendFile(filePath, 'utf-8', (err) => { 
        if(err){ 
            res.status(500).send({msg:'erro ao carregar pagina'});
            console.log(err)
        }
            
    });
});

export default app;