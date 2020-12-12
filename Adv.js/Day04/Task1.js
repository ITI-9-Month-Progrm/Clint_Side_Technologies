var Shape = function(H,W){
    if (this.constructor == Shape) throw "invalid  creation";
    this.Hight = H;
    this.width = W;
}

var Rectangle = function(H,W){
    Shape.call(this, H, W);
}


var Square = function(H){
    Rectangle.call(this, H, H);
    Square.Scount++;
}
Square.Scount = 0;


Rectangle.prototype = Object.create(Shape.prototype); //Rect from shape
Square.prototype = Object.create(Rectangle.prototype); //square from rect
Rectangle.prototype.constructor = Rectangle;
Square.prototype.constructor = Square;


Rectangle.prototype.perimeter = function()
{
    return 2*(this.Hight + this.width);
}

Rectangle.prototype.area = function()
{
    return this.Hight * this.width;
}

Rectangle.prototype.Display = function()
{
    console.log("hight = "+this.Hight+" & width = " + this.width + " & Area = " + this.area() + " & perimeter = " + this.perimeter());
}