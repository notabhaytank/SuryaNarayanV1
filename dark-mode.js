import { createUtility } from 'tailwindcss';



const buttonDark = createUtility('button', (theme) => {

    return {

        'dark:bg-blue-900': true,

    };

});



export default buttonDark;