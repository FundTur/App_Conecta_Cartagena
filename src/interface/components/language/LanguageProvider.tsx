import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../application/store';
import { setLanguage } from '../../../application/slices/uiPersistentSlice';

// Creamos el contexto de idioma
const LanguageContext = createContext({
    t: (key: string) => key,
    lang: 'en',
    changeLanguage: (lang: string) => { },
});

// Proveedor del contexto de idioma
export const LanguageProvider = ({ children }: any) => {
    const language = useSelector((state: RootState) => state.uiPersistent.language);
    const dispatch = useDispatch();

    // Función para cambiar el idioma
    const changeLanguage = (lang: string) => {
        dispatch(setLanguage(lang));
    };

    // Obtener las traducciones basadas en el idioma actual
    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ t, changeLanguage, lang: language }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para usar el contexto de idioma
export const useLanguage = () => {
    return useContext(LanguageContext);
};
