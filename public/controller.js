$(document).ready(function () {

	$("#btn-off").click(function () {
		client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
		client.on("connect", function () {
			var topic = "jean/fan/status"
			var payload = "The fan is turn off"
			client.publish(topic, payload);
			document.getElementById("message").innerHTML = "The fan is turn off";
			console.log("The fan is turn off");
		})
	})

	$("#btn-connect1").click(function () {
		client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
		client.on("connect", function () {
			var topic = "jean/fan/status"
			var payload = "The fan is turn at 1"
			client.publish(topic, payload);
			document.getElementById("message").innerHTML = "The fan is turn at 1";
			console.log("The fan is turn at 1");
		})
	})

	$("#btn-connect2").click(function () {
		client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
		client.on("connect", function () {
			var topic = "jean/fan/status"
			var payload = "The fan is turn at 2"
			client.publish(topic, payload);
			document.getElementById("message").innerHTML = "The fan is turn at 2";
			console.log("The fan is turn at 2");
		})
	})

	$("#btn-connect3").click(function () {
		client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
		client.on("connect", function () {
			var topic = "jean/fan/status"
			var payload = "The fan is turn at 3"
			client.publish(topic, payload);
			document.getElementById("message").innerHTML = "The fan is turn at 3";
			console.log("The fan is turn at 3");
		})
	})
})