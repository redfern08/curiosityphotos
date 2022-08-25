const vm = new Vue({
    el: "#data",
    data: {
        results: {},
        photos: [],
        date: "",
        cameras: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'],
        cameraChoice: "",
    },
    methods: {
        marsData: function() {
            axios({
                method: 'get',
                url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
                params: {
                    earth_date: this.date,
                    camera: this.cameraChoice,
                    page: 1,
                    api_key: "CRti3DBg6MPID6OwNwzSZyJGuX3fOEu446iGOZn1",
                }
            }).then((response) => {
                this.results = response.data
                console.log(response.data)
            })
        }
    },
}) 


