<template>

	<!-- <div> -->
		<div class="header">

			<div class="header__hamburger" @click="sidebarToggle"></div>

			<router-link to="/" class="header__logo">
				<div class="header__logo">
					<i class="fab fa-think-peaks"></i> Though<strong>Holder</strong> 
				</div>
			</router-link>

			<div class="header__search">
				<form>
					<i class="fas fa-search"></i>
					<input type="search" placeholder="Search"/>
				</form>
			</div>

			<div class="header__notes-view" @click="listviewToggle">
				<div></div>
				<div></div>
				<div v-if="isList"></div>
				<div v-if="isList"></div>
			</div>

			<div class="header__theme" @click="darkToggle">
				<span v-bind:class="{ dark: isDark }"></span>
			</div>

			<div class="header__greeting" @click="showToggle">
				Hi,&nbsp;<strong>Marija!</strong>
				<i class="fab fa-staylinked"></i>
				<span>&rsaquo;</span>
				
				<div class="logout" v-if="show">
					<button class="btn">Logout</button>
				</div>
			</div>
		</div>

	<!-- <transition name="slide" mode="out-in"> -->
		<!-- <Sidebar v-if="isOpen" :class="{ translateX: isOpen }" /> -->
	<!-- </transition> -->
	<!-- </div> -->
	
</template>

<script>
// import Sidebar from '@/components/Sidebar.vue'

export default {
	name: 'Header',
	// components: { Sidebar },

	data() {
		return {
			// isOpen: true,
			isList: false,
			isDark: false,
			show: false
		}
	},

// 	computed: {
// darkToggle() {
// 			this.isDark = !this.isDark
// 		}
// 	},

	methods: {
		sidebarToggle() {
			// this.isOpen = !this.isOpen
			document.querySelector('.sidebar').classList.toggle('translateX');

			// document.querySelector('.grid-container').classList.toggle('grid-sidebar-hidden');

		},

		listviewToggle() {
			this.isList = !this.isList
		},

		darkToggle() {
			this.isDark = !this.isDark
		},

		showToggle() {
			this.show = !this.show
		}
	}
}
</script>


<style>
	/* .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(-100%);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  } */
</style>