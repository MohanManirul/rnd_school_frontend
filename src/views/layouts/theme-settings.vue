<template>
    <div class="sidebar-contact ">
        <div class="toggle-theme"  data-bs-toggle="offcanvas" data-bs-target="#theme-setting"><i class="fa fa-cog fa-w-16 fa-spin"></i></div>
    </div>
    <div class="sidebar-themesettings offcanvas offcanvas-end" id="theme-setting">
        <div class="offcanvas-header d-flex align-items-center justify-content-between bg-light-500">
            <div>
                <h4 class="mb-1">Theme Customizer</h4>
                <p>Choose your themes & layouts etc.</p>
            </div>
            <a href="#" class="custom-btn-close d-flex align-items-center justify-content-center text-white"  data-bs-dismiss="offcanvas"><i class="ti ti-x"></i></a>
        </div>
        <div class="themesettings-inner offcanvas-body">
            <div class="accordion accordion-customicon1 accordions-items-seperate" id="settingtheme">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#layoutsetting" aria-expanded="true" aria-controls="collapsecustomicon1One">
                            Select Layouts
                        </button>
                    </h2>
                    <div id="layoutsetting" class="accordion-collapse collapse show"  >
                        <div class="accordion-body">
                            <div class="row gx-3">
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'default')">
                                        <input type="radio" name="LayoutTheme" id="defaultLayout" value="default"  :checked="themeSettings['data-layout'] === 'default'">
                                        <label for="defaultLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/default.svg" alt="img">
                                            </span>                                     
                                            <span class="layout-type">Default</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'mini')">
                                        <input type="radio" name="LayoutTheme" id="miniLayout" value="mini" :checked="themeSettings['data-layout'] === 'mini'">
                                        <label for="miniLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/mini.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Mini</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'box')">
                                        <input type="radio" name="LayoutTheme" id="boxLayout" value="box" :checked="themeSettings['data-layout'] === 'box'">
                                        <label for="boxLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/box.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Boxed</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <router-link to="/layout-rtl" class="theme-layout mb-3">
                                        <span class="d-block mb-2 layout-img">
                                            <img src="@/assets/img/theme/rtl.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type">RTL</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#colorsetting" aria-expanded="true">
                            Top Bar Color
                        </button>
                    </h2>
                    <div id="colorsetting" class="accordion-collapse collapse show"	>
                        <div class="accordion-body">
                           <div class="d-flex align-items-center">
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-topbar', 'white')">
                                    <input type="radio" name="topbar" id="whiteTopbar" value="white" :checked="themeSettings['data-topbar'] === 'white'">
                                    <label for="whiteTopbar" class="white-topbar"></label>
                                </div>
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-topbar', 'dark')">
                                    <input type="radio" name="topbar" id="darkTopbar" value="dark" :checked="themeSettings['data-topbar'] === 'dark'">
                                    <label for="darkTopbar" class="dark-topbar"></label>
                                </div>
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-topbar', 'primary')">
                                    <input type="radio" name="topbar" id="primaryTopbar" value="primary" :checked="themeSettings['data-topbar'] === 'primary'">
                                    <label for="primaryTopbar" class="primary-topbar"></label>
                                </div>
                                <div class="theme-colorselect m-1" @click="handleUpdateTheme('data-topbar', 'grey')">
                                <input type="radio" name="topbar" id="greyTopbar" value="grey" :checked="themeSettings['data-topbar'] === 'grey'">
                                <label for="greyTopbar" class="grey-topbar"></label>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#modesetting" aria-expanded="true">
                            Color Mode
                        </button>
                    </h2>
                    <div id="modesetting" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                           <div class="row gx-3">
                                <div class="col-6">
                                    <div class="theme-mode" @click="handleUpdateTheme('data-theme', 'light')">
                                        <input type="radio" name="theme" id="lightTheme" value="light" :checked="themeSettings['data-bs-theme'] === 'light'">
                                        <label for="lightTheme" class="p-2 rounded fw-medium w-100">                            
                                            <span class="avatar avatar-md d-inline-flex rounded me-2"><i class="ti ti-sun-filled"></i></span>Light Mode
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="theme-mode" @click="handleUpdateTheme('data-theme', 'dark')">
                                        <input type="radio" name="theme" id="darkTheme" value="dark" :checked="themeSettings['data-bs-theme'] === 'dark'">
                                        <label for="darkTheme" class="p-2 rounded fw-medium w-100">                         
                                            <span class="avatar avatar-md d-inline-flex rounded me-2"><i class="ti ti-moon-filled"></i></span>Dark Mode
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarsetting" aria-expanded="true">
                            Sidebar Color
                        </button>
                    </h2>
                    <div id="sidebarsetting" class="accordion-collapse collapse show"	 >
                        <div class="accordion-body">
                           <div class="d-flex align-items-center">
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'light')">
                                    <input type="radio" name="sidebar" id="lightSidebar" value="light" :checked="themeSettings['data-sidebar'] === 'light'">
                                    <label for="lightSidebar" class="d-block rounded mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'dark')">
                                    <input type="radio" name="sidebar" id="darkSidebar" value="dark" :checked="themeSettings['data-sidebar'] === 'dark'">
                                    <label for="darkSidebar" class="d-block rounded bg-dark mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'primary')">
                                    <input type="radio" name="sidebar" id="primarySidebar" value="primary" :checked="themeSettings['data-sidebar'] === 'primary'">
                                    <label for="primarySidebar" class="d-block rounded bg-primary mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'darkblack')">
                                    <input type="radio" name="sidebar" id="darkblackSidebar" value="darkblack" :checked="themeSettings['data-sidebar'] === 'darkblack'">
                                    <label for="darkblackSidebar" class="d-block rounded bg-darkblack mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1" @click="handleUpdateTheme('data-sidebar', 'darkblue')">
                                    <input type="radio" name="sidebar" id="darkblueSidebar" value="darkblue" :checked="themeSettings['data-sidebar'] === 'darkblue'">
                                    <label for="darkblueSidebar" class="d-block rounded bg-darkblue mb-2">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarbgsetting" aria-expanded="true">
                            Sidebar Background
                        </button>
                    </h2>
                    <div id="sidebarbgsetting" class="accordion-collapse collapse show"	 >
                        <div class="accordion-body">
                           <div class="d-flex align-items-center">
                                <div class="theme-sidebarbg me-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg1')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg1" value="sidebarbg1" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg1'">
                                    <label for="sidebarBg1" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-01.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg2')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg2" value="sidebarbg2" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg2'">
                                    <label for="sidebarBg2" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-02.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg3')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg3" value="sidebarbg3" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg3'"> 
                                    <label for="sidebarBg3" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-03.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3"  @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg4')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg4" value="sidebarbg4" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg4'">
                                    <label for="sidebarBg4" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-04.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg5')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg5" value="sidebarbg5" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg5'">
                                    <label for="sidebarBg5" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-05.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarBg6')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg6" value="sidebarbg6" :checked="themeSettings['data-sidebarbg'] === 'sidebarBg6'">
                                    <label for="sidebarBg6" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-06.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarcolor" aria-expanded="true">
                            Theme Colors
                        </button>
                    </h2>
                    <div id="sidebarcolor" class="accordion-collapse collapse show"	 >
                        <div class="accordion-body pb-2">
                           <div class="d-flex align-items-center">
                                <div class="theme-colorsset me-3 mb-2" @click="handleUpdateTheme('data-color', 'primary')">
                                    <input type="radio" name="color" id="primaryColor" value="primary" :checked="themeSettings['data-color'] === 'primary'">
                                    <label for="primaryColor" class="primary-clr"></label>
                                </div>
                                <div class="theme-colorsset me-3 mb-2" @click="handleUpdateTheme('data-color', 'violet')">
                                    <input type="radio" name="color" id="violetColor" value="violet" :checked="themeSettings['data-color'] === 'violet'">
                                    <label for="violetColor" class="violet-clr"></label>
                                </div>
                                <div class="theme-colorsset me-3 mb-2" @click="handleUpdateTheme('data-color', 'pink')">
                                    <input type="radio" name="color" id="pinkColor" value="pink" :checked="themeSettings['data-color'] === 'pink'">
                                    <label for="pinkColor" class="pink-clr"></label>
                                </div>
                                <div class="theme-colorsset me-3 mb-2" @click="handleUpdateTheme('data-color', 'orange')">
                                    <input type="radio" name="color" id="orangeColor" value="orange" :checked="themeSettings['data-color'] === 'orange'">
                                    <label for="orangeColor" class="orange-clr"></label>
                                </div>
                                <div class="theme-colorsset me-3 mb-2" @click="handleUpdateTheme('data-color', 'green')">
                                    <input type="radio" name="color" id="greenColor" value="green" :checked="themeSettings['data-color'] === 'green'">
                                    <label for="greenColor" class="green-clr"></label>
                                </div>
                                <div class="theme-colorsset me-3 mb-2" @click="handleUpdateTheme('data-color', 'green')">
                                    <input type="radio" name="color" id="redColor" value="red" :checked="themeSettings['data-color'] === 'red'">
                                    <label for="redColor" class="red-clr"></label>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>  
            </div>     
        </div>
        <div class="bg-light-500 p-3">
            <div class="row gx-3">
                <div class="col-6">
                    <a href="#" id="resetbutton" @click.prevent="handleResetTheme" class="btn btn-light close-theme w-100">Reset</a>
                </div>
                <div class="col-6">
                    <a href="https://1.envato.market/52Ndo"  target="_blank" class="btn btn-primary w-100" >Buy Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            themeSettings: {
                'data-layout': 'default',
                'data-width': 'default',
                'data-sidebar': 'light',
                'data-size': 'default',
                'data-topbar': 'white',
                'data-sidebarbg': 'default',
                'data-color': 'primary',
            },
            miniSidebar: false,
            expandMenu: false,
            dataLayout: 'default',
            dataWidth: 'default',
            dataSidebar: 'default',
            dataSize: 'default',
            dataTopbar: 'default',
            dataSidebarbg: 'default',
            dataColor: 'default',
        };
    },
    mounted() {
        this.updateBodyClasses();

        // Set initial values on <html> only
        Object.entries(this.themeSettings).forEach(([key, value]) => {
            document.documentElement.setAttribute(key, value);
        });
    },
    methods: {
        handleUpdateTheme(key, value) {
            this.themeSettings[key] = value;

            // Set attribute on <html> only
            document.documentElement.setAttribute(key, value);

            // Sync local variables
            if (key === 'data-layout') this.dataLayout = value;
            if (key === 'data-width') this.dataWidth = value;
            if (key === 'data-sidebar') this.dataSidebar = value;
            if (key === 'data-size') this.dataSize = value;
            if (key === 'data-topbar') this.dataTopbar = value;
            if (key === 'data-sidebarbg') this.dataSidebarbg = value;
            if (key === 'data-color') this.dataColor = value;

            this.updateBodyClasses();
        },
        updateBodyClasses() {
            const body = document.body;

            // Reset classes
            body.classList.remove('mini-sidebar', 'expand-menu', 'layout-box-mode');

            // Apply conditions
            if (
                this.miniSidebar ||
                this.themeSettings['data-layout'] === 'mini' ||
                this.themeSettings['data-size'] === 'compact'
            ) {
                body.classList.add('mini-sidebar');
            }

            if (
                (this.expandMenu && this.miniSidebar) ||
                (this.expandMenu && this.themeSettings['data-layout'] === 'mini')
            ) {
                body.classList.add('expand-menu');
            }

            if (this.themeSettings['data-layout'] === 'box') {
                body.classList.add('layout-box-mode', 'mini-sidebar');
            }
        },
        handleResetTheme() {
            const defaults = {
                'data-layout': 'default',
                'data-width': 'default',
                'data-sidebar': 'light',
                'data-size': 'default',
                'data-topbar': 'white',
                'data-sidebarbg': 'default',
                'data-color': 'primary',
            };

            Object.entries(defaults).forEach(([key, value]) => {
                this.themeSettings[key] = value;
                document.documentElement.setAttribute(key, value);
            });

            this.miniSidebar = false;
            this.expandMenu = false;
            this.updateBodyClasses();
        },
    },
};
</script>
