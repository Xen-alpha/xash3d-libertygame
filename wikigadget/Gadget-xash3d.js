/**
 * Xash3D for Libertygame loader
 * external server code: https://github.com/Xen-alpha/Xen-alpha.github.io
 * 제작자: [[사용자:senouis]]
**/

function xash3d_asyncJSLoader(url, type) {
	return new Promise(function (resolve, reject) {
	try {
		var scriptElement = document.createElement("script");
		scriptElement.src = url;
		scriptElement.async = true; // force asynchronous loading
		scriptElement.type = type;
		var contextsection = document.getElementById("mw-content-text");
		scriptElement.addEventListener("load", function (ev) {
	        resolve({ status: true });
	    });
	    scriptElement.addEventListener("error", function (ev) {
	        reject({
	            status: false,
	            message: "Failed to load the script"
	        });
	    });
	    contextsection.appendChild(scriptElement);
	} catch (e) {
        reject(e);
    }
	});
}

function xash3d_loadElement() {
	try {
		// Game canvas
		var canvas = document.createElement("canvas");
		// canvas.style = "display:none;";
		canvas.className = "xash-render";
		canvas.id = "xash-canvas";
		canvas.oncontextmenu = "event.preventDefault()";
		var canvasparent = document.getElementById("xash3d-lg-main"); // first element of emscripten-border
		canvasparent.appendChild(canvas);
		// screen option
		var fullscreen = document.createElement("button");
		fullscreen.id = "xash-fullscreen";
		fullscreen.innerHTML = "전체 화면";
		canvasparent.appendChild(fullscreen);
		// game option
		var gameoption = document.createElement("form");
		var elem1 = document.createElement("label");
		elem1.for = "zip";
		elem1.innerHTML = "Select game data as local .zip file:";
		gameoption.appendChild(elem1);
		gameoption.appendChild(document.createElement("br"));
		var elem2 = document.createElement("input");
		elem2.type = "file";
		elem2.name = "zip";
		elem2.id = "zip";
		gameoption.appendChild(elem2);
		gameoption.appendChild(document.createElement("br"));
		var elem3 = document.createElement("label");
		elem3.for = "mod";
		elem3.innerHTML = "Mod (Optional)";
		gameoption.appendChild(elem3);
		gameoption.appendChild(document.createElement("br"));
		var elem3_1 = document.createElement("input");
		elem3_1.type = "text";
		elem3_1.name = "mod";
		elem3_1.id = "mod";
		elem3_1.value = "valve";
		gameoption.appendChild(elem3_1);
		gameoption.appendChild(document.createElement("br"));
		var elem4 = document.createElement("label");
		elem4.for = "map";
		elem4.innerHTML = "Map (Optional)";
		gameoption.appendChild(elem4);
		gameoption.appendChild(document.createElement("br"));
		var elem4_1 = document.createElement("input");
		elem4_1.type = "text";
		elem4_1.name = "map";
		elem4_1.id = "map";
		gameoption.appendChild(elem4_1);
		gameoption.appendChild(document.createElement("br"));
		var elem5 = document.createElement("input");
		elem5.type = "button";
		elem5.id = "start";
		elem5.value = "Start";
		gameoption.appendChild(elem5);
		gameoption.appendChild(document.createElement("br"));
		canvasparent.appendChild(gameoption);
		// now load js files from external server
		xash3d_asyncJSLoader("https://cdn.jsdelivr.net/gh/Xen-alpha/hl-engine-js@main/browserfs.min.js", "text/javascript")
		.then(function (data) {
			xash3d_asyncJSLoader("https://cdn.jsdelivr.net/gh/Xen-alpha/hl-engine-js@main/index.js", "module")
			.then(function (data) {
				console.log("xash3d OK!");
			});
		});
	} catch (e){
		console.log("initiating xash3d for libertygame failed, stop loading elements...");
	}
}
$(xash3d_loadElement);
