import React, { useContext } from 'react'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Loder from './Components/loder'
import NoteContext from './contextApi/NoteContext'


export default function Home() {
    const a = useContext(NoteContext)
const{LoderShow }=a
    return (
        <div>
            <Navbar />
            {LoderShow === false ? <Body /> :<Loder/>}
         

        </div>
    )
}
