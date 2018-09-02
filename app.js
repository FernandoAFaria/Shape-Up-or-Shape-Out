//*******Classes********/



class Shape {
    constructor(height, width, xPos, yPos) {
        this.height = height;
        this.width = width;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    displayInfo() {
        objWidth.value = this.width;
        objHeight.value = this.height;
        objParimeter.value = (this.height + this.width) * 2;
        objName.value = this.name;
    }


}

class Circle extends Shape {
    constructor(height, width, xPos, yPos, radius){
        super(height, width, xPos, yPos)
            this.radius = radius;
            this.name = 'circle'

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

let square = new Circle();






















