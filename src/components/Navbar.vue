<template>
    <nav class="navbar">
    <div class="navbar-cont">
        <div class="navbar-logo">
            <img :src="logo" :alt="PhotoSnap" @click="goToHome()">

        </div>
        <div class="menu-icon">
            <button class="nav-btn" @click="handleClick()">
          <span key="bars" v-if="!click"> <i class="fas fa-bars"></i></span>
          <span key="cross" v-else><i class="fas fa-times"></i></span>
        </button>
        </div>
        <ul :class="click ? 'nav-menu active' : 'nav-menu'">
            <li class="nav-item" @click="closeMobile()">
                <router-link to="/stories" :active-link="active" class="nav-links">Stories</router-link>
            </li>
            <li class="nav-item" @click="closeMobile()">
                <router-link to="/features" :active-link="active" class="nav-links">Features</router-link>
            </li>
            <li class="nav-item" @click="closeMobile()">
                <router-link to="/pricing" :active-link="active" class="nav-links">Pricing
                </router-link>
            </li>
            <li class="nav-item" @click="closeMobile()">
             <button class='mobile-btn'>Get an Invite</button>
            </li>
        </ul>
        <button class='desktop-btn'>Get an Invite</button>
    </div>
</nav>
</template>

<script>
    export default {
        name: 'Navbar',
        methods: {
closeMobile(){
    this.click = false;
},
handleClick(){
    this.click = !this.click;
},
goToHome(){
    this.$router.push("/home");
}
        },
        data(){
            return{
                logo: require("../assets/images/shared/desktop/logo.svg"),
                click: false,
            };
        }
    }
</script>

<style scoped>
 .navbar {
	overflow: hidden;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
    background-color: white;
	margin-bottom: 10px;
}

.navbar .navbar-cont {
	display: flex;
	justify-content: center;
	align-items: center !important;
	height: 80px;
	max-width: 1500px;
}

.navbar .navbar-cont .navbar-logo {
	text-align: start;
	margin-left: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
}

@media screen and (max-width: 756px) {
	.navbar .navbar-cont .navbar-logo {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(25%, 200%);
	}
}

.navbar .navbar-cont .navbar-logo img {
	align-self: start !important;
}

.navbar .navbar-cont .menu-icon {
	display: none;
}

@media screen and (max-width: 756px) {
	.navbar .navbar-cont .menu-icon {
		display: block;
        z-index: 1;
		position: absolute;
		top: 40;
		right: 40px;
		font-size: 1.8rem;
		cursor: pointer;
	}
}

.navbar .navbar-cont .menu-icon .fa-bars,
      .navbar .navbar-cont .menu-icon .fa-times {
	color: #000000;
}

.navbar .navbar-cont .nav-menu {
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-gap: 10px;
	list-style: none;
	text-align: center;
	width: 70vw;
	justify-content: center;
    margin-top: 20px;
}

@media screen and (max-width: 756px) {
	.navbar .navbar-cont .nav-menu {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 45vh;
		position: absolute;
		top: 80px;
		left: 100%;
		opacity: 1;
		transition: all 0.5s ease;
	}

	.navbar .navbar-cont .nav-menu.active {
		background-color: #fff;
        position: absolute;
		left: 0;
		opacity: 1;
		transition: all 0.5s ease;
		z-index: 1;
	}
}

.navbar .navbar-cont .nav-menu .nav-item .nav-links {
	text-decoration: none !important;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	height: 100%;
	color: #000000 !important;
}

@media screen and (max-width: 756px) {
	.navbar .navbar-cont .nav-menu .nav-item .nav-links {
		text-align: center;
		padding: 1.5rem;
		width: 100%;
		display: table;
	}
}

.navbar .navbar-cont .nav-menu .nav-item .nav-links:hover {
	transition: all 0.2s ease-out;
	background-color: #fff;
	color: #DFDFDF !important;
}

.navbar .navbar-cont .nav-menu .nav-item .nav-links-mobile {
	display: none;
}

.navbar .navbar-cont .nav-menu .nav-item .mobile-btn {
	cursor: pointer;
	display: block;
	text-align: center;
	margin: 0.5rem auto 2rem;
	border-radius: 4px;
	width: 80%;
	text-decoration: none;
	font-size: 1.5rem;
	background-color: #fff;
	color: #000000;
	padding: 14px 20px;
	border: 1px solid #000000;
	transition: all 0.3s ease-out;
}

.navbar .navbar-cont .nav-menu .nav-item .mobile-btn:hover {
	background: #000000;
	color: white;
	transition: 250ms;
}

@media screen and (min-width: 756px) {
	.navbar .navbar-cont .nav-menu .nav-item .mobile-btn {
		display: none;
	}
}

.navbar .navbar-cont .desktop-btn {
	cursor: pointer;
	display: block;
	text-align: center;
	margin-right: 5%;
	width: 20%;
	text-decoration: none;
	font-size: 1rem;
	background-color: #000000;
	color: #fff;
	padding: 1% 3%;
	border: 1px solid #000000;
	transition: all 0.3s ease-out;
}

.navbar .navbar-cont .desktop-btn:hover {
	background: lightgray;
	border-color: lightgray;
	color: white;
	transition: 250ms;
}

@media screen and (max-width: 756px) {
	.navbar .navbar-cont .desktop-btn {
		display: none;
	}
}
</style>