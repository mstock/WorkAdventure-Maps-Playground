(function() {
	console.log("Script starting up...");
	console.log("WA", WA);
	//WA.sendChatMessage('Hello world', 'Mr Robot');
	WA.onEnterZone('myZone', () => {
		console.log("Entered zone", arguments);
		WA.sendChatMessage("Hello!", 'Mr Robot');
	});
	WA.onLeaveZone('myZone', () => {
		console.log("Left zone", arguments);
		WA.sendChatMessage("Goodbye!", 'Mr Robot');
	});

	WA.onEnterZone('myWebZone', () => {
		console.log("Entered web zone", arguments);
		WA.openCoWebSite('https://www.wikipedia.org/');
	});
	WA.onLeaveZone('myWebZone', () => {
		console.log("Left web zone", arguments);
		WA.closeCoWebSite();
	});

	var popup;
	WA.onEnterZone('popup', () => {
		console.log("Entered popup zone", arguments);
		popup = WA.openPopup("myPopupArea", 'Hello world!', [{
        		label: "Close",
        		className: "primary",
        		callback: (popup) => {
            			popup.close();
				popup = null;
        		}
    		}, {
        		label: "Open Website",
        		className: "secondary",
        		callback: (popup) => {
				WA.openCoWebSite('https://osmfoundation.org/');
            			popup.close();
				popup = null;
        		}
    		}]);
	});
	WA.onLeaveZone('popup', () => {
		console.log("Left popup zone", arguments);
		WA.closeCoWebSite();
		if (popup) {
			popup.close();
			popup = null;
		}
	});
})();
