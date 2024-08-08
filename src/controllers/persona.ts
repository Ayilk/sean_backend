import { Request, Response } from 'express';

export const getPersonas = (req: Request, res: Response) => {
    try {
        res.json({msg: "Get personas"})
        
    } catch (error) {
        console.log("Error", error)
    }
}

export const getPersona = (req: Request, res: Response) => {
    console.log(req.params.id);
    const { id } = req.params;
    res.json({msg: "Get personas", id: id});
}

export const deletePersona = (req: Request, res: Response) => {
    console.log(req.params.id);
    const { id } = req.params;
    res.json({msg: "Delete personas", id: id});
}

export const postPersona = (req: Request, res: Response) => {
    console.log(req.body);
    const { body } = req;
    res.json({msg: "Creación de  personas", body});
}

export const putPersona = (req: Request, res: Response) => {
    console.log(req.body);
    const { body } = req;
    const { id } = req.params;
    res.json({msg: "Actualización de  personas", body});
}