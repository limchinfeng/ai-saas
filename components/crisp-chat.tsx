'use client';

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure(""); // enter the crisp website id
    }, [])

    return null;
}