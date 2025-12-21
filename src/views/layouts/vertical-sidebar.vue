<template>
  <div>
    <h3>Sidebar Data</h3>
    <pre>{{ formattedSidebar }}</pre>
  </div>
  <ul>
    <li v-for="item in side_bar_data" :key="item.title">
      <h6 class="submenu-hdr">
        <span>{{ item.title }}</span>
      </h6>
      <ul>
        <template v-for="menu in item.menu" :key="menu.menuValue">
          <li
            v-if="!menu.hasSubRoute"
            :class="{ active: isMenuActive(menu) }"
            :style="{
              display:
                menu.menuValue === 'Authentication' ||
                menu.menuValue === 'Forms'
                  ? 'none'
                  : 'block'
            }"
          >
            <router-link
              v-if="menu.route"
              :to="menu.route"
              @click="expandSubMenus(menu)"
            >
              <i :class="'ti ' + menu.icon"></i>
              <span>{{ menu.menuValue }}</span>
            </router-link>
            <template v-else>
              <span>{{ menu.menuValue }}</span>
              <!-- Handle non-link menu item display -->
            </template>
          </li>
          <li v-else class="submenu">
            <a
              href="javascript:void(0)"
              @click="expandSubMenus(menu)"
              :class="{
                subdrop: menu.showSubRoute,
                active: route_array[1] === menu.active_link
              }"
            >
              <i :class="'ti ' + menu.icon"></i>
              <span>{{ menu.menuValue }}</span>
              <span class="menu-arrow"></span>
            </a>
            <ul
              :class="{
                'd-block': menu.showSubRoute,
                'd-none': !menu.showSubRoute
              }"
            >
              <li v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
                <router-link
                  v-if="subMenu.route"
                  :to="subMenu.route"
                  :class="{
                    active:
                      currentPath === subMenu.active_link ||
                      currentPath === subMenu.active_link1 ||
                      currentPath === subMenu.active_link2 ||
                      currentPath === subMenu.active_link3 ||
                      currentPath === subMenu.active_link4 ||
                      currentPath === subMenu.active_link5 ||
                      currentPath === subMenu.active_link6
                  }"
                >
                  {{ subMenu.menuValue }}
                </router-link>
                <template v-else>
                  <span>{{ subMenu.menuValue }}</span>
                  <!-- Handle non-link submenu item display -->
                </template>
                <ul
                  v-if="subMenu.subMenusTwo"
                  :class="{
                    'd-block': subMenu.showSubRoute,
                    'd-none': !subMenu.showSubRoute
                  }"
                >
                  <li
                    v-for="subSubMenu in subMenu.subMenusTwo"
                    :key="subSubMenu.menuValue"
                  >
                    <router-link
                      v-if="subSubMenu.route"
                      :to="subSubMenu.route"
                      :class="{
                        active: currentPath === subSubMenu.active_link
                      }"
                    >
                      {{ subSubMenu.menuValue }}
                    </router-link>
                    <template v-else>
                      <span>{{ subSubMenu.menuValue }}</span>
                      <!-- Handle non-link submenu item display -->
                    </template>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li v-if="menu.hasSubRouteTwo" class="submenu">
            <a
              href="javascript:void(0);"
              @click="openMenu(menu)"
              :class="{
                subdrop:
                  menu.menuValue === 'Application' ||
                  (menu.menuValue === 'Forms' && isMenuActive(menu)),
                active: isMenuActive(menu)
              }"
            >
              <i :class="'ti ' + menu.icon"></i>
              <span>{{ menu.menuValue }}</span>
              <span class="menu-arrow"></span>
            </a>

            <ul
              :class="{
                'd-block': openMenuItem === menu,
                'd-none': openMenuItem !== menu
              }"
            >
              <template
                v-for="subMenus in menu.subMenus"
                :key="subMenus.menuValue"
              >
                <li v-if="!subMenus.customSubmenuTwo">
                  <router-link
                    :to="subMenus.route"
                    @click="expandSubMenus(subMenus)"
                    >{{ subMenus.menuValue }}</router-link
                  >
                </li>
                <template v-else-if="subMenus.customSubmenuTwo">
                  <li class="submenu">
                    <a
                      href="javascript:void(0);"
                      @click="openSubmenuOne(subMenus)"
                      :class="{
                        subdrop: showSubRoute === subMenus,
                        active: route_array[1] === subMenus.active_link
                      }"
                    >
                      {{ subMenus.menuValue }}
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      :class="{
                        'd-block': showSubRoute === subMenus,
                        'd-none': showSubRoute !== subMenus
                      }"
                    >
                      <li
                        v-for="subMenuTwo in subMenus.subMenusTwo"
                        :key="subMenuTwo.menuValue"
                      >
                        <router-link :to="subMenuTwo.route">{{
                          subMenuTwo.menuValue
                        }}</router-link>
                      </li>
                    </ul>
                  </li>
                </template>
              </template>
            </ul>
          </li>
        </template>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import sideBarJson from "@/assets/json/sidebar-data.json";
