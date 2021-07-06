import React, { useContext, useState, useEffect } from 'react'
import { context } from '../context/context'
import ContactList from './ContactList'
import './Contact.css'
const contact = () => {

    const {
        state: {
            contacts
        },

    } = useContext(context)

    const [searchList, setSearchList] = useState([])
    const [filterFlag, setFilterFlag] = useState(false)

    const handleSearch = (e) => {
        if(e.target.value!=""){
            setFilterFlag(true)
        }
        let filterList = contacts.filter((a, i) => (
            a.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))
        setSearchList(filterList)
    }

    return (
        <div>
            <h2>My Phonebook</h2>

            <input type="text" id="myInput" onChange={handleSearch} placeholder="Search for names.." title="Type in a name"></input>
            <ContactList contacts={filterFlag ? searchList : contacts} />
        </div>
    )
}

export default contact
