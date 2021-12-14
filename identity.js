///////////////////////////////
// config
///////////////////////////////
Oidc.Log.logger = console;

const url = window.location.origin;

const settings = {
    authority: 'https://localhost:44356',
    client_id: 'rsv-landings-client',
    redirect_uri: url + '/womanleader/callback/index',
    post_logout_redirect_uri: url + '/womanleader/index',
    response_type: 'code',
    scope: 'openid profile InternalApi',
    silent_redirect_uri: url + '/womanleader/silent/index',
    automaticSilentRenew:false,
    validateSubOnSilentRenew: true,
    monitorAnonymousSession : true,
    filterProtocolClaims: true,
    loadUserInfo: false,
    revokeAccessTokenOnSignout : true,
    //participation_uri: "https://participation.rsv-test.bizml.ru",
    participation_uri: "http://localhost:8080",
    project_id: "273"
};

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
    
    mgr.events.addUserSignedOut(() => {
        window.location.replace(window.location.origin + '/womanleader/index');
    })
})