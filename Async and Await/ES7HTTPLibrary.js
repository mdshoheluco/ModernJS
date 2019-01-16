/**
 * 
 * @version 3.0.0
 * @author Md Shohel
 * @licence MIT
 * 
 */

 class EasyHttp {
     async get(url) {
        const promise = await fetch(url);
        const res = await promise.json();
        return res; 
     }

     async post(url, data) {
         const promise = await fetch(url, {
             method: 'POST',
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(data)
         });
         const response = await promise.json();
         return response;
     }

     async put(url, data) {
        const promise = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await promise.json();
        return response;
    }

    async delete(url) {
        const promise = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const response = await 'Resource deleted';
        return response;
    }
 }