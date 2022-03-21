<template>
  <div class="wrapper" 
      :style="styles"
   v-if="Object.keys(jsonData).length">
    <k-form-build :value="jsonData" ref="KFB" @submit="handleSubmit" />
    <a-button class="form_btn" size="large" type="primary" @click="getData"> 提交 </a-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Demo",
  data() {
    return {
      jsonData: {},
      styles:''
    };
  },

  created() {
    let that = this;
    let formId = new URLSearchParams(window.location.search);
    console.log(formId.get("formId"));
    // axios.defaults.withCredentials=true;
    if(formId.get("formId")){
    axios({
      method: "get",
      url: "https://xjserver.site:9000/api/getForm?formId=" + formId.get("formId"),
    }).then(function (response) {
      console.log(response);
      if (response.status == 200) {
        that.jsonData = response.data.data;
        document.title=response.data.data.config.title
      }
    });
    }

  },
  beforeDestroy(){
    document.removeEventListener('message',this.listenMessage)
  },
  
  updated() {
    console.log(this.jsonData);
    let a='';
    if(this.jsonData.config.background){
   a+='backgroundImage:url('+this.jsonData.config.background+")"
    }
    if(this.jsonData.config.marginTop!==''){
      a+=";padding-top:"+this.jsonData.config.marginTop+'px'
    }else{
      a+=";padding-top:20px"

    }
    this.styles=a;
    console.log(a)
  },
  methods: {
    handleSubmit(p) {
      // 通过表单提交按钮触发，获取promise对象
      p()
        .then((res) => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err, "校验失败");
        });
    },
    getData() {
      // 通过函数获取数据
      this.$refs.KFB.getData()
        .then((res) => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err, "校验失败");
        });
    },
//     listenMessage(event){
//       if(event.origin=='http://192.168.0.68:8081'){
// console.log(event)
//       let data=JSON.parse(event.data)
//         console.log(event.data)
//         this.jsonData=data;
//         document.title=data.config.title
//          event.source.postMessage('Received!','http://192.168.0.68:8080')
//       }
      
//       }
  },
};
//   window.addEventListener('message',(event)=>{
//       if(event.origin=='http://192.168.0.68:8081'){
// console.log(event)
//       let data=JSON.parse(event.data)
//         console.log(event.data)
//         this.jsonData=data;
//         document.title=data.config.title
//          event.source.postMessage('Received!','http://192.168.0.68:8080')
//       }
      
//       },false)
</script>
<style scoped>
.wrapper {
  margin:0px auto;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-size: cover;
  min-height: 100vh;
}
.form_btn {
  width: 100px;
  margin:20px auto
}
</style>