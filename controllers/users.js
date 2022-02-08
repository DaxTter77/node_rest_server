const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    // res.send('Hello world!');
    const param = req.query;

    res.status(200).json({
        ok: true,
        msg: 'Get API - Controller'
    });
}

const usuarioPost = (req = request, res = response) => {

    const body = req.body;

    res.status(201).json({
        ok: true,
        msg: 'Post API - Controller',
        body
    });
}

const usuarioPut = (req = request, res = response) => {

    const { id }= req.params;

    res.status(200).json({
        ok: true,
        msg: 'Put API - Controller',
        id
    });
}

const usuarioPatch = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Patch API - Controller'
    });
}

const usuarioDelete = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Delete  API - Controller'
    });
}


module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}