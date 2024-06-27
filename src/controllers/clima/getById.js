import climaModel from "../../models/climaModel.js"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const clima = await climaModel.getById(+id)

        if(!clima){
            return res.status(404).json({
                error: 'Id não localizado'})
              
        }

        res.json({
            success: `Registro Clima ${id} encontrado com sucesso!`,
            clima
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById