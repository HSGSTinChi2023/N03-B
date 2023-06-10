window.onload=function(){
function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
        var prime = num != 1;
        for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
              if(num % i == 0) {
                  prime = false;
                  break;
              }
        }
        return prime;
      }
      function primeFactors(n) {
        const factors = [];
        let divisor = 2;
      
        while (n >= 2) {
          if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
          } else {
            divisor++;
          }
        }
        return factors;
      }
var ansBoard= new Array(8);
var inputBoard=new Array(8);
var refer= new Array(8);
var clue= new Array(3);
var flg="begin";
for(let i=0;i<8;i++){
    ansBoard[i]=new Array(8);
    inputBoard[i]=new Array(8);
    refer[i] = new Array(8);
    for(let j=0;j<8;j++){
        ansBoard[i][j]=false;
        inputBoard[i][j]=false;
        
    }
}
var myTable = document.getElementById('Board');
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        console.log(i);
        var ele=Math.floor(Math.random()*8+1);
        myTable.rows[i].cells[j].innerHTML=ele;
        refer[i][j]=ele.toString();
    }
}
        var startPosX= Math.floor(Math.random()*2);
        var startPosY= Math.floor(Math.random()*6);
        var length = 8;
        var number="";  
            while(length){
                number+=refer[startPosX][startPosY];
                ansBoard[startPosX][startPosY]=true;
                if(startPosX==7) {console.log(number);console.log(startPosX);console.log(startPosY);break;}
                startPosX++;
                length--;
                
            }
            clue[0]=number;
            length=8
            startPosX= Math.floor(Math.random()*2);
            startPosY= Math.floor(Math.random()*2);
            number="";
            while(length){
                ansBoard[startPosX][startPosY]=true;
                number+=refer[startPosX][startPosY];
                
                if(startPosY==7) {console.log(number);console.log(startPosX);console.log(startPosY);break;}
                startPosY++;
                length--;
                
            }
            clue[1]=number;
            length=8
            startPosX= Math.floor(Math.random()*2);
            startPosY= Math.floor(Math.random()*2);
            number="";    
            while(length){
                ansBoard[startPosX][startPosY]=true;
                number+=refer[startPosX][startPosY];
                
                if(startPosX==7||startPosY==7) {console.log(number);console.log(startPosX);console.log(startPosY);break;}
                startPosX++,startPosY++;
                length--;
                
            }
            clue[2]=number;
        for(let i=0;i<3;i++){
            var num=parseInt(clue[i]);
            if(isPrime(num)){
                var reduce=Math.floor(Math.random()*(num/2));
                num-=reduce;
                clue[i]=num.toString() + " + " + reduce.toString();
            }
            else{
                var listFactors=primeFactors(num);
                clue[i]="";
                for(let j=0;j<listFactors.length-1;j++) clue[i]+=listFactors[j].toString()+" * ";
                clue[i]+=listFactors[listFactors.length-1];
            }
        }
        document.getElementById("clue1").innerText=clue[0];
        document.getElementById("clue2").innerText=clue[1];
        document.getElementById("clue3").innerText=clue[2];

    for(let node of document.querySelectorAll("td")){
        node.onclick=function(){
            var cellsIdx=node.cellIndex;
            var rowIdx=node.parentNode.rowIndex;
            if(node.className==""||node.className=="clickable"){
                node.className="Selected";
                inputBoard[rowIdx][cellsIdx]=true;

            }
            else inputBoard[rowIdx][cellsIdx]=false,node.className="";
            var cnt=0;
            for(let i=0;i<8;i++){
                for(let j=0;j<8;j++){
                    if(ansBoard[i][j]==inputBoard[i][j]) {
                        cnt++;
                    }
                    if(ansBoard[i][j]!=inputBoard[i][j]){
                        console.log(i);
                        console.log(j);
                    }
                }
            }
            if(cnt==64){
                flg="win";
                document.getElementById("flg").innerText="You Won!";
                for(let i=0;i<3;i++)console.log(clue[i]);
            }
           
        }
    }
}