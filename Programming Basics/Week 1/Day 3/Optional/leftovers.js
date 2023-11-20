function howmuchLeftOverCake(noPiece,nopeople){
    var leftovers=noPiece%nopeople;
    if(leftovers==0){
        console.log('there is no leftovers for you');
    }else if(leftover<=2){
        console.log('you have some leftovers');
    }else if(leftovers>=3&& leftovers<=5){
        console.log('you have leftovers to share');
    }else{
        console.log('hold another party');
    }
}
howmuchLeftOverCake(12,5)