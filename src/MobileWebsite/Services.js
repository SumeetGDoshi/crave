const Services = {
    getReferralCode: (data)=>{
        let url = "/api/referral/generate_code"
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(response=>response.json())   
    },

    sendRequestDemo: (data)=>{
        let url = "/api/referral/request_demo"
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(response=>response.json())   
    },

    sendMessage: (data)=>{
        let url = "/api/admin/recive_message"
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(response=>response.json())   
    },

    getCareers: (data)=>{
        let url = "/api/get_careers"
        return fetch(url, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(response=>response.json())
    },

    getBlogs: (data) =>{
        let url = "/api/get_blogPosts"
        return fetch(url, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(response=>response.json())
    },

    contactUsNow:(data)=>{
        let url = "https://app.99inbound.com/api/e/8KYc8awz"
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json', "Accept": 'application/json'},
            body: JSON.stringify(data)
        }).then(response=>response.json())
    }


} 

export default Services;