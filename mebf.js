<!-- start Mixpanel -->
(function(f, b) {
if (!b.__SV) {
var a, e, i, g;
window.mixpanel = b;
b._i = [];
b.init = function(a, e, d) {
    function f(b, h) {
        var a = h.split(".");
        2 == a.length && (b = b[a[0]], h = a[1]);
        b[h] = function() {
            b.push([h].concat(Array.prototype.slice.call(arguments, 0)))
        }
    }
    var c = b;
    "undefined" !== typeof d ? c = b[d] = [] : d = "mixpanel";
    c.people = c.people || [];
    c.toString = function(b) {
        var a = "mixpanel";
        "mixpanel" !== d && (a += "." + d);
        b || (a += " (stub)");
        return a
    };
    c.people.toString = function() {
        return c.toString(1) + ".people (stub)"
    };
    i = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");

    for (g = 0; g < i.length; g++) f(c, i[g]);
    b._i.push([a, e, d])
};
b.__SV = 1.2;
a = f.createElement("script");
a.type = "text/javascript";
a.async = !0;
a.src = "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js";
e = f.getElementsByTagName("script")[0];
e.parentNode.insertBefore(a, e)
}
})(document, window.mixpanel || []);

mixpanel.init("0d56da8c63a83cc4ea6e70c369a98596");
<!-- end Mixpanel -->


function chatButtonState(acct, skill) {

    var button = document.getElementById(acct + "-" + skill + "-chatButton");

    if (button) {
        // //debugger;
        if (LPMobile.getEnabled(acct, skill) == 1) {
            $(button).show();
            LPMobile.setInvitationShown(acct, skill);
            LPMobile.reportEvent(acct + "-" + skill + '-Mobile-Buttton', "1");
            console.log('added visibility. agent online', acct, skill);
        } else {
            $(button).hide();
            LPMobile.reportEvent(acct + "-" + skill + '-Mobile-Buttton', "0");
            console.log('agent offline/hidden', acct, skill);
        };
    } else {
        LPMobile.reportEvent(acct + "-" + skill + '-Mobile-Buttton', "-1");
        console.log("in else", acct, skill);
    };
}

function onReady() {
    console.log("**********ONREADY*************");
    LPMobile.on("enabledChange", function (o) {
        chatButtonState(o.account, o.skill);
        mixpanel.track("enabledChange")
    });

    LPMobile.on('chatDisabled', function () {
        //debugger;
        document.getElementById('agentStatus').innerHTML='Offline';
        mixpanel.track("chatDisabled")
    });

    LPMobile.on('chatEnabled', function () {
        //debugger;
        document.getElementById('agentStatus').innerHTML='Online!';
        mixpanel.track("chatEnabled")
    });

    LPMobile.on('visitStart', function () {
      mixpanel.track("visitStart")
    });

    LPMobile.on('hotLead', function () {
      //debugger;
        mixpanel.track("hotlead")
    });

    LPMobile.on('coldLead', function () {
      //debugger;
        mixpanel.track("coldLead")
    });

    LPMobile.on('invitationShow', function () {
      //debugger;
        mixpanel.track("invitationShow")
    });

    LPMobile.on('chatWindowShow', function () {
      //debugger;
        mixpanel.track("chatWindowShow")
    });

    LPMobile.on('chatWindowHide', function () {
      //debugger;
        mixpanel.track("chatWindowHide")
    });

    LPMobile.on('windowShow', function () {
      //debugger;
        mixpanel.track("windowShow")
    });

    LPMobile.on('windowHide', function () {
      //debugger;
        mixpanel.track("windowHide")
    });

    LPMobile.on('visitorMessage', function () {
      //debugger;
        mixpanel.track("visitorMessage")
    });

    LPMobile.on('agentMessage', function () {
      //debugger;
        mixpanel.track("agentMessage")
    });

    LPMobile.on('invitationAccept', function () {
      //debugger;
        mixpanel.track("invitationAccept")
    });

    LPMobile.on('chatEnd', function () {
      //debugger;
        mixpanel.track("chatEnd")
    });

    LPMobile.on('chatInteractive', function () {
      //debugger;
        mixpanel.track("chatInteractive")
    });

    LPMobile.on('prechatSurveyCanceled', function () {
      //debugger;
        mixpanel.track("prechatSurveyCanceled")
    });

    LPMobile.on('prechatSurveySubmit', function () {
      //debugger;
        mixpanel.track("prechatSurveySubmit")
    });

    LPMobile.on('offlineSurveySubmit', function () {
      //debugger;
        mixpanel.track("offlineSurveySubmit")
    });

    LPMobile.on('prechatSurveyShow', function () {
      //debugger;
        mixpanel.track("prechatSurveyShow")
    });

    LPMobile.on('postchatSurveyShow', function () {
      //debugger;
        mixpanel.track("postchatSurveyShow")
    });

    LPMobile.on('chatInteractive', function () {
      //debugger;
        mixpanel.track("chatInteractive")
    });

    LPMobile.on('offlineSurveyShow', function () {
      //debugger;
        mixpanel.track("offlineSurveyShow")
    });




}
