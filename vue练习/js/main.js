/**
 * Created by ASUS on 2021/2/10.
 */
var app = new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[],
        bottomcity:''
    },
    methods: {
        searchWeather:function(){
            //  console.log('天气查询');
            //  console.log(this.city);
            // 调用接口
            // 保存this
            var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
                .then(function(response){
                    // console.log(response);
                    console.log(response);
                    that.weatherList = response.data.data.forecast
                })
                .catch(function(err){})
        },
        changecity:function(city){
            this.city=city;
            this.searchWeather();
        }
    },
})