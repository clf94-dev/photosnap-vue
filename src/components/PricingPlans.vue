<template>
<div class="pricing-section">
  <div class="pricing-wrapper">
 
    <b-row>
        <h3>Monthly</h3>
        <label class="switch">
  <input @click="changePrice()" type="checkbox" >
  <span class="slider round"></span>
    
</label><h3>Yearly</h3>
    </b-row>
    <div class="pricing-container">
      <div class="pricing-container-card">
        <div class="pricing-container-cardInfo">
          <h3 class="light">Basic</h3>
          <p class="text">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <h2 class="light">{{ year ? "$190.00" : "$19.99" }}</h2>
          <p>per {{ year ? "year" : "month" }}</p>
          <button class="btn btn-dark">PICK PLAN</button>
        </div>
      </div>
      <div class="pricing-container-card">
        <div class="pricing-container-cardInfo">
          <h3>Pro</h3>
          <p class="text">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <h2>{{ year ? "$390.00" : "$39.99" }}</h2>
          <p>per {{ year ? "year" : "month" }}</p>
          <button class='btn btn-light'>PICK PLAN</button>
        </div>
      </div>
      <div class="pricing-container-card">
        <div class="pricing-container-cardInfo">
          <h3 class="light">Business</h3>
          <p class="text">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <h2 class="light">{{ year ? "$990.00" : "$99.99" }}</h2>
          <p>per {{ year ? "year" : "month" }}</p>
          <button class="btn btn-dark">PICK PLAN</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
    export default {
        name: 'PricingPlans',
        data(){
return{
    year:false,
}
        },
        methods:{
             changePrice(){
this.year=!this.year;
  }
        }
    }
</script>

<style scoped>
/////////////////* Switch slider */////////////////////////
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

///////////////////////* PrincingPlans style */////////////////////////

</style>