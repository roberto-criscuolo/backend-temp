import climaModel from "../../models/climaModel.js"

const remove = async (req, res) => {
    try{
        const id = +req.params.id

       
        const result = await climaModel.remove(+id)
        res.json({
            success: `Registro Clima ${id} apagado com sucesso!`,
            clima: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove