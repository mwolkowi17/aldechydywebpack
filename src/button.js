import { tytul, tytulobj } from './loadingModule';

export const buttonChange = document.querySelector("#d");

export const buttonClick = () => {
    if (tytul === 'aldechydy_772.mtl') {
        tytul = 'aldechydy_772_b.mtl';
        tytulobj = 'aldechydy_772_b.obj';
    }
    else if (tytul ==='aldechydy_772_b.mtl' )
     {
        tytul = 'aldechydy_772.mtl';
        tytulobj = 'aldechydy_772.obj';
    }

}