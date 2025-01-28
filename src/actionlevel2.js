import { supabase } from "./database.js"


export const pythonlevel2 = async (req,res) =>{
    const { data: data2, error} = await supabase
            .from('Answerspython')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Verifier votre connexion")
    }

    const extracteEle1 = (data2.filter(item => [1,2,3].includes(item.id)))
    const extracteEle2 = (data2.filter(item => [4,5,6].includes(item.id)))
    const listOption2 = [req.body.option1, req.body.option2, req.body.option3]
    let Compteur = 0
    for(let i = 0; i < 3; i++){
        if(listOption2[i] === extracteEle2[i].reponse){
            Compteur = Compteur + 1
        }
    }   
    const compteur = Compteur + parseInt(req.cookies.score)
            const listOption1 = [req.cookies.option1,req.cookies.option2,req.cookies.option3]
            
            return res.view('template/level2.ejs',{
                compteur,
                level2:Compteur,
                listOption2,
                listOption1,
                extracteEle1,
                extracteEle2,
                python:"python",
            })
        
}

export const clevel2 = async (req,res) =>{
    const { data: data2, error} = await supabase
            .from('Answersc++')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Vérifier votre connexion")
    }

    const extracteEle1 = (data2.filter(item => [1,2,3].includes(item.id)))
    const extracteEle2 = (data2.filter(item => [4,5,6].includes(item.id)))
    const listOption2 = [req.body.option1, req.body.option2, req.body.option3]
    let Compteur = 0
    for(let i = 0; i < 3; i++){
        if(listOption2[i] === extracteEle2[i].reponse){
            Compteur = Compteur + 1
        }
    }   
            const compteur = Compteur + parseInt(req.cookies.score)
            const listOption1 = [req.cookies.option1,req.cookies.option2,req.cookies.option3]
            
            return res.view('template/level2.ejs',{
                compteur,
                level2:Compteur,
                listOption2,
                listOption1,
                extracteEle2,
                extracteEle1,
                c:"c++"
            })   
}

export const latexlevel2 = async (req,res) =>{
    const { data: data2, error} = await supabase
            .from('newanswerslatex')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Vérifier votre connexion")
    }
    const extracteEle1 = (data2.filter(item => [1,2,3].includes(item.id))).reverse()
    const extracteEle2 = (data2.filter(item => [4,5,6].includes(item.id)))
    const listOption2 = [req.body.option1, req.body.option2, req.body.option3]
    let Compteur = 0
    for(let i = 0; i < 3; i++){
        if(listOption2[i] === extracteEle2[i].reponse){
            Compteur = Compteur + 1
        }
    }   
        
            const compteur = Compteur + parseInt(req.cookies.score)
            const listOption1 = [req.cookies.option1,req.cookies.option2,req.cookies.option3]
            
            return res.view('template/level2.ejs',{
                compteur,
                level2:Compteur,
                listOption2,
                listOption1,
                extracteEle2,
                extracteEle1,
                latex:"latex"
            })
        
}

export const scilablevel2 = async (req,res) =>{
    const { data: data2, error} = await supabase
            .from('Answersscilab')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Verifier votre connexion")
    }
    const extracteEle1 = (data2.filter(item => [1,2,3].includes(item.id)))
    const extracteEle2 = (data2.filter(item => [4,5,6].includes(item.id)))
    const listOption2 = [req.body.option1, req.body.option2, req.body.option3]
    let Compteur = 0
    for(let i = 0; i < 3; i++){
        
        if(listOption2[i] === extracteEle2[i].reponse){
            Compteur = Compteur + 1
        }
    }   
            const compteur = Compteur + parseInt(req.cookies.score)
            const listOption1 = [req.cookies.option1,req.cookies.option2,req.cookies.option3]
            
            return res.view('template/level2.ejs',{
                compteur,
                level2:Compteur,
                listOption2,
                listOption1,
                extracteEle1,
                extracteEle2,
                scilab:"scilab"
            })
}