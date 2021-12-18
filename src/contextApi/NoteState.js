
import React, { useEffect, useState } from 'react'
import NoteContext from './NoteContext'
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics } from '../Config'

function NoteState(props) {
    const [User, setUser] = useState([])
    const [LoderShow, setLoderShow] = useState(false)
    const userCollectionRef = collection(analytics, "users");
    const name2 = {
        "name": "Subham ",
        "class": "11b"
    }
    const loader = async () => {
        setLoderShow( false)
    }
    const deleteUser = async (id) => {
        setLoderShow(true)
        const userDoc = doc(analytics, "users", id);
        await deleteDoc(userDoc)
        await getUser();
         await loader();
      }

    const UpdateUser = async (eii, newNote) => {
        setLoderShow(true)
        const  userDoc =  doc(analytics, "users", eii);
       
        await updateDoc(userDoc, newNote)
        await getUser();
        await loader();
      }
    const Adddoc = async (notee) => {
        setLoderShow(true)
        await addDoc(userCollectionRef, notee);

        await getUser();
        await loader();
    }
    const getUser = async () => {
        setLoderShow(true)
        const data = await getDocs(userCollectionRef)
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        
        await loader();
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <NoteContext.Provider value={{ name2, User, getUser, Adddoc ,UpdateUser, deleteUser , LoderShow}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
