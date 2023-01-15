<template>
  <div class="mt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Makanan&nbsp;<strong>Favorite</strong></h2>
        </div>
        <div class="col-md-6 text-right align-self-center">
          <button class="btn btn-outline-success btn-sm" type="button">
            <i class="far fa-eye"></i>&nbsp;Lihat Semua
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card-deck mt-4">
            <CardComp v-for="favfoods in favFood.data.data"  :favoriteFoods="favfoods"/>

            

            
          </div>

            <div v-for="favfoods in favFood.data.data">
                {{favfoods.name}}
            </div>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const url_api = "https://zullkit-backend.buildwithangga.id/api/categories";
const { data: favFood } = await useFetch(url_api);
console.log(favFood.value)
</script>

<style lang="scss" scoped></style>
