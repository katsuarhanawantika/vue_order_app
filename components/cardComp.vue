<template>
 
  <div class="card">
    <img class="card-img-top w-100 d-block" :src="favoriteFoods.thumbnails"/>

  
    <div class="card-body text-center">
      <h4 class="card-title"><strong>{{favoriteFoods.name}}</strong><br /></h4>
      <!-- <p class="card-text">Harga : Rp. {{favoriteFoods.harga}}<br /></p> -->
      <button class="btn btn-success btn-block" type="button">
        <i class="fas fa-cart-plus"></i>&nbsp;Pesan
      </button>
    </div>
  </div>
</template>

<script setup>
    const { favoriteFoods } = defineProps(["favoriteFoods"])
</script>

<style lang="scss" scoped></style>
