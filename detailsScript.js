var router = new VueRouter({
   
    mode: 'history',
    routes: []
  });
  
  var myApp =  new Vue({
    router,
    el: '#app',
	data:{
    country:'',
	countryData:[],
  },
  
    mounted: function() {
        parameters = this.$route.query
        console.log(parameters)
   
        name = this.$route.query.name
        this.country = name
		
	axios.get('https://restcountries.com/v3.1/name/'+this.country).then(response => (this.countryData = response))
    },
  methods:{
    
    prevPage:function() {
       this.$router.push('./home.html');
    }

  }
  });