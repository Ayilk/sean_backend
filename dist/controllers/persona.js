"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const getPersonas = (req, res) => {
    try {
        res.json({ msg: "Get personas" });
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    res.json({ msg: "Get personas", id: id });
};
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    res.json({ msg: "Delete personas", id: id });
};
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    console.log(req.body);
    const { body } = req;
    res.json({ msg: "Creación de  personas", body });
};
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    console.log(req.body);
    const { body } = req;
    const { id } = req.params;
    res.json({ msg: "Actualización de  personas", body });
};
exports.putPersona = putPersona;
