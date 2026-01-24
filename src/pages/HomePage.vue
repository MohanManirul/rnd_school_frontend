<script setup>

import MenuBar from '@/components/frontend/MenuBar.vue';
import HeroSlider from '@/components/frontend/HeroSlider.vue';
import TopCategories from '@/components/frontend/TopCategories.vue';
import TopBrands from '@/components/frontend/TopBrands.vue';
import ExclusiveProducts from '@/components/frontend/ExclusiveProducts.vue';
import AppLayout from '@/components/layout/AppLayout.vue';


</script>


<template>
    <AppLayout >
        <MenuBar />
        <HeroSlider />
        <TopCategories />
        <TopBrands />
        <ExclusiveProducts />
    </AppLayout>
</template>


<style scoped>

</style>