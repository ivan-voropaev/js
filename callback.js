Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.DEBUG;
new Oidc.UserManager({response_mode:'query'}).signinCallback(window.location.href).then(function(user) {
    window.location.replace(lkUrl);
}).catch(function(err) {
    log(err);
});
