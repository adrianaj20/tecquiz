const router = require('express').Router()
const conexion = require('./config/conexion')

//API PREGUNTAS
router.get('/',(req, res)=>{
    let sql = 'select * from temas'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql = 'select * from temas where id_tema = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.post('/', (req, res)=>{
    const{nombre, pregunta, respuesta, quest_u, quest_d, quest_t} = req.body
    let sql= `INSERT INTO temas(nombre, pregunta, respuesta, quest_u, quest_d, quest_t)
    VALUES ('${nombre}', '${pregunta}', '${respuesta}','${quest_u}','${quest_d}','${quest_t}');
    `
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pregunta agregada'})
        }
    })
})

router.delete('/:id',(req, res)=>{
    const{id}=req.params
    let sql = `delete from temas where id_tema = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pregunta eliminada'})
        }
    })
})

router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, pregunta, respuesta, quest_u, quest_d, quest_t} = req.body

    let sql = `update temas set nombre = '${nombre}', pregunta = '${pregunta}', respuesta = '${respuesta}', quest_u = '${quest_u}', quest_d = '${quest_d}', quest_t = '${quest_t}' where id_tema = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pregunta modificada'})
        }
    })
})

module.exports = router;