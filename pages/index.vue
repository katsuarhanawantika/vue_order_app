<template>
    <div class="bg-gelap">
        <nav class="navbar navbar-light navbar-expand-md navbar-dark">
            <div class="container"><a class="navbar-brand" href="#">PesanFood</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse"
                    id="navcol-1">
                    <ul class="nav navbar-nav">
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Beranda</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="foods.html">Makanan</a></li>
                    </ul>
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><a class="nav-link text-left text-orange" href="#">Keranjang<i class="fas fa-shopping-bag ml-2"></i><span class="badge badge-success ml-2">42</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>


    <HeroC/>
    <FavFoodComp/>

    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h6 class="text-center">© 2022 PesanFood. All rights reserved.</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>