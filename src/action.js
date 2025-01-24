import { supabase } from "./index.js"


export const python = async (req,res) =>{
    const { data, error} = await supabase
            .from('Answerspython')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Verifier votre connexion")
    }
    const listOption = [req.body.option1, req.body.option2, req.body.option3]
    let compteur = 0
    
    for(let i = 0; i < 3; i++){
        if(listOption[i] === data[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
        return res.view('template/form.ejs',{
           compteur,
           listOption,
           data,
           python:"python"
        })
}

export const c = async (req,res) =>{
    const { data, error} = await supabase
            .from('Answersc++')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Vérifier votre connexion")
    }
    console.log(req.body,data)
    const listOption = [req.body.option1, req.body.option2, req.body.option3]
    let compteur = 0
    for(let i = 0; i < 3; i++){
        if(listOption[i] === data[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
        return res.view('template/form.ejs',{
           compteur,
           listOption,
           data,
           c:"c++"
        })
}

export const latex = async (req,res) =>{
    const { data, error} = await supabase
            .from('Answerslatex')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Vérifier votre connexion")
    }
    const listOption = [req.body.option1, req.body.option2, req.body.option3]
    let compteur = 0
    for(let i = 0; i < 3; i++){
        if(listOption[i] === data[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
        return res.view('template/form.ejs',{
           compteur,
           listOption,
           data,
           latex:"latex"
        })
}

export const scilab = async (req,res) =>{
    const { data, error} = await supabase
            .from('Answersscilab')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Verifier votre connexion")
    }
    const listOption = [req.body.option1, req.body.option2, req.body.option3]
    let compteur = 0
    for(let i = 0; i < 3; i++){
        
        if(listOption[i] === data[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
        return res.view('template/form.ejs',{
           compteur,
           listOption,
           data,
           scilab:"scilab"
        })
}