import { formMetadata } from "../metadata/form-metadata";

export const generateInitialData = ()  => {
    const storedData = localStorage.getItem('hCard');
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        const dataObject: any = { image: formMetadata.image };
        formMetadata.details.forEach(block => {
            return block.fields.forEach(field => {
                dataObject[field.name] = field.defaultValue;
            })
        });
        return dataObject;
    }
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}