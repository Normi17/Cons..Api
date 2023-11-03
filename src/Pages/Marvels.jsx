import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cont = styled.section`
background-color: yellow;

`;
const Image = styled.img`
background-color: yellow;

`;

function MCards() {
    return(
        <>
        <Cont>
            <div>
                <Image><img src="" alt="" /></Image>

            </div>
            <div>

            </div>
        </Cont>
        </>

    )
    
}
export default MCards;