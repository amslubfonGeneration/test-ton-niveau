
import { supabase } from "./database.js"


export const pythonlevel1 = async (req,res) =>{
    const { data: data1, error} = await supabase
            .from('Answerspython')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Verifier votre connexion")
    }

    const extracteEle1 = (data1.filter(item => [1,2,3].includes(item.id)))
    const listOption1 = [req.body.option1, req.body.option2, req.body.option3]
    res.setCookie('option1',listOption1[0],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option2',listOption1[1],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option3',listOption1[2],{
        path:'/',
        httpOnly: true
    })
    let compteur = 0
    
    for(let i = 0; i < 3; i++){
        if(listOption1[i] === extracteEle1[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
        if(compteur < 2){
            return res.view('template/level1.ejs',{
                compteur,
                listOption1,
                extracteEle1,
                python:"python"
            })
        }else{
            res.setCookie("score", compteur,{
                httpOnly:false
            })
            return res.view('template/level2.ejs',{
                python:"python",
                level1:compteur,
                affiche: "affiche"
            })
        }
        
}

export const clevel1 = async (req,res) =>{
    const { data: data1, error} = await supabase
            .from('Answersc++')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Vérifier votre connexion")
    }
    const extracteEle1 = (data1.filter(item => [1,2,3].includes(item.id)))
    const listOption1 = [req.body.option1, req.body.option2, req.body.option3]
    res.setCookie('option1',listOption1[0],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option2',listOption1[1],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option3',listOption1[2],{
        path:'/',
        httpOnly: true
    })
    let compteur = 0
    for(let i = 0; i < 3; i++){
        if(listOption1[i] === extracteEle1[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
        if(compteur < 2){
            return res.view('template/level1.ejs',{
                compteur,
                listOption1,
                extracteEle1,
                c:"c++"
            })
        }else{
            res.setCookie("score", compteur,{
                httpOnly:false
            })
            return res.view('template/level2.ejs',{
                c:"c++",
                level1:compteur,
                affiche: "affiche"
        })
        }
        
}

export const latexlevel1 = async (req,res) =>{
    const { data: data1, error} = await supabase
            .from('newanswerslatex')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Vérifier votre connexion")
    }
    const extracteEle1 = (data1.filter(item => [1,2,3].includes(item.id))).reverse()
    const listOption1 = [req.body.option1, req.body.option2, req.body.option3]
    res.setCookie('option1',listOption1[0],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option2',listOption1[1],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option3',listOption1[2],{
        path:'/',
        httpOnly: true
    })
    let compteur = 0
    for(let i = 0; i < 3; i++){
        if(listOption1[i] === extracteEle1[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
        if(compteur < 2){
            return res.view('template/level1.ejs',{
                compteur,
                listOption1,
                extracteEle1,
                latex:"latex"
            })
        }else{
            res.setCookie("score", compteur,{
                httpOnly:false
            })
            return res.view('template/level2.ejs',{
                latex:"latex",
                level1:compteur,
                affiche: "affiche"
            })
        }
}

export const scilablevel1 = async (req,res) =>{
    const { data: data1, error} = await supabase
            .from('Answersscilab')
            .select('*')
    if(error){
        throw new Error("Une erreur s'est produite.Verifier votre connexion")
    }
    const extracteEle1 = (data1.filter(item => [1,2,3].includes(item.id)))
    const listOption1 = [req.body.option1, req.body.option2, req.body.option3]
    res.setCookie('option1',listOption1[0],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option2',listOption1[1],{
        path:'/',
        httpOnly: true
    })
    res.setCookie('option3',listOption1[2],{
        path:'/',
        httpOnly: true
    })
    let compteur = 0
    for(let i = 0; i < 3; i++){
        
        if(listOption1[i] === extracteEle1[i].reponse){
            compteur = compteur + 1
        }
    }   
        if(compteur === 0){
            compteur = -3
        }
         if(compteur < 2){
            return res.view('template/level1.ejs',{
                compteur,
                listOption1,
                extracteEle1,
                scilab:"scilab"
            })
        }else{
            res.setCookie("score", compteur,{
                httpOnly:false
            })
            return res.view('template/level2.ejs',{
                scilab:"scilab",
                level1:compteur,
                affiche: "affiche"
            })
        }
}