const side_bar_data = ref([]); // initially empty

console.log("sideBarJson", side_bar_data);

import { useLeftSideBarStore } from "@/old_stores/leftSideBarData";

const LeftSideBarStore = useLeftSideBarStore();

const leftSideBarMenuSubmenu = async () => {
  const response = await LeftSideBarStore.leftSideBarData();
  side_bar_data.value = response;
};

// Computed for pretty printing
const formattedSidebar = computed(() => {
  return JSON.stringify(side_bar_data.value, null, 2); // 2-space indentation
});

// Auto Execute
onMounted(() => {
  leftSideBarMenuSubmenu();
});
// ROUTE
const route = useRoute();

// REACTIVE STATES

const openMenuItem = ref(null);
const showSubRoute = ref(null);
const route_array = ref([]);
const multilevel = ref([false, false, false]);

// METHODS ===============================
const expandSubMenus = (menu) => {
  side_bar_data.value.forEach((item) => {
    if (item.menu && Array.isArray(item.menu)) {
      item.menu.forEach((subMenu) => {
        if (subMenu !== menu) {
          subMenu.showSubRoute = false;
          subMenu.showSubRoute1 = false;
        }
      });
    }
  });

  menu.showSubRoute = !menu.showSubRoute;

  // Save the state to localStorage
  localStorage.setItem("openSubMenu", JSON.stringify(side_bar_data.value));
};

const openMenu = (menu) => {
  openMenuItem.value = openMenuItem.value === menu ? null : menu;

  localStorage.setItem(
    "openMenuItem",
    openMenuItem.value ? openMenuItem.value.menuValue : null
  );
};

const openSubmenuOne = (subMenus) => {
  showSubRoute.value = showSubRoute.value === subMenus ? null : subMenus;

  localStorage.setItem(
    "showSubRoute",
    showSubRoute.value ? showSubRoute.value.menuValue : null
  );
};

const getCurrentPath = () => {
  route_array.value = route.path.split("/");
  return route.path;
};

// RESTORE MENU STATE ===============================
const restoreMenuState = () => {
  const openMenuItemName = localStorage.getItem("openMenuItem");
  const openSubMenu = localStorage.getItem("openSubMenu");

  if (openSubMenu) {
    side_bar_data.value = JSON.parse(openSubMenu);
  }

  if (openMenuItemName) {
    side_bar_data.value.forEach((item) => {
      if (item.menu && Array.isArray(item.menu)) {
        item.menu.forEach((menu) => {
          if (menu.menuValue === openMenuItemName) {
            openMenuItem.value = menu;
          }
        });
      }
    });
  }
};

// COMPUTED ===============================
const currentPath = computed(() => getCurrentPath());

const isMenuActive = computed(() => {
  return (menu) => {
    if (menu.menuValue === "Application") {
      return (
        route.path.startsWith("/application") ||
        route.path.startsWith("/call") ||
        route.path === menu.active_link ||
        route.path === menu.active_link1 ||
        route.path === menu.active_link2
      );
    }

    return (
      route.path === menu.route ||
      route.path === menu.active_link ||
      route.path === menu.active_link1 ||
      route.path === menu.active_link2 ||
      route.path === menu.active_link3 ||
      route.path === menu.active_link4 ||
      route.path === menu.active_link5 ||
      route.path === menu.active_link6
    );
  };
});

// MOUNTED ===============================
onMounted(() => {
  restoreMenuState();
});
</script>
