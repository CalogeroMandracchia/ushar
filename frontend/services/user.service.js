function userServices($http) 
{
    const self = this;
    const bla = (arg) => { self.bla = arg};
}

angular
    .module('ushar')
    .service('userServices', userServices);