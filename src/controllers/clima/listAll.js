import climaModel from "../../models/climaModel.js"

const listAll = async (req, res) => {
    try{
        const clima = await climaModel.getAll()
        return res.json({
            success: 'Registros listados com sucesso!',
            clima
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'cls
        })
    }
}

export default listAll