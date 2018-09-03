//*******Classes********/



class Shape {
    constructor(height, width, xPos, yPos) {
        this.height = height;
        this.width = width;
        this.xPos = canvasX + xPos;
        this.yPos = canvasY + yPos;
    }
    displayInfo() {
        objWidth.value = this.width;
        objHeight.value = this.height;
        objParimeter.value = (this.height + this.width) * 2;
        objName.value = this.name;
    }


}

class Circle extends Shape {
    constructor(radius, height, width, xPos, yPos){
        super(height, width, xPos, yPos)
            this.radius = radius;
            this.name = 'circle'
            let div = document.createElement('div');
            div.style.position = 'absolute';
            div.classList.add('box-circle')
            div.style.top = canvasY + yPos + 'px';
            div.style.left = canvasX + xPos + 'px';
            div.style.height = radius * 2 + 'px';
            div.style.width = radius*2 + 'px';
            canvas.appendChild(div);
            
    }
    displayInfo(){
        objWidth.value = this.radius * 2;
        objHeight.value = this.radius * 2;
        objParimeter.value = (this.height + this.width) * 2;
        objName.value = this.name;
        objRadius.value = this.radius;
        objArea.value = 3.14 * (this.radius * this.radius);
        objParimeter.value = 3.14 * (this.radius*2)
}
}
class Square extends Shape {
    constructor(height,width,xPos,yPos){
        super(height,width,xPos,yPos);
        this.name = 'square'
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.classList.add('box-square')
        div.style.top = canvasY + yPos + 'px';
        div.style.left = canvasX + xPos + 'px';
        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        canvas.appendChild(div);

    }
    displayInfo() {
        objWidth.value = this.width;
        objHeight.value = this.width;
        objParimeter.value = this.width * 4;
        objName.value = this.name;
        objRadius.value = 'None';
        objArea.value = this.width * 2
        
    }
}

class Rectangle extends Shape {
    constructor(height, width, xPos, yPos) {
        super(height, width, xPos, yPos);
        this.name = 'rectangle'
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.classList.add('box-rectangle')
        div.style.top = canvasY + yPos + 'px';
        div.style.left = canvasX + xPos + 'px';
        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        canvas.appendChild(div);

    }
    displayInfo() {
        objWidth.value = this.width;
        objHeight.value = this.height;
        objParimeter.value = parseInt(this.width * 2) + parseInt(this.height * 2);
        objName.value = this.name;
        objRadius.value = 'None';
        objArea.value = this.width * this.height;

    }
}

class Triangle extends Shape {
    constructor(height, width, xPos, yPos) {
        super(height, width, xPos, yPos);
        this.name = 'triangle'
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.classList.add('box-triangle')
        div.style.top = canvasY + yPos + 'px';
        div.style.left = canvasX + xPos + 'px';
    
        div.style.borderBottom = this.height + 'px solid yellow';
        div.style.borderRight = this.height + 'px solid transparent';
        canvas.appendChild(div);

    }
    displayInfo() {
        objWidth.value = this.height;
        objHeight.value = this.height;
        objArea.value = this.height / 2;
        objName.value = this.name;
        objRadius.value = 'None';
        objParimeter.value = Math.sqrt(this.height) + this.height * 2;
        

    }
}



//*****Variables*****//

//display form data//
let objName = document.getElementById('name');
let objWidth = document.getElementById('width');
let objHeight = document.getElementById('height');
let objRadius = document.getElementById('radius');
let objArea = document.getElementById('area');
let objParimeter = document.getElementById('parimeter');

//create buttons//
let canvas = document.getElementById('canvas');
let canvasX = canvas.offsetLeft;
let canvasY = canvas.offsetTop;



let insertRec = document.getElementById('insertRec');
let insertSq = document.getElementById('insertSq');
let insertCir = document.getElementById('insertCir');
let insertTri = document.getElementById('insertTri')


//Insertion Values//
let recWidth = document.getElementById('recWidth');
let recHeight = document.getElementById('recHeight');

let sqWidth = document.getElementById('sqWidth');
let sqHeight = document.getElementById('sqHeight');

let cirRadius = document.getElementById('cirRadius');

let triHeight = document.getElementById('triHeight');


//*****Generate Random POS *****/
function randNum(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

/******Event Listeners*******/

insertCir.addEventListener('click', function(){

    let newCir = new Circle(cirRadius.value, 0, 0, randNum(1,600 - (cirRadius.value * 2)), randNum(0,600 - (cirRadius.value * 2)));
    newCir.displayInfo();

})

insertSq.addEventListener('click', function () {

    let newSq = new Square(sqWidth.value, sqWidth.value, randNum(1,600 - (sqWidth.value)), randNum(1,600 - (sqWidth.value)));
    newSq.displayInfo();

})


insertRec.addEventListener('click', function () {

    let newRec = new Rectangle(recHeight.value, recWidth.value, randNum(1, 600 - (recWidth.value)), randNum(1, 600 - (recHeight.value)));
    newRec.displayInfo();


})

insertTri.addEventListener('click', function () {

    let newTri = new Triangle(triHeight.value, 0, randNum(1, 600 - (triHeight.value)), randNum(1, 600 - (triHeight.value)));
    newTri.displayInfo();


})















