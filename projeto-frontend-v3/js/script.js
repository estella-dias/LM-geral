let darkmode /*NOME DA VARIAVÉL QUE TEM AS INFORMAÇÕES*/= document.querySelector('#darkmode'); /*O ESQUEMA DE BUSCA PARA ENCONTRAR O MODO ESCURO/CLARO*/

darkmode.onclick /*AÇÃO PARA O CLICK*/ = ()=>{ /*PROCESSOR PARA CLIQUE DO ICONE*/
    //alert("CLICOU");

    if(darkmode.classList.contains('bx-moon')){ /*O IF FUNCIONA PARA FAZER O TESTE LÓGICO*/
        //alert("MODO ESCURO ATIVO");
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('color'); /*ALGO PARA SCANNEAR AS CORES DO MODO NOTURNO*/
    }else{
        darkmode.classList.replace('bx-sun' , 'bx-moon'); 
        document.body.classList.remove('color');
    }
}
