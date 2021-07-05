import React, { useState, useEffect, useContext } from 'react'
// import { Breadcrumb, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import AlbumList from './AlbumList'
import {context} from '../context/context'

const Album = () => {

    const {
        state:{
            albumData,
            flag,
            titleWithOut_E
        },
        handleRemoveTitle_E
    }=useContext(context)

    return (
        <div className="px-5">
           
            <button className="btn" onClick={handleRemoveTitle_E}>Remove All E's</button>
            <AlbumList albums={flag ? titleWithOut_E : albumData} ></AlbumList>
        </div>
    )
}

export default Album
