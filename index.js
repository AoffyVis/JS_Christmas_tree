function drawTree(height) {
    for ( let i = 1; i <= height ; i++ ) {
        let temp = [];
        let space = ' ';

        for ( let j = 1; j <= i; j++ ) {         
            temp += i + space;
        }

        let spacesBefore = space.repeat(height-i);
        let draw = spacesBefore + temp;
        console.log(draw);  
    }
}

drawTree(9);