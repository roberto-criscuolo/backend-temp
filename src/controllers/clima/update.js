import climaModel from "../../models/climaModel.js"

const update = async (req, res) => {
    try {
        const clima = req.body
        clima.id = +req.params.id

        const result = climaModel.validateClimaToUpdate(clima)
        if (!result.success) {
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }
        const climaEdited = await climaModel.edit(clima)
        res.json({
            success: `Registro Clima ${climaEdited.id} editado com sucesso!`,
            clima: climaEdited
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update