import React from 'react'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import './acervo.css'



function Acervo() {

   
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/login')
        }
    }, [])

    return (
        <div className="card_container">
            
            <div>
                <span> {localStorage.getItem('EMAIL')} </span>
                <button className="btn" onClick={() => {localStorage.clear()
                navigate('/') }}
                > Sair </button>
            </div>

    

        </div>
    )
}


export default Acervo