function Phone(brand, price, color, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " ,the price is " + this.price + " and camera resolution is: "+ this.camera +".");
}

const XiaomiRedmiNote5Pro = new Phone("Xiaomi", "1000zł", "black", "12 Mpx"),
	SamsungGalaxyS6 = new Phone("Samsung", "2000zł", "silver", "15 Mpx"),
	IPhone6S = new Phone("Apple", "2500zł", "gold", "20 Mpx"),
	Nokia3310 = new Phone("Nokia", "250zł", "black", "No camera");

XiaomiRedmiNote5Pro.printInfo();
SamsungGalaxyS6.printInfo()
IPhone6S.printInfo();
Nokia3310.printInfo();