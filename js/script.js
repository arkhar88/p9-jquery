var Get_triangle_area = function(base, height) {
    if (base <= 0 || height <= 0) return 0;
    return (base * height) / 2;
};

console.log(Get_triangle_area(10, 4));

var a = Get_triangle_area(1, 2);
var b = Get_triangle_area(2, 3);
var c = Get_triangle_area(3, 4);
