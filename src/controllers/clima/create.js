import climaModel from "../../models/climaModel.js"
import zodErrorFormat from "../../helpers/zodErrorFormat.js"


const create = async (req, res) => {
    try{
        const clima = req.body
        const result = climaModel.validateClimaToCreate(clima)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }

        const newClima = await climaModel.create(result.data)
        return res.json({
            success: `Registro ${newClima.id} criado com sucesso!`,
            clima: newClima
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create