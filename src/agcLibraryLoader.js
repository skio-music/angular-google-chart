/* global angular */
(function(){
    angular.module("googlechart")
        .provider("agcLibraryLoader", AgcLibraryLoaderProvider);

    function AgcLibraryLoaderProvider(){
        this.$get = ['agcGstaticLoader', function(loader){
            return loader;
        }];
    }
})();
