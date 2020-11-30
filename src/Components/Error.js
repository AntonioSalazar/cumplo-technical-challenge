import React from 'react'
import styled from '@emotion/styled';

const ErrorMessage = styled.h2`
    display: inline-block;
    padding: 20px;
    background: #c63943;
    color: #fff;
    margin-bottom: 10px;
    border-radius: 10px;
`

const Error = ({message}) => 
     (
        <ErrorMessage >{message}</ErrorMessage>
    )


export default Error
