const dataList = [ 
    {
        language: "Español", 
        text: "Bienvenido al curso de React Native en PachaQtec", 
        id: 1, }, 
    {
        language: "Ingles", 
        text: "Welcome to the React Native course at PachaQtec", 
        id: 2, }, 
    { 
        language: "Francés", 
        text: "Bienvenue dans le cours React Native chez PachaQtec", 
        id: 3, }, 
    { 
        language: "Italiano", 
        text: "Benvenuti al corso React Native presso PachaQtec", 
        id: 4, }, 
    { 
        language: "Portugués", 
        text: "Bem-vindo ao curso React Native na PachaQtec", 
        id: 5, 
    }
];

const translate = (data, text, language) => {
    const isInclude = language.includes (data.language);
    if(isInclude) {
        return data.text
    }
}

translateLanguage(dataList, "Portugués");

console.log(dataList.find(translateLanguage));

const identifyLanguage = (data, text) => {
    return text.includes(data.text);
}

identifyLanguage(dataList, "Benvenuti al corso React Native presso PachaQtec");

console.log(dataList.find(identifyLanguage));