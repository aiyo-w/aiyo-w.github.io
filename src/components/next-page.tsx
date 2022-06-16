import React from "react";

import './next-page.css';

interface Props {
    targatId: string;
}

export const NextPage = (props: Props) => {
    return <a href={`#${props.targatId}`} className='next-page'> </a>;
}