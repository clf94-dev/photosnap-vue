<template>
<div class="pricing-section">
  <div class="pricing-wrapper">
 
    <b-row class="toggle">
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
/*--------------------------------- Switch slider ------------------------------------*/
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
  background-color: black;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked +.slider:before{
    background-color:white;
}

input:checked + .slider {
  background-color: black;
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

/*----------------------- PrincingPlans style -------------------------------------*/
.pricing-section {
	padding: 5% 7% 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.pricing-section .pricing-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
}

.pricing-section .pricing-wrapper .pricing-heading {
	color: #000000;
}

.pricing-section .pricing-wrapper .toggle {
	margin-bottom: 50px;
}
.pricing-section .pricing-wrapper .toggle h3{
	margin: 0 20px;
}

.pricing-section .pricing-wrapper .pricing-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card {
	background: white;
	box-shadow: 0 6px 20px gray;
	width: 400px;
	height: 500px;
	text-decoration: none;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card:nth-child(2) {
	transform: scale(1.1);
	background-color: #000000;
	color: #ffffff;
	z-index: 5;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card:nth-child(2):hover {
	transform: scale(1.11);
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card:hover {
	transform: scale(1.06);
	transition: all 0.3s ease-out;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo {
	display: flex;
	flex-direction: column;
	padding: 20% 10% 6% 10%;
	height: 500px;
	text-align: center;
	align-items: center !important;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo h3 {
	font-size: 24px;
	margin-bottom: 10px;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo h3.light {
	color: #000000;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo h2 {
	font-size: 60px;
	margin-top: 20px;
	margin-bottom: 1px;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo h2.light {
	color: #000000;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo p {
	font-size: 16px;
	padding: 0 7%;
	margin-bottom: 80px;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo p.text {
	margin: 20px auto;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo button {
	width: 100% !important;
	height: 50px !important;
	border: none;
	font-size: 15px;
	text-transform: uppercase;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo button.btn-light {
	color: #ffffff;
	background-color: #000000;
	border: 2px solid #ffffff;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo button.btn-light:hover {
	color: #000000;
	background-color: #ffffff;
	border-color: #000000;
	transition: all 0.3s ease;
	cursor: pointer;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo button.btn-dark {
	color: #ffffff;
	background-color: #000000;
	border: 2px solid #000000;
}

.pricing-section .pricing-wrapper .pricing-container .pricing-container-card .pricing-container-cardInfo button.btn-dark:hover {
	color: #000000;
	background-color: #ffffff;
	border-color: #000000;
	transition: all 0.3s ease;
	cursor: pointer;
}

@media screen and (max-width: 850px) {
	.pricing-wrapper {
		margin: 0 20px !important;
		display: flex;
		flex-direction: column;
		justify-content: center !important;
		align-items: center !important;
	}

	.pricing-wrapper .pricing-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100% !important;
	}

	.pricing-wrapper .pricing-container-card {
		width: 100%;
	}

	.pricing-wrapper .pricing-container-card:nth-child(2) {
		transform: scale(1) !important;
		margin: 30px;
	}

	.pricing-wrapper .pricing-container-card:nth-child(2):hover {
		transform: none !important;
	}

	.pricing-wrapper .pricing-container-card:hover {
		transform: none !important;
	}
}
</style>