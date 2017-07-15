document.addEventListener("readystatechange", function() {
	if (document.readyState !== "complete")
		return;
	document.getElementById("test").innerHTML = "Hello, world!";
	N = new NetworkTable("TestTable", "RoboRio-2412-frc.local");
});