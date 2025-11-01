"use client";

import { useState, useEffect } from "react";

const TYPINGPHRASES = [
    "Sudah siap hidup sehat hari ini?",
    "Ayo mulai olahraga!",
    "Puja-puji Pak Salman",
    "Eksplor menu-menu makanan sehat-mu",
    "Danes love Salman"
];

const TYPINGSPEED = 75;
const PAUSESPEED = 4000;
const DELETINGSPEED = 60;

const TypingAnimation = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = TYPINGPHRASES[phraseIndex];
        let timeoutId : ReturnType<typeof setTimeout>;

        if(isDeleting) {
            if(displayedText.length > 0){
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentPhrase.substring(0, displayedText.length -1));
                }, DELETINGSPEED);
            } else {
                setIsDeleting(false);
                setPhraseIndex((prevIndex) => (prevIndex + 1) % TYPINGPHRASES.length);
            }
        } else {
            if(displayedText.length < currentPhrase.length){
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));

                }, TYPINGSPEED);
            }else {
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, PAUSESPEED);
            }
        }
        return () => clearTimeout(timeoutId);
    }, [displayedText, isDeleting, phraseIndex]);

    return (
        <h2 className="text-4xl font-semibold text-gray-700">
            <span>
                {displayedText}
            </span>
            <span className="cursor-blink">|</span>
        </h2>
    );
}

export default TypingAnimation
