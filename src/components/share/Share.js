import React from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLinkIcon from '@mui/icons-material/AddLink';

function Share() {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareProfilePic' src="./assets/users/pexels-mayim-luna-10883680.jpg" alt=""></img>
                    <input placeholder='Ecrire' className='shareInput'></input>
                </div>
                <hr className='shareHr'></hr>
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <div className='shareOption'>
                            <PermMediaIcon className='shred' />
                        </div>
                        <div className='shareOption'>
                            <EmojiEmotionsIcon className='shred' />
                        </div>
                        <div className='shareOption'>
                            <LabelIcon className='shred' />

                        </div>
                        <div className='shareOption'>
                            <AddLocationIcon className='shred' />

                        </div>
                        <div className='shareOption'>
                            <AddLinkIcon className='shred' />

                        </div>
                    </div>
                    <button className='shareBtn'>Partager</button>
                </div>
            </div>Partager du contenu
        </div>
    )
}

export default Share