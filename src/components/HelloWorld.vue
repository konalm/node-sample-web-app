<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4> Automated deployments with Kubernetes. First deployment success?</h4>
    <p> message from api: {{ apiMessage }} </p>
  </div>
</template>

<script>
import http from '../services/httpService';
import config from '../config.json';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      apiMessage: ''
    }
  },

  created() {
    this.getApiMessage();
  },

  methods: {
    getApiMessage() {
      console.log('get api message ()');

      http.get(config.apiEndpoint)
        .then((res) => {
          console.log('api response --->')
          console.log(res);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
