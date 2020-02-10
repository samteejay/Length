
<!DOCTYPE html>
<html>
<head>
<title>Length of decimal</title>
</head>

<body>
<script>

var price = 9.95;
var taxRate = 0.065;
var total = price + (price * taxRate);
var prettyTotal = total.toFixed(2);
var currencyTotal = "$" + prettyTotal;

alert(currencyTotal);



var total = 1.5555;
var str = total.toString();

if (str.charAt(str.length - 1) == "5") {
	str = str.slice(0, str.length - 1) + "6";
}

var prettyTotal = Number(str);
var prettyTotala = prettyTotal.toFixed(2);
var currencyTotal = "$" + prettyTotala;

alert(currencyTotal);
	
</script>

</body>
</html>