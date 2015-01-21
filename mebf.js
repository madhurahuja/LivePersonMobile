
//isDebugEnabled controls the entire site.
var isDebugEnabled = true;

function debug(msg, level) {
    if (window.isDebugEnabled) {
        var d = new Date();
        level = level || 'info';
        console.log(level + ' - [' + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDay() + " | " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() +
            "] " + '- ' + msg);
    }
};

function chatButtonState(acct, skill) {

    var button = document.getElementById(acct + "-" + skill + "-chatButton");

    if (button) {
        // 
        if (LPMobile.getEnabled(acct, skill) == 1) {
            $(button).prop("disabled",false);
            $(button).removeClass("offline");
            $(button).addClass("online");
            LPMobile.setInvitationShown(acct, skill);
            LPMobile.reportEvent(acct + "-" + skill + '-Mobile-Buttton', "1");
            console.log('added visibility. agent online', acct, skill);
        } else {
            $(button).prop("disabled",true);
            $(button).removeClass("online");
            $(button).addClass("offline");
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
        console.log("enabledChange")
    });

    LPMobile.on('chatDisabled', function () {
        console.log("chatDisabled")
    });

    LPMobile.on('chatEnabled', function () {
        console.log("chatEnabled")
    });

    LPMobile.on('visitStart', function () {
      console.log("visitStart")
    });

    LPMobile.on('hotLead', function () {
        console.log("hotlead")
    });

    LPMobile.on('coldLead', function () {
        console.log("coldLead")
    });

    LPMobile.on('invitationShow', function () {
        console.log("invitationShow")
    });

     /*For defect 7274*/
    LPMobile.on('chatWindowShow', function () {
        $("body").attr("aria-hidden",true);
        console.log("chatWindowShow")
    });
            
    LPMobile.on('chatWindowHide', function () {
        $("body").attr("aria-hidden",false);
        console.log("chatWindowHide")
    });

    LPMobile.on('windowShow', function () {
        console.log("windowShow")
    });

    LPMobile.on('windowHide', function () {
        console.log("windowHide")
    });

    LPMobile.on('visitorMessage', function () {
        console.log("visitorMessage")
    });

    LPMobile.on('agentMessage', function () {
        console.log("agentMessage")
    });

    LPMobile.on('invitationAccept', function () {
        console.log("invitationAccept")
    });

    LPMobile.on('chatEnd', function () {
        console.log("chatEnd")
    });

    LPMobile.on('chatInteractive', function () {
        console.log("chatInteractive")
    });

    LPMobile.on('prechatSurveyCanceled', function () {
        console.log("prechatSurveyCanceled")
    });

    LPMobile.on('prechatSurveySubmit', function () {
        console.log("prechatSurveySubmit")
    });

    LPMobile.on('offlineSurveySubmit', function () {
        console.log("offlineSurveySubmit")
    });

    LPMobile.on('prechatSurveyShow', function () {
        console.log("prechatSurveyShow")
    });

    LPMobile.on('postchatSurveyShow', function () {
        console.log("postchatSurveyShow")
    });

    LPMobile.on('chatInteractive', function () {
        console.log("chatInteractive")
    });

    LPMobile.on('offlineSurveyShow', function () {
        console.log("offlineSurveyShow")
    });




}
