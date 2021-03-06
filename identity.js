///////////////////////////////
// config
///////////////////////////////
Oidc.Log.logger = console;

const url = window.location.origin;

const mgr = new Oidc.UserManager(settings);

$(document).ready(() => {
    mgr.getUser().then(user => {
        if (user) {
            const iframe = `<iframe src="${settings.participation_uri}?projectId=${settings.project_id}" frameborder="0" style="width: 100%;"></iframe>`;
            $("#iframe-lk").append( iframe );
        } else {
            mgr.signinRedirect({state:'some data'}).then(function() {
                log("signinRedirect done");
            }).catch(function(err) {
                log(err);
            });
        }
    })
    
//     mgr.events.addUserSignedOut(() => {
//         window.location.replace(window.location.origin + '/womanleader/index');
//     })
})
