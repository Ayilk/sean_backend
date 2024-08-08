import express from 'express';
import routesPersonas from '../routes/persona';


class Server {
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '5000';
        //El middeware se llama antes del routeo
        this.middlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto ", this.port)
        })
    }

    middlewares(){
        //parseo del body
        this.app.use(express.json)
    }

    routes(){
        this.app.use('/api/personas', routesPersonas);
    }
    
}

export default Server;