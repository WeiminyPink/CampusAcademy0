var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    
    },

    getEvent: function(event) {
        return event ? event : window.event;
    },

    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
   
    getWheelDelta: function(event) {
        return event.wheelDelta ? event.wheelDelta : event.detail ;
    }

}

function goToNext() {
    var oNav = document.getElementById('nav');
    var timer = null;
    var roll = 0;
    var aDiv = parseInt(oNav.style.height) / 5;
    timer = setInterval(function() {
        if (roll < aDiv - 12) {
            roll += 12;
            window.scrollBy(0, 12);
        } else {
            window.scrollBy(0, aDiv - roll);
            clearInterval(timer);
        }
    }, 10);
}

function goToPre() {
    var oNav = document.getElementById('nav');
    var timer = null;
    var roll = 0;
    var aDiv = parseInt(oNav.style.height) / 5;
    timer = setInterval(function() {
        if (roll < aDiv - 12) 
        {
            roll += 12;
            window.scrollBy(0, -12);
        } else {
            window.scrollBy(0, roll - aDiv);
            clearInterval(timer);
        }
    }, 10);
}

EventUtil.addHandler(window, 'load', function() {
    var oNav = document.getElementById('nav');
    var oDivs = oNav.getElementsByTagName('div');
    var i = 0;
    for (i = 0, len = oDivs.length; i < len; i++) {
        oDivs[i].style.height = window.innerHeight + "px";
    }
    oNav.style.height = parseInt(oDivs[0].style.height) * 5 + "px";

    EventUtil.addHandler(oNav, 'mousewheel', function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);
        if (EventUtil.getWheelDelta(event) > 0) 
        {
            goToPre();
        } 
        else 
        {
            goToNext();
        }
    });
});
