


//     (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
//         v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
//             o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://staging-cdn.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
// })('8d8c765b-239b-4fc9-5418-921143a0c448');


let appKey = new URLSearchParams(window.location.search).get("apikey");
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
        v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://staging-cdn.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})(appKey);



// This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
// This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
// Call this function in your authentication promise handler or callback when your visitor and account id values are available
// Please use Strings, Numbers, or Bools for value types.
let visitorId = new URLSearchParams(window.location.search).get("visitorId");
pendo.initialize({
    visitor: {
        id:              visitorId   // Required if user is logged in, default creates anonymous ID
        // email:        // Recommended if using Pendo Feedback, or NPS Email
        // full_name:    // Recommended if using Pendo Feedback
        // role:         // Optional

        // You can add any additional visitor level key-values here,
        // as long as it's not one of the above reserved names.
    },

    account: {
        id:           'ACCOUNT1' // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
        // name:         // Optional
        // is_paying:    // Recommended if using Pendo Feedback
        // monthly_value:// Recommended if using Pendo Feedback
        // planLevel:    // Optional
        // planPrice:    // Optional
        // creationDate: // Optional

        // You can add any additional account level key-values here,
        // as long as it's not one of the above reserved names.
    }
});
