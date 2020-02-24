//cette fonction décrit les actions que peut faire le monstre


        let nom ="";
        let life = 0 ;
        let money = 0 ;
        let awake = false ;


    function getNom() {
        return nom ;
    }

    function getLife(){
        return life ;
    }

    function getMoney(){
        return money ;
    }

    function getAwake(){
        return awake ;
    }
    export  function get(){
        return "nom : " + getNom() + "\n vie : " + getLife() + "\n argent : " + getMoney() + "\n évéillé : " + getAwake() ;
    }

    export function init(n,pv,argent,eveil){
        nom = n ;
        life = pv ;
        money = argent ;
        awake = eveil ;
    }



