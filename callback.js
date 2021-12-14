Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.DEBUG;
new Oidc.UserManager({response_mode:'query'}).signinCallback(window.location.href).then(function(user) {
    var url = window.location.origin;
    window.location.replace(url + '/womanleader/lk/index');
}).catch(function(err) {
    log(err);
});
