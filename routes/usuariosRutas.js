import { Router } from "express";
import { deleteId, login, register, show, showId, updateId } from "../db/usuariosDB.js";
import { log } from "console";
const router = Router();

router.post("/registro", async (req, res) => {
    const respuesta = await register(req.body);
    console.log(respuesta.mensajeOriginal);
    res.cookie("token", respuesta.token).status(respuesta.status).json(respuesta.mensajeUsuario);
});

router.post("/login", async (req, res) => {
    const respuesta = await login(req.body);
    console.log(respuesta.mensajeOriginal);
    res.cookie("token", respuesta.token).status(respuesta.status).json(respuesta.mensajeUsuario);
});

router.get("/show", async (req, res) => {
    const respuesta = await show();
    console.log(respuesta.mensajeOriginal);
    res.status(respuesta.status).json({
        mensaje: respuesta.mensajeUsuario,
        datos: respuesta.datos || null,  // Si hay datos, se devuelven; si no, se pasa null.
    });
});

router.get("/showId", async (req, res) => {
    const respuesta = await showId(req.body);
    console.log(respuesta.mensajeOriginal);
    res.status(respuesta.status).json({
        mensaje: respuesta.mensajeUsuario,
        datos: respuesta.datos || null,  // Si hay datos, se devuelven; si no, se pasa null.
    });
});

router.delete("/deleteId", async (req, res) => {
    const respuesta = await deleteId(req.body);
    console.log(respuesta.mensajeOriginal);
    res.status(respuesta.status).json({
        mensaje: respuesta.mensajeUsuario
    });
});

router.patch("/updateId", async (req, res) => {
    const respuesta = await updateId(req.body);
    console.log(respuesta.mensajeOriginal);
    res.status(respuesta.status).json({
        mensaje: respuesta.mensajeUsuario
    });
});

router.get("/salir", async (req, res) => {
    res.json("Estas en salir");
});

router.get("/usuariosLogueados", async (req, res) => {
    res.json("Usuarios convencionales y administradores logueados");
});

router.get("/administradores", async (req, res) => {
    res.json("Solo administradores logueados");
});

router.get("/cualquierUsuario", async (req, res) => {
    res.json("Todos pueden usar sin loguearse");
});

export default router;