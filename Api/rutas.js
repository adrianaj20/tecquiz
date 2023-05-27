const router = require('express').Router()
const conexion = require('./config/conexion')

router.get('/',(req, res)=>{
    let sql = 'select * from usuarios'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql = 'select * from usuarios where id_usuario = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.post('/', (req, res)=>{
    const{nombre, correo, contraseña} = req.body
    let sql= `INSERT INTO usuarios(nombre,correo,contraseña) VALUES ('${nombre}','${correo}','${contraseña}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario agregado'})
        }
    })
})

router.delete('/:id',(req, res)=>{
    const{id}=req.params
    let sql = `delete from usuarios where id_usuario = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario eliminado'})
        }
    })
})

router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, correo} = req.body

    let sql = `update usuarios set nombre = '${nombre}', correo = '${correo}' where id_usuario = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario modificado'})
        }
    })
})



module.exports = router;