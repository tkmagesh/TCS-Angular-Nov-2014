describe("A calculator", function(){
	describe("Add operation", function(){
		it("should operate on two numbers", function(){
			//Arrange
			var number1 = 10,
				number2 = 20,
				expectedResult = 30;

			//Act
			var result = add(10,20);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should operate on two numbers in string format", function(){
			//Arrange
			var number1 = "10",
				number2 = "20",
				expectedResult = 30;

			//Act
			var result = add(number1, number2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should ignore non numeric string", function(){
			//Arrange
			var number1 = "10",
				number2 = "abc",
				expectedResult = 10;

			//Act
			var result = add(number1, number2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should operate on only one argument", function(){
			//Arrange
			var number1 = "10",
				expectedResult = 10;

			//Act
			var result = add(number1);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should operate on functions returning numbers", function(){
			//Arrange
			var f1 = function(){ return 10; },
				f2 = function(){ return 20; },
				expectedResult = 30;
			

			//Act
			var result = add(f1, f2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should operate on functions returning numbers in string format", function(){
			//Arrange
			var f1 = function(){ return "10"; },
				f2 = function(){ return "20"; },
				expectedResult = 30;
			

			//Act
			var result = add(f1, f2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should operate on functions returning functions returning numbers in string format", function(){
			//Arrange
			var f1 = function(){ return function(){ return "10"; };},
				f2 = function(){ return function(){ return "20"; };},
				expectedResult = 30;
			

			//Act
			var result = add(f1, f2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should operate on varying number of arguments", function(){
			//Arrange
			var	expectedResult = 150;

			//Act
			var result = add(10,20,30,40,50);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should operate on array of numbers", function(){
			//Arrange
			var numbers1 = [10,20],
				numbers2 = [30,40],
				expectedResult = 100;

			//Act
			var result = add(numbers1, numbers2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		//two functions returning array of numbers
		it("should operate on functions returning array of numbers", function(){
			//Arrange
			var f1 = function(){ return [10,20];},
				f2 = function(){ return [30,40];},
				expectedResult = 100;

			//Act
			var result = add(f1, f2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		//array of functions returing array of numbers
		it("should operate on array of functions returning array of numbers", function(){
			//Arrange
			var f1 = function(){ return [10,20];},
				f2 = function(){ return [30,40];},
				expectedResult = 100;

			//Act
			var result = add([f1, f2]);

			//Assert
			expect(result).toBe(expectedResult);
		});
		//nested array of numbers
		it("should operate on nested array of numbers", function(){
			//Arrange
			var numbers = [10,[20,[30,[40,[50]]]]];
			var	expectedResult = 150;

			//Act
			var result = add(numbers);

			//Assert
			expect(result).toBe(expectedResult);
		});

	});
	
	
	
	
